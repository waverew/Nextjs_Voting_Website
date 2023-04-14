import { db } from "../../firebase";
import { ref, get, set } from "firebase/database";
export default async function handler(req, res) {
  const { username, password } = req.body;
  const re = ref(db, "user");
  const ge = await get(re);
  console.log(typeof(ge.val().password));
  console.log(password == ge.val().password)
    Object.keys(ge).forEach(key => {
        if(toString(ge.key) == password){
            console.log("user ok");
            Object.key(ge).forEach(k => {
                if (toString(ge[k]) == username){
                    console.log("succ");
                }
            })
        }
    });
  /*if(username == "bebra@g.com" && password == "bebra"){
        res.redirect('../dashboard');
    }*/
  res.status(300).send("no");
}
