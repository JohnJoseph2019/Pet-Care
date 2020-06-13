import React, { Component } from 'react';
import './AddPet.css';

export default class AddPet extends Component {
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
  handleSubmit = async e => {
    e.preventDefault();
    const { history, createPet } = this.props;
    const { isError, errorMsg, ...other } = this.state;
    createPet({ ...other })
      .then(() => history.push('/pets'))
      .catch(error => {
        console.error(error);
        this.setState({
          name: '',
          pet_type: '',
          breed: '',
          age: 0,
          img_url: '',
          isError: true,
          errorMsg: 'Sign Up Details Invalid',
        });
      });
  };
  renderError = () => {
    const toggleForm = this.state.isError ? 'dangerCreateDog' : 'CreateDog';
    if (this.state.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return (
        <button type='submit' className={toggleForm}>
          Sign Up
        </button>
      );
    }
  };

  render() {
    console.log('In Add pet', this.props);
    const { name, pet_type, breed, age, img_url } = this.state;
    return (
      <>
        <div className='CreateDogTitle'>Add Pet</div>

        <form className='CreateDogOuterDiv' onSubmit={this.handleSubmit}>
          <div className='CreateDogInnerDiv'>
            <label className='nameCreateDog' htmlFor='name-input'>
              Name:
              <input
                required
                type='text'
                name='name'
                value={name}
                id='name-input'
                placeholder='Name...'
                onChange={this.handleChange}
              />
            </label>
            <label className='petType' htmlFor='pet_type'>
              Pet Type:
              <input
                required
                type='text'
                name='pet_type'
                value={pet_type}
                id='pet_type'
                placeholder='Pet type...'
                onChange={this.handleChange}
              />
            </label>
            <label className='breedCreatePet' htmlFor='breed'>
              Breed:
              <input
                required
                type='text'
                name='breed'
                value={breed}
                id='breed'
                placeholder='Breed...'
                onChange={this.handleChange}
              />
            </label>
            <label className='ageCreatePet' htmlFor='age'>
              Age:
              <input
                type='number'
                name='age'
                value={age}
                id='age'
                // placeholder='Image link'
                onChange={this.handleChange}
              />
            </label>
            <label className='imageCreatePet' htmlFor='img_url'>
              Age:
              <input
                type='text'
                name='img_url'
                value={img_url}
                id='img_url'
                placeholder='Image link'
                onChange={this.handleChange}
              />
            </label>
            {this.renderError()}
          </div>
        </form>
      </>
    );
  }
}
