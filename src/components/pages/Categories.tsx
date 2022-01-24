import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import { baseURL } from "../../common/helpers";
import "./Categories.scss";
import Spinner from "../Spinner";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(baseURL + "categories", {}).then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (categories.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="categories container px-4 px-lg-5">
      <h1 className="text-center pt-3">Categories</h1>
      <div className="row">
        {categories.map((category) => {
          return <Category category={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
