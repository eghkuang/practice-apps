import React from "react";

function Form2({form2, onChange}) {
  return (
    <form className="F2" onSubmit={form2}>
        <h2>whereabouts/Form2:</h2>
      <label>
        <input type="text" name="address1" placeholder="Address 1"/>
        <input type="text" name="address2" placeholder="Address 2"/>
        <input type="text" name="city" placeholder="City"/>
        <input type="text" name="state" placeholder="State"/>
        <input type="text" name="addressZip" placeholder="Zip Code"/>
        <input type="text" name="phone" placeholder="Phone Number"/>
      </label>
      <input type="submit" value="NEXT"/>
    </form>
  )

}

export default Form2;