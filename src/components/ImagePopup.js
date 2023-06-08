export default function ImagePopup (props) {
  return (
    <div className={`popup popup_funct_image ${ props.isOpen && 'popup_opened' }`}>
      <figure className="gallery">
        <button type="button" className="button button_type_submit popup__btn-close hover-opacity" aria-label="Закрыть" onClick={props.onClose}></button>
        <img className="gallery__photo" src={props.card.link} alt={props.card.name}/>
        <figcaption className="gallery__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}
