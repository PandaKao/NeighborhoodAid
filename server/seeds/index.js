import db from "../models/index.js";
import { seedUsers } from "./user-seeds.js";
import { seedReportAuthority } from "./issue-authority-seed.js";


const seedAll = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

    await seedReportAuthority();
    console.log("\n----- ISSUE AUTHORITY SEEDED -----\n");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedAll();