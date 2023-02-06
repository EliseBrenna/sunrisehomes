import Carousel, { CarouselItem } from "./Carousel";
import { Close } from "@fremtind/jkl-icons-react";
import "@fremtind/jkl-icons/animated-icons.min.css";
import { useState } from "react";

const Modal = ({
  showModal,
  onClose,
  title,
  town,
  price,
  baths,
  beds,
  pools,
  desc,
  images,
  id,
}) => {
  const [expanded, setExpanded] = useState(false);
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">
            {title} i {town} <p className="id">#{id}</p>
          </h4>
          <Close onClick={onClose} className="icon" />
        </div>
        <div className="modal-body">
          <div className="sections">
            <div className="modal-section"> Pris: €{price}</div>
            <div className="modal-section"> Bad: {baths}</div>
            <div className="modal-section"> Soverom: {beds}</div>
            <div className="modal-section">
              {" "}
              Svømmebasseng: {pools === 0 ? "0" : pools}
            </div>
          </div>

          <div className="description">
            {desc.slice(0, 200)}

            {expanded && desc.slice(200)}
            {!expanded ? (
              <span className="expand-button" onClick={() => setExpanded(true)}>
                ...Les mer
              </span>
            ) : (
              <span
                className="expand-button"
                onClick={() => setExpanded(false)}
              >
                ...Les mindre
              </span>
            )}
          </div>

          <Carousel>
            {images.map((image) => {
              return (
                <CarouselItem>
                  <img clasName="carousel-image" src={image.url} alt="" />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Modal;
