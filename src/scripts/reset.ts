import fs from "fs";

console.log("Started... \nRenaming...")
fs.rename(".env.example", ".env", (error) => {
  if (error) {
    return console.log("Failed to copy:", error);
  }
  return console.log("Renamed .env.example to .env")
});