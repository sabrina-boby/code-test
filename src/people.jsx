export default function People({ task, isDone }) {
  //   return (
  //     <>
  //       <h1>Boby...</h1>

  //       {!isDone ? <h2>I am learning {task}</h2> : <h2>sorry</h2>}
  //     </>
  //   );

  if (isDone == true) {
    return <h2>{task}</h2>;
  }
  else{
    return <h2>sorry</h2>
  }
}
