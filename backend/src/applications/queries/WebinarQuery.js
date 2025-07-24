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
}

export default WebinarQuery;
