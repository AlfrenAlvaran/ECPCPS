import BaseQuery from "../../shared/base/BaseQuery.js";

class WebinarQuery extends BaseQuery {
  constructor(repository) {
    super(repository);
  }

  async getAll({ skip, limit }) {
    return await this.repository.findAll({ skip, limit });
  }

  async getById(id) {
    return this.repository.findById(id);
  }

  async countAll() {
    return this.repository.count_event();
  }

  async countByMonth() {
    return await this.repository.countByMonth();
  }

  async countGroupedByMonth() {
    const rawData = await this.repository.countGroupedByMonth();

    const months = [
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
    ];

    return rawData.map((item) => ({
      month: months[item.monthNum],
      webinars: item.webinars,
      attendees: item.attendees,
    }));
  }

  async getDonutData() {
    const data = await this.repository.countWebinarsWithAttendeeCount();
    return data.map((item) => ({
      webinarName: item.title,
      attendees: item.attendees,
    }));
  }
}

export default WebinarQuery;
