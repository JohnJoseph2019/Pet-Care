import React from "react";

export default function ShowPets(props) {
  const { currentUser } = props;
  console.log(currentUser);
  return (
    <div className='MainShowPets'>
      <div className='WelcomeTitleShowPets'>
        Welcome {currentUser ? currentUser.username : ""}
      </div>
      <div className='PetTitle'>Your Pets</div>
    </div>
  );
}
