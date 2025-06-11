const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const filePath = path.join(__dirname, '../data/users.json');

class User {
  static getAll() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  static saveAll(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  }

  static findByEmail(email) {
    return this.getAll().find(user => user.email === email);
  }

  static create(email, password) {
    const users = this.getAll();
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      id: Date.now(),
      email,
      password: hashedPassword
    };
    users.push(newUser);
    this.saveAll(users);
    return newUser;
  }

  static validate(email, password) {
    const user = this.findByEmail(email);
    if (!user) return null;
    const valid = bcrypt.compareSync(password, user.password);
    return valid ? user : null;
  }
}

module.exports = User;
