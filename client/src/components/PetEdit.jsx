import React, { Component } from 'react';
import './PetEdit.css';
import { Link } from 'react-router-dom';

export default class PetEdit extends Component {
  state = {
    name: '',
    pet_type: '',
    breed: '',
    age: 0,
    img_url: '',
    isError: false,
    errorMsg: '',
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: '',
    });
  };

  handleSubmit = e => {
    const { history } = this.props;
    const { isError, errorMsg, ...other } = this.state;
    e.preventDefault();
    this.props
      .handRegisterSubmit({ ...other })
      .then(() => history.push('/pets'))
      .catch(error => {
        console.error(error);
        this.setState({
          username: '',
          email: '',
          password: '',
          isSitter: false,
          isError: true,
          errorMsg: 'Sign Up Details Invalid',
        });
      });
  };
  render() {
    console.log('PETEDIT render.....', this.props);
    const { name, pet_type, breed, age, img_url } = this.state;
    return (
      <>
        <div className='petDetail'>
          <img id='img' className='petDetailImage' src={img_url} alt={pet_type} />
          <div className='items-details'>
            <div className='LabelDetailLabel'>Name:</div>
            <div className='LabelDetail'>{name}</div>
            <div className='LabelDetailLabel'>Age:</div>
            <div className='LabelDetail'>{age}</div>
            <div className='LabelDetailLabel'>Breed:</div>
            <div className='LabelDetail'>{breed}</div>
            <div className='LabelDetailLabel'>Type:</div>
            <div className='LabelDetail'>{pet_type}</div>
            <Link className='buttonLink' to='/pets/:id/edit'>
              <button className='editButton'>Save</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
