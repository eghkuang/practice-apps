import React from "react";

function Form2({state, form2, handleForm}) {
  return (
    <form className="F2" onSubmit={form2}>
        <h2>whereabouts/Form2:</h2>
      <label>
        <input onChange={handleForm} value={state.address1} type="text" name="address1" placeholder="Address 1"/>
        <input onChange={handleForm} value={state.address2} type="text" name="address2" placeholder="Address 2"/>
        <input onChange={handleForm} value={state.city} type="text" name="city" placeholder="City"/>
        <input onChange={handleForm} value={state.state} type="text" name="state" placeholder="State"/>
        <input onChange={handleForm} value={state.addressZip} type="text" name="addressZip" placeholder="Zip Code"/>
        <input onChange={handleForm} value={state.phone} type="text" name="phone" placeholder="Phone Number"/>
      </label>
      <input type="submit" value="NEXT"/>
    </form>
  )

}

export default Form2;