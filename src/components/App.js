import React          from 'react';

import Header         from './Header';
import Main           from './Main';
import Footer         from './Footer';
import PopupWithForm  from './PopupWithForm';
import ImagePopup     from './ImagePopup';

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]   = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]       = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen]             = React.useState(false);
  const [selectedCard, setSelectedCard]                     = React.useState({});

  function closeAllPopups () {
    isDeletePlacePopupOpen  && setIsDeletePlacePopupOpen  (false);
    isAddPlacePopupOpen     && setIsAddPlacePopupOpen     (false);
    isEditAvatarPopupOpen   && setIsEditAvatarPopupOpen   (false);
    isEditProfilePopupOpen  && setIsEditProfilePopupOpen  (false);
    if (isImagePopupOpen)    {
                               setIsImagePopupOpen(false)
                               setSelectedCard({});
    }
  };

  // Обработчики
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeletePlaceClick () {
    // пока не использую подготовил вместе со всеми попапами
    setIsDeletePlacePopupOpen(true);
  }

  function handleCardClick (cardData) {
    setSelectedCard(cardData);
    setIsImagePopupOpen(true);
  }

  function handlerOnChange () {
    // консоль выдавала ошибку пока не знаю, что делать с формами,
    // поэтому просто вставил обработчик чтобы скрыть ошибку
  }

  return (
    <>
    <Header/>
    <Main
      onEditProfile = { handleEditProfileClick }
      onAddPlace    = { handleAddPlaceClick }
      onEditAvatar  = { handleEditAvatarClick }
      onCardClick   = { handleCardClick }
      onDeleteClick = { handleDeletePlaceClick }
    />
    <Footer/>
    <PopupWithForm name = "avatar" title = "Обновить аватар" textSubmit = "Сохранить" isOpen = { isEditAvatarPopupOpen } onClose = { closeAllPopups  }>
      <label className="form__field">
        <input type="url" placeholder="Ссылка на картинку" value="" name="avatar" className="form__input" onChange={handlerOnChange} required/>
        <span className="form__input-error form__input-error_place_avatar"></span>
      </label>
    </PopupWithForm>
    <PopupWithForm name = "profile" title = "Редактировать профиль" textSubmit = "Сохранить" isOpen = { isEditProfilePopupOpen } onClose = { closeAllPopups }>
      <label className="form__field">
        <input type="text" placeholder="Имя" value="" name="userName" className="form__input" minLength="2" maxLength="40" onChange={handlerOnChange} required/>
        <span className="form__input-error form__input-error_place_userName"></span>
      </label>
      <label className="form__field">
        <input type="text" placeholder="О себе?" value="" name="userDescription" className="form__input" minLength="2" maxLength="200" onChange={handlerOnChange} required/>
        <span className="form__input-error form__input-error_place_userDescription"></span>
      </label>
    </PopupWithForm>
    <PopupWithForm name = "cards" title = "Новое место" textSubmit = "Создать" isOpen = { isAddPlacePopupOpen } onClose = { closeAllPopups }>
      <label className="form__field">
        <input type="text" placeholder="Название" value="" name="cardPlace" className="form__input" minLength="2" maxLength="30" onChange={handlerOnChange} required/>
        <span className="form__input-error form__input-error_place_cardPlace"></span>
      </label>
      <label className="form__field">
        <input type="url" placeholder="Ссылка на картинку" value="" name="cardLink" className="form__input" onChange={handlerOnChange} required/>
        <span className="form__input-error form__input-error_place_cardLink"></span>
      </label>
    </PopupWithForm>
    <PopupWithForm name = "deleteCard" title = "Вы уверены?" textSubmit = "Да" isOpen = { isDeletePlacePopupOpen } onClose = { closeAllPopups } />
    <ImagePopup card = { selectedCard } isOpen = { isImagePopupOpen } onClose = { closeAllPopups } />
    </>
  );
};
