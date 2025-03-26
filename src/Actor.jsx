import { use } from "react";

export default function Actor({ fetchUser }) {
  const user = use(fetchUser)
  console.log("=> ", user);
  return (
    <>
      <p>hi</p>
    </>
  );
}

// export default function Actor({ name }) {
//   return <h1>Actor: {name}</h1>;
// }
