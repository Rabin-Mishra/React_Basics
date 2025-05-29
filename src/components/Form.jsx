import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //how to manage all the inputs at once use hooks
  function handleSubmit(e) {
    e.preventDefault();
    console.log9("Give the message code success");
  }

  return (
    <div>
      <h3>Form handling in React or user input handling :</h3>
      {name.firstName}--{name.lastName};
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
        />

        <button
          onClick={() => {
            handleSubmit(e);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
