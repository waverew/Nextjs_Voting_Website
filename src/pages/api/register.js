import { db } from "../../firebase";
import { ref, get, set } from "firebase/database";
export default async function handler(req, res) {
  const { email, password, name, username } = req.body;
  const re = ref(db, "user");
  const ge = await get(re);
  const updateData = ge.val();

  // TODO: add check if account already exists
  
  updateData[username] = {
    email: email,
    password: password,
    name: name,
  };

  set(re, updateData);

  res.status(300).send("no");
}
