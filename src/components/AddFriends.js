import React from "react";


const AddFriends = () => {
  return (
    <div>
      <h2>Add Friend</h2>
      <form>
        <div>
          <label htmlFor="friendName">Friend Name</label>
          <input id="friendName"/>
        </div>
        <div>
          <label htmlFor="friendEmail">Friend Email</label>
          <input id="friendEmail"/>
        </div>
        <div>
          <label htmlFor="friendAge">Friend Age</label>
          <input id="friendAge"/>
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
    
  )
}

export default AddFriends;