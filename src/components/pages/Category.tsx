import React, { useState } from "react";
import "./Category.scss";

const getIcon = (categoryId: number) => {
  switch (categoryId) {
    case 5:
      return "fas fa-box-open";
    case 15:
      return "fas fa-shirt";
    case 1:
      return "fas fa-hat-cowboy";
    case 14:
      return "fas fa-sink";
    case 2:
      return "fas fa-rocket";
    case 4:
      return "fas fa-glasses";
    case 7:
      return "fas fa-user-tie";
    default:
      return "fas fa-paw";
  }
};

interface Props {
  categoryId: number;
  imageUrl: string;
  onClickHandler: (id: number) => void;
}

const Category: React.FC<Props> = (props) => {
  const [imageLoading, setImageLoading] = useState(true);
  const { categoryId, imageUrl } = props;

  return (
    <>
      <div className="card" style={imageLoading ? { display: "none" } : {}}>
        <img
          className="img-fluid card-img-top"
          src={imageUrl}
          alt=""
          onLoad={() => setImageLoading(false)}
        />
        <div className="card-body">
          <h4 className="card-title text-capitalize">
            <i className={getIcon(categoryId)}></i>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Category;
