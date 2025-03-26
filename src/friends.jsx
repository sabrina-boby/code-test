import { use } from "react";
const fetchFriends = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json()
  }


export default function Friends() {
  const friends = use(fetchFriends())
  console.log("=> ", friends);
  return (
    <>
      <p>hi Friends</p>
    </>
  );
}