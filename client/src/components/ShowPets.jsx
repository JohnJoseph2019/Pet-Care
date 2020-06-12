import React from "react";
import Pet from "./Pet";
import "./ShowPets.css";

export default function ShowPets(props) {
  const { currentUser, pets } = props;
  console.log("show pets", currentUser);
  const petList = pets.map((pet) => <Pet key={pet.id} {...pet} />);
  return (
    <div className='MainShowPets'>
      <div className='WelcomeTitleShowPets'>
        Welcome {currentUser ? `${currentUser.username},` : ""}
      </div>
      <div className='PetTitle'>Your Pets</div>
      <div className='ShowPetsOutterContainer'>{petList}</div>
    </div>
  );
}
