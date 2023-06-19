import React from 'react';
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup ({isOpen, onClose, onSubmit, loadingText}) {
  const inputRef = React.useRef();

  function handleSubmit() {
    onSubmit({
      avatar: inputRef.current.value
    });
  }

  return (
    <PopupWithForm
      name        = "avatar"
      title       = "Обновить аватар"
      textSubmit  = "Сохранить"
      isOpen      = { isOpen }
      onClose     = { onClose }
      onSubmit    = { handleSubmit }
      loadingText = { loadingText }
      validity    = { true }>
        <label className="form__field">
          <input ref={inputRef} type="url" placeholder="Ссылка на картинку"  name="avatar" className="form__input" required/>
          <span className="form__input-error form__input-error_place_avatar"></span>
        </label>
    </PopupWithForm>
  )
}
