// Генадий, спасибо огромное за развернутые комментарии и ссылки,
// особенно за магию с API
// надеюсь ничего не пропустил и все внес. Хорошего дня )

import React from 'react';
import {api} from '../utils/api.js';
import Card from './Card.js';


export default function Main (props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  function setUserInfo (data) {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
  }

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards() ])
    .then(([info, initialCards]) => {
      setUserInfo(info);
      setCards(initialCards);
    })
    .catch(console.error);
  }, [])

  return (
    <main className="content">
      <section className="profile">
          <div className="profile__avatar-info" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="Ваш аватар" className="profile__avatar" />
          </div>
          <div className="profile__column-info">
            <div className="profile__name-row">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="button button_func_edit button_style_line-xs button_place_profile-info hover-opacity" name="btn-edit" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="button button_func_add button_style_line-m button_place_profile hover-opacity" name="btn-add" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>

      <section className="places" aria-label="Список мест">
        <ul className="places__grid">
        { cards.map((item) => (
           < Card
            key           = { item._id }
            name          = { item.name }
            link          = { item.link }
            likes         = { item.likes.length }
            card          = { item }
            onCardClick   = { props.onCardClick }
            onDeleteClick = { props.onDeleteClick }
          />
        ))}
        </ul>
        <div className="places__notice">
          <p>Скорее добавьте свои первые фото. Все так их ждут!</p>
        </div>
      </section>
    </main>
  )
}












