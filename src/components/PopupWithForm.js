export default function PopupWithForm (props) {
  return (
    <div className={`popup popup_funct_${props.name} ${ props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="button popup__btn-close hover-opacity" aria-label="Закрыть" onClick={props.onClose}></button>
        <h2 className="popup__header">{props.title}</h2>
        <form className="form" name={`form-${props.name}`} noValidate>
          {props.inputs /* {add labels} */}
          <button type="submit" className="button button_type_submit button_style_fill-m">{props.textSubmit}</button>
        </form>
        </div>
    </div>
  )
}
