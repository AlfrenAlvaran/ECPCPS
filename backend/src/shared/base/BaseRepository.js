class BaseRepository {
  constructor(model) {
    if (!model) throw new Error("model is required");
    this.model = model;
  }

  async create(data) {
    const document = new this.model(data);
    return await document.save();
  }

  async findAll({ skip = 0, limit = 10 }) {
    return await this.model
      .find()
      .sort({ createAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
  }

  async findById(id) {
    return await this.model.findById(id).lean()
  }
}
export default BaseRepository;