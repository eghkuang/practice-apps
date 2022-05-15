import React from "react";

function Form1({form1, onChange}) {
  return (
    <form className="F1" onSubmit={form1}>
      <label>
        <h2>Name/Form1:</h2>
        <input type="text" name="name" placeholder="name"/>
        <input type="text" name="email" placeholder="email"/>
        <input type="text" name="pw" placeholder="password"/>
      </label>
      <input type="submit" value="NEXT" />
    </form>
  )

}

export default Form1;