// попробовал реализовать валидацию на примере этого попапаconsole.log();
// но пока ощущение костылей

import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup ({isOpen, onClose, onSubmit, loadingText}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [userData, setUserData]   = React.useState({});

  const [validationData, setvalidationData]   = React.useState({name: true, about: true});
  const [errorMessage, setErrorMessage]     = React.useState({name: '', about: ''});
  const [validity, setValidity]             = React.useState(true);


  React.useEffect(() => {
    setUserData({name: currentUser.name, about: currentUser.about});
  }, [currentUser]);

  function handleChange (e) {
    setUserData({...userData, [e.target.name]: e.target.value});
    validation(e.target)
  }

  function validation (target) {
    setvalidationData({...validationData, [target.name]: target.validity.valid});
    setErrorMessage({...errorMessage, [target.name]: target.validationMessage});
    setValidity(() => {
      if(!validationData.name || !validationData.about) {
        return false} else {return true}
      });
  }

  function handleSubmit() {
    onSubmit(userData);
  }

  return (
    <PopupWithForm
      name        = "profile"
      title       = "Редактировать профиль"
      textSubmit  = "Сохранить"
      loadingText = { loadingText }
      isOpen      = { isOpen }
      onClose     = { onClose }
      onSubmit    = { handleSubmit }
      validity    = { validity }
      >
        <label className="form__field">
          <input type="text" placeholder="Имя" value={userData.name} name="name" className="form__input" minLength="2" maxLength="40" onChange={handleChange} required/>
          <span className={`form__input-error ${errorMessage.name !== '' && 'form__input-error_visible'}`}>{errorMessage.name}</span>
        </label>
        <label className="form__field">
          <input type="text" placeholder="О себе?" value={userData.about} name="about" className="form__input" minLength="2" maxLength="200" onChange={handleChange} required/>
          <span className={`form__input-error ${errorMessage.about !== '' && 'form__input-error_visible'}`}>{errorMessage.about}</span>
        </label>
    </PopupWithForm>
  )
}
