import express from "express";
const router = express.Router();


import {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getUsers,
} from "../controllers/users.js";



router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
