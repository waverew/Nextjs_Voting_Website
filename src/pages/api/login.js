import { db } from "../../firebase";
import { ref, get, set } from "firebase/database";
export default async function handler(req, res) {
  const { username, password } = await req.body;
  const re = ref(db, "user");
  const ge = await get(re);

  // TODO: add routs protection, authentication and forgot password button
  console.log(Object.keys(ge.val()).includes(username));
  if (Object.keys(ge.val()).includes(username)) {
    if (Object.values(ge.val()[username]).includes(password)) {
      res.status(200).redirect("../dashboard");
    }
  }
  else res.status(300).send("no");
}
