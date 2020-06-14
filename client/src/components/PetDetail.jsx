import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PetDetail.css';

export default class PetDetail extends Component {
  // state = {
  //   name: '',
  //   pet_type: '',
  //   breed: '',
  //   age: 0,
  //   img_url: '',
  // };

  // getOne = async () => {
  //   let { id } = this.props.match.params;
  //   const pet = await getOnePet(id);
  //   this.setState({ ...pet });
  // };
  // componentDidMount() {
  //   if (this.props.currentUser) {
  //     this.getOne();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.currentUser !== this.props.currentUser) {
  //     this.getOne();
  //   }
  // }

  // componentDidUpdate(_prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.getOne();
  //   }
  // }

  render() {
    // console.log('render.....', this.props);
    // const { name, pet_type, breed, age, img_url } = this.state;
    const { currentPet } = this.props;
    console.log(currentPet);
    // const { name, pet_type, breed, age, img_url } = currentPet;
    console.log(this.props);
    return (
      <>
        {currentPet && (
          <div className='petDetail'>
            <img
              id='img'
              className='petDetailImage'
              src={currentPet.img_url}
              alt={currentPet.pet_type}
            />
            <div className='items-details'>
              <div className='LabelDetailLabel'>Name:</div>
              <div className='LabelDetail'>{currentPet.name}</div>
              <div className='LabelDetailLabel'>Age:</div>
              <div className='LabelDetail'>{currentPet.age}</div>
              <div className='LabelDetailLabel'>Breed:</div>
              <div className='LabelDetail'>{currentPet.breed}</div>
              <div className='LabelDetailLabel'>Type:</div>
              <div className='LabelDetail'>{currentPet.pet_type}</div>
              <div className='buttonsDetails'>
                <button
                  className='deleteButton'
                  onClick={() => {
                    this.props.setPetEdit(currentPet);
                    this.props.history.push(`/pets/${currentPet.id}/edit`);
                  }}>
                  edit
                </button>
                <button
                  className='deleteButton'
                  onClick={() => {
                    this.props.removePet(currentPet.id);
                    this.props.history.push('/pets');
                  }}>
                  delete
                </button>
                {/* <Link to={`/pets/${currentPet.id}/appointments`}> */}
                <button
                  className='petAppointmentButton'
                  onClick={() => {
                    this.props.getAllPetsAppointments(currentPet.id);
                    this.props.history.push(`/pets/${currentPet.id}/appointments`);
                  }}>
                  Appointments
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
