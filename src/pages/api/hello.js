// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Import the functions you need from the SDKs you need
import {db} from '../../firebase'
import {ref, get, set} from 'firebase/database'
export default async function handler(req, res) {
  const re = new ref(db, "user");
  const ge = await get(re);
  res.status(200).json({ name: 'John Doe' })
}
