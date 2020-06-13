import React, { Component } from 'react';
import './PetDetail.css';
import { getOnePet } from '../services/pets';

export default class PetDetail extends Component {
  state = {
    name: '',
    pet_type: '',
    breed: '',
    age: 0,
    img_url: '',
  };
  async componentDidMount() {
    let { id } = this.props.match.params;
    const pet = await getOnePet(id);
    this.setState({ ...pet });
  }
  render() {
    console.log(this.props);
    const { name, pet_type, breed, age, img_url } = this.state;
    return (
      <div className='petDetail'>
        <img className='petDetailImage' src={img_url} alt={pet_type} />
        <div className='petDetailName'>{name}</div>
        <div className='petDetailAge'>{age}</div>
        <div className='petDetailBreed'>{breed}</div>
        <div className='petDetailType'>{pet_type}</div>
      </div>
    );
  }
}
