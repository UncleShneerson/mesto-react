export default function PopupWithForm ({isOpen, onClose, name, title, textSubmit, children}) {
  return (
    <div className={`popup popup_funct_${name} ${ isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="button popup__btn-close hover-opacity" aria-label="Закрыть" onClick={onClose}/>
        <h2 className="popup__header">{title}</h2>
        <form className="form" name={`form-${name}`}>
          {children /* {add labels} */}
          <button type="submit" className="button button_type_submit button_style_fill-m">{textSubmit}</button>
        </form>
        </div>
    </div>
  )
}
