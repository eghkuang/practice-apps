import React from "react";

function Form1({state, form1, handleForm}) {
  return (
    <form className="F1" onSubmit={form1}>
      <label>
        <h2>Name/Form1:</h2>
        <input onChange={handleForm} value={state.name} type="text" name="name" placeholder="name"/>
        <input onChange={handleForm} value={state.email} type="text" name="email" placeholder="email"/>
        <input onChange={handleForm} value={state.pw} type="text" name="pw" placeholder="password"/>
      </label>
      <input type="submit" value="NEXT" />
    </form>
  )

}

export default Form1;