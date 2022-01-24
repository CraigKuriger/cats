import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../common/helpers";
import "./Category.scss";

interface Props {
  category: {
    id: string;
    name: string;
  };
}

const Category: React.FC<Props> = (props) => {
  const { category } = props;
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    axios
      .get(baseURL + "images/search?limit=1", {
        params: { category_ids: category.id },
      })
      .then((response) => {
        setImageUrl(response.data[0].url);
      });
  }, [category.id]);

  return (
    <div className="category col-lg-4 col-sm-6 text-center">
      <div className="card">
        <img className="img-fluid card-img-top" src={imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title text-capitalize">{category.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Category;
