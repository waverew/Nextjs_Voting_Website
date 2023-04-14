import { db } from "../../firebase";
import { ref, get, set } from "firebase/database";
export default async function handler(req, res) {
  const { username, password } = req.body;
  const re = ref(db, "user");
  const ge = await get(re);
  if (
    Object.values(ge.val()).includes(username) &&
    Object.values(ge.val()).includes(password)
  ) {
    res.redirect("../dashboard");
  }
  /*if(username == "bebra@g.com" && password == "bebra"){
        res.redirect('../dashboard');
    }*/
  res.status(300).send("no");
}
