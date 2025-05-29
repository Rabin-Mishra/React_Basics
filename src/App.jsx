import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Welcome from "./components/Welcome";
import Code from "./components/Code";
import Message from "./components/Mesage";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const person = {
    name: "Rob",
    message: "Hello ROB",
    seatNumber: [1, 2, 3, 4],
  };
  return (
    <div className="App">
      <Hello
        name="Rabin "
        message="Hi there!"
        question=" How are you ?"
        person={person}
      />
      <Fruits />
      <ConditionalComponent />
      <Welcome />
      <Code />
      <Message />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
