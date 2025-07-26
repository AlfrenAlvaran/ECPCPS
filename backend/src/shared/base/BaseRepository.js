class BaseRepository {
  constructor(model) {
    if (!model) throw new Error("model is required");
    this.model = model;
  }

  async create(data) {
    const document = new this.model(data);
    return await document.save();
  }

  async findAll({ skip = 0, limit = 5 }) {
    return await this.model
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async count_event() {
    return await this.model.countDocuments();
  }

  async countByMonth() {
    return await this.model.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          month: {
            $arrayElemAt: [
              [
                "",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              "$_id",
            ],
          },
          count: 1,
          _id: 0,
        },
      },
      {
        $sort: { month: 1 },
      },
    ]);
  }

  async countGroupedByMonth() {
    return await this.model.aggregate([
      {
        $project: {
          monthNum: { $month: "$createdAt" },
          year: { $year: "$createdAt" },
          attendeesCount: { $size: "$attendees" },
        },
      },
      {
        $group: {
          _id: {
            monthNum: "$monthNum",
            year: "$year",
          },
          webinars: { $sum: 1 },
          attendees: { $sum: "$attendeesCount" },
        },
      },
      {
        $project: {
          _id: 0,
          monthNum: "$_id.monthNum",
          year: "$_id.year",
          webinars: 1,
          attendees: 1,
        },
      },
      {
        $sort: { year: 1, monthNum: 1 },
      },
    ]);
  }

  async countWebinarsWithAttendeeCount() {
    return await this.model.aggregate([
      {
        $project: {
          title: 1,
          attendees: { $size: "$attendees" },
        },
      },
      {
        $sort: {
          attendees: 1,
        },
      },
    ]);
  }
}
export default BaseRepository;
