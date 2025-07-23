import BaseRepository from "../../shared/base/BaseRepository.js";
import UserModel from "../database/models/UserModel.js";

class AuthRepository extends BaseRepository {
  constructor() {
    super(UserModel);
  }

  findByEmail(email) {
    return this.model.findOne({ email });
  }
}

export default AuthRepository;
