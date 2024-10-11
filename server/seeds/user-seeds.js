import bcrypt from "bcrypt";
import User from "../models/user.js";

export const seedUsers = async () => {
  try {
    const users = [
      {
        name: "John Doe",
        email: "JohnDoe1@gmail.com",
        password: "password",
      },
      {
        name: "Jane Smith",
        email: "JaneSmith2@gmail.com",
        password: "password",
      },
    ];

    const hashedUsers = await Promise.all(users.map(async (user) => ({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    })));

  await User.bulkCreate(hashedUsers);
  console.log("Users seeded successfully");
  } catch (error) {
    console.error("Failed to seed users: ", error);
  }
};