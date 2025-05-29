import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;

  // use of the concept of element variables so as to obtain a single return statemnet
  <h3>Use of the concept of element variable for conditional rendering</h3>;
  return display ? (
    <>
      <h1>Message 1</h1> <Welcome />
    </>
  ) : (
    <>
      <h1>Messge 2</h1>
      <Code />
    </>
  );

  //use of the concept of ternaryu operators
}
