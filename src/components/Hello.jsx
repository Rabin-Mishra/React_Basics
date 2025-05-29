function Hello({ name, message, question, person }) {
  // for destructing of the props
  //   const { name, message } = props;
  // function Hello(props) in place of this props can be passed as it is while function creation
  return (
    <div>
      <h1>
        {message} {name} {question}
      </h1>
      <h2>
        {person.message}
        {person.name} {person.seatNumber}
      </h2>
    </div>
  );
}
export default Hello;
