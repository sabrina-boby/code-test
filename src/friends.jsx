import { use } from "react";

export default function Friends({fetchFriends}) {
  const friends = use(fetchFriends)
  console.log("=> ", friends);
  return (
    <>
      <p>hi Friends</p>
    </>
  );
}