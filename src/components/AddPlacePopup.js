import React from 'react';
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup ({isOpen, onClose, onSubmit, loadingText}) {

  const [cardData, setCardData] = React.useState({name: '', link: ''});

  function handleChange (e) {
    setCardData({...cardData, [e.target.name]: e.target.value});
  }

  function handleSubmit() {
    onSubmit(cardData);
    setCardData({name: '', link: ''});
  }

  return (
    <PopupWithForm
    name        = "cards"
    title       = "Новое место"
    textSubmit  = "Создать"
    isOpen      = { isOpen }
    onClose     = { onClose }
    onSubmit    = { handleSubmit }
    loadingText = { loadingText }
    validity    = { true }>
      <label className="form__field">
        <input type="text" placeholder="Название" value={cardData.name} name="name" className="form__input" minLength="2" maxLength="30" onChange={handleChange} required/>
        <span className="form__input-error form__input-error_place_cardPlace"></span>
      </label>
      <label className="form__field">
        <input type="url" placeholder="Ссылка на картинку" value={cardData.link} name="link" className="form__input" onChange={handleChange} required/>
        <span className="form__input-error form__input-error_place_cardLink"></span>
      </label>
    </PopupWithForm>
  )
}
