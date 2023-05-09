import { useState } from "react";

export default function Modal({ character, onClose }) {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
    if (typeof onClose === "function") {
      onClose();
      console.log(character);
    }
  };

  return (
    <>
      <div className={`modal-container ${isHidden ? "hidden" : ""}`}>
        <div className={`modal d-block`}>
          <button className="close-modal" onClick={handleClose}>
            x
          </button>
          <img src={character.images.md} alt={character.name} />
        </div>
        <div
          className={`overlay ${isHidden ? "hidden" : ""}`}
          onClick={handleClose}
        ></div>
      </div>
    </>
  );
}
