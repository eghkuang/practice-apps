import React from "react";

function Form3 ({state, form3, handleForm}) {
  return (
    <form className="F3" onSubmit={form3}>
      <label>
        <h2>moonies/Form3:</h2>
        <input onChange={handleForm} value={state.credit}type="text" name="credit" placeholder="Credit Card #"/>
        <input onChange={handleForm} value={state.exp} type="text" name="exp" placeholder="EXP Date"/>
        <input onChange={handleForm} value={state.cvv} type="text" name="cvv" placeholder="CVV"/>
        <input onChange={handleForm} value={state.zip} type="text" name="zip" placeholder="ZIP Code"/>
      </label>
      <input type="submit" value="SUBMIT"/>
    </form>
  )
}

export default Form3;

