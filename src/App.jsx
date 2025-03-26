import "./App.css";
import People from "./people";
import Actor from "./Actor";
// import Singer from "./Singer";
import Batsman from "./Batsman";
import Counter from "./counter";
import Friends from "./friends";
import { Suspense } from "react";
function App() {
  // return (
  //   <>
  //     <h1>Hi...</h1>
  //     <People task="Learn JS" isDone={true}></People>
  //   </>
  // );
  // const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  //   (response) => response.json()
  // );

  let actors = ["a", "b", "c", "d", "e"];
  let singers = [
    { id: 1, name: "sabrina", age: "24" },
    { id: 2, name: "akter", age: "25" },
    { id: 3, name: "boby", age: "24" },
  ];

  function btnClick() {
    alert("love");
  }
  function btnClick2(num) {
    alert(num + 2);
  }
  return (
    <>
      <Friends ></Friends>
      <Batsman></Batsman>
      ============
      <Counter></Counter>
      {/* {singers.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))} */}
      <Suspense>
      {/* <Actor fetchUser={fetchUser}></Actor> */}
      </Suspense>
      
      {/* <button onClick={btnClick}>click me</button>
      <button onClick={() => btnClick2(3)}>click me 2</button> */}
    </>
  );
}

export default App;
