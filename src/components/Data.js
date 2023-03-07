import React from 'react'

function Input() {
  return (
    <form>
    <label for="uname"></label>
      <input type="text" placeholder="Mobile" name="uname" required/>
      
      <br/>
      <br/>
      <label for="psw"></label>
      <input type="password" placeholder="Password" name="psw" required/>
    </form>
  )
}

export default Input
