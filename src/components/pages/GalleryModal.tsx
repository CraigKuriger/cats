import React from "react";
import "./GalleryModal.scss";

interface Props {
  close: () => void;
  item: { image: string; name: string };
}

const GalleryModal: React.FC<Props> = (props) => {
  const { close, item } = props;
  return (
    <div className="gallery-modal" onClick={close}>
      <img
        className="img-fluid"
        src={require(`../../images/fullsize/${item.image}`)}
        alt="..."
      />
    </div>
  );
};

export default GalleryModal;
