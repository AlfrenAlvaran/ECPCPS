class UserEntities {
  constructor({ id, email, password }) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  changePassword(password) {
    if (password.length < 8) throw new Error("Password too Short");
    this.password = password;
  }

  getProfile() {
    return {
      id: this.id,
      email: this.email,
    };
  }
}
export default UserEntities;
