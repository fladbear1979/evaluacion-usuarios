const users = [];

module.exports = {
  addUser(req, res) {
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
  },
  getUsers(req, res) {
    res.status(200).send(users);
  }
};