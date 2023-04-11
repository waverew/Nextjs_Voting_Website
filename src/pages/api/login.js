import { db } from "../../firebase";
import { ref, get, set } from "firebase/database";
export default async function handler(req, res) {

    console.log(req.body)
const {username, password} = req.body
    console.log(username, password)
    
    if(username == "bebra@g.com" && password == "bebra"){
        res.redirect('../dashboard');
    }
    res.status(300).send("no");
}
