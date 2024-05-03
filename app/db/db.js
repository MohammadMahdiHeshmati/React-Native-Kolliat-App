import { enablePromise, openDatabase } from "react-native-sqlite-storage";

enablePromise(true);

export const connectToDatabase = async () => {
  return openDatabase(
    { name: "kolliatmmh.db", location: "default" },
    () => {},
    (error) => {
      console.error(error);
      throw Error("Could not connect to database");
    }
  );
};
