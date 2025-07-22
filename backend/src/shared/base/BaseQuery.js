export default class BaseQuery {
  constructor(repository) {
    if (!repository) throw new Error("Repository");
    this.repository = repository;
  }
}
