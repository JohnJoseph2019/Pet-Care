import React from "react";

export default function ShowPets(props) {
  const { currentUser, pets } = props;
  console.log("show pets", currentUser);
  return (
    <div className='MainShowPets'>
      <div className='WelcomeTitleShowPets'>
        Welcome {currentUser ? currentUser.username : ""}
      </div>
      <div className='PetTitle'>Your Pets</div>
      {pets.map((pet) => (
        <h1 key={pet.id}>{pet.name}</h1>
      ))}
    </div>
  );
}
