import { v4 as uuidv4 } from "uuid";

let users = [];

const getUsers = (req, res) => {
    res.send(users)
}

const createUser = (req, res) => {
  const user = req.body;
  // const userId = uuidv4();
  users.push({ ...user, id: uuidv4() });
  console.log(`user ${user.firstname} added to db`);
  res.send(users);
};

const getUser = (req, res) => {
    const { id } = req.params;

    const queriedUser = users.find((user) => user.id === Number(id));
    res.send(queriedUser);
}
const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const userToUpdate = users.find((user) => user.id === id);
    if (!userToUpdate) {
      res.status(400).json({ Message: "User not found" });
      return;
    }
    if (firstname) {
      userToUpdate.firstname = firstname;
    }
    if (lastname) {
      userToUpdate.lastname = lastname;
    }
    if (age) {
      userToUpdate.age = age;
    }
    res.status(201).json(userToUpdate);
}

export { createUser, getUser, deleteUser, updateUser, getUsers };
