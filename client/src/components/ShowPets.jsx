import React from "react";

export default function ShowPets(props) {
  const { currentUser, pets } = props;
  console.log(pets);
  return (
    <div className='MainShowPets'>
      <div className='WelcomeTitleShowPets'>
        Welcome {currentUser ? currentUser.username : ""}
      </div>
      <div className='PetTitle'>Your Pets</div>
      {pets.map((pet) => (
        <>
          <h1>pet.name</h1>
        </>
      ))}
    </div>
  );
}
