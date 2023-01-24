import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://admFinanciera:adm123456@cluster0.l6ap3ox.mongodb.net/?retryWrites=true&w=majority";
