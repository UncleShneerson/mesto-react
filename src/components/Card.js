import iconDelete from '../images/delete-icon.svg';
import placeholder from '../images/place_holder.jpg';
import React from 'react';

export default function Card (props) {
  const [imageURL, setImageURL] = React.useState(props.link);

  function errorUrl() {
    setImageURL(placeholder);
  }

  function handleCardClick () {
    imageURL !== placeholder && props.onCardClick(props.card)
  };

  return (
  <li className="places__card">
    <img className="places__image" alt={props.name} src={imageURL} onError={errorUrl} onClick={handleCardClick}/>
    <img src={iconDelete} alt="Удалить" className="places__delete hover-opacity" onClick={props.onDeleteClick}/>
    <div className="places__description">
      <h2 className="places__name">{props.name}</h2>
      <div className="places__like-area">
        <button type="button" className="button places__like hover-opacity" aria-label="Нравится"></button>
        <p className="places__like-number">{props.likes}</p>
      </div>
    </div>
  </li>
  )
}
