import { env } from "../../infrastructure/config/env.js";
import BaseCommand from "../../shared/base/BaseCommand.js";
import { BadRequestError } from "../../shared/errors/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class AuthCommand extends BaseCommand {
  constructor({ repository, io = null, notification = null }) {
    super(repository, io, notification);
  }

  async registerUser(data) {
    const { email, password } = data;

    const exist = await this.repository.findByEmail(email);
    if (exist) throw new BadRequestError("email already been use");

    const hashed = await bcrypt.hash(password, 10);
    const user = await this.repository.create({
      email,
      password: hashed,
    });

    return {
      email: user.email,
    };
  }

  async login(data) {
    const { email, password } = data;
    const user = await this.repository.findByEmail(email);
    if (!user) throw new BadRequestError("Invalid credentials", 400);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new BadRequestError("Invalid credentials", 400);

    const token = jwt.sign({ id: user._id, email: user.email }, env.jwt, {
      expiresIn: "15d",
    });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
}

export default AuthCommand;
