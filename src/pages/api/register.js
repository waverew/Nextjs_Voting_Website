import { db } from "../../firebase";
import { ref, get, set } from "firebase/database";
export default async function handler(req, res) {
  const { username, password, name } = req.body;
  const re = ref(db, "user");
  const ge = await get(re);
  set();
  res.status(300).send("no");
}