import fs from "fs";
export default async function handler(req, res) {
  const filePath = "C:/Users/waver/Desktop/WORKSPACE/f/nextf/poldata.json"; // path to your JSON file
  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);
  res.status(200).json(data);
}
