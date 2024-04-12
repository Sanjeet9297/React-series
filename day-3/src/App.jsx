import Card from "./components/Card";


function App() {
  let myObj = {
    username: "Sanjeet",
    age:20,
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        {" "}
        Tailwind Test
      </h1>
      <Card username="Sanjay kr " btnText="Click me"/>
      <Card username=" Sanjeet kumar"/>
    </>
  );
}

export default App
