import BaseQuery from "../../shared/base/BaseQuery.js";

class WebinarQuery extends BaseQuery {
  constructor(repository) {
    super(repository);
  }

  async getAll({ skip, limit }) {
    return await this.repository.findAll({ skip, limit });
  }
}

export default WebinarQuery;