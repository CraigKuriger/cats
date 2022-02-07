import React, { useEffect, useState } from "react";
import axios from "axios";
import classnames from "classnames";
import Category from "./Category";
import { baseURL } from "../../common/helpers";
import "./Categories.scss";
import Spinner from "../Spinner";

const Categories: React.FC = () => {
  const [loadingImages, setLoadingImages] = useState<boolean>(true);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(5);
  const [selectedCategoryImages, setSelectedCategoryImages] = useState<
    { id: string; url: string }[]
  >([]);

  useEffect(() => {
    axios.get(baseURL + "categories", {}).then((response) => {
      setCategories(response.data);
    });

    axios
      .get(baseURL + "images/search?limit=100", {
        params: { category_ids: selectedCategoryId },
      })
      .then((response) => {
        setSelectedCategoryImages(response.data);
        setLoadingImages(false);
      });
  }, [selectedCategoryId]);

  return (
    <div className="categories container px-4 px-lg-5">
      <h1 className="text-center pt-3">Categories</h1>
      <ul className="nav nav-pills nav-fill mb-4">
        {categories.map((category) => {
          const navLinkClass = classnames("nav-link", {
            active: category.id === selectedCategoryId,
          });

          return (
            <li
              className="nav-item"
              onClick={() => {
                setLoadingImages(true);
                setSelectedCategoryId(category.id);
              }}
            >
              <div className={navLinkClass}>{category.name.toUpperCase()}</div>
            </li>
          );
        })}
      </ul>
      {loadingImages ? (
        <Spinner />
      ) : (
        <div className="row">
          {selectedCategoryImages.map((image) => {
            return (
              <Category
                categoryId={selectedCategoryId}
                imageUrl={image.url}
                onClickHandler={setSelectedCategoryId}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
