import React, { useEffect, useState } from "react";
import axios from "axios";
import classnames from "classnames";
import { baseURL } from "../../common/helpers";
import Spinner from "../Spinner";
import "./Breeds.scss";

const ROWS_PER_PAGE = 10;

interface Breed {
  dog_friendly: number;
  id: string;
  intelligence: number;
  name: string;
  origin: string;
}

const getPageOptions = (pageNumber: number, pageCount: number): number[] => {
  if (pageCount === 0 || pageCount === 1) {
    return [];
  }
  if (pageCount === 2) {
    return [0, 1];
  }
  if (pageNumber <= 1) {
    return [0, 1, 2];
  }
  if (pageNumber >= pageCount - 2) {
    return [pageCount - 3, pageCount - 2, pageCount - 1];
  }
  return [pageNumber - 1, pageNumber, pageNumber + 1];
};

const filterBreeds = (
  searchTerm: string,
  breeds: Breed[],
  handler: (result: Breed[]) => void
) => {
  const result = breeds.filter((breed) => {
    return breed.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
  });
  handler(result);
};

const Breeds: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>([]);
  const [paginatedBreeds, setPaginatedBreeds] = useState<Breed[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    axios.get(baseURL + "breeds", {}).then((response) => {
      const data = response.data;
      setBreeds(data);
      setFilteredBreeds(data);
    });
  }, []);

  useEffect(() => {
    setPageCount(Math.ceil(filteredBreeds.length / ROWS_PER_PAGE));
    const start = ROWS_PER_PAGE * pageNumber;
    const end = start + ROWS_PER_PAGE;
    const paginatedData = filteredBreeds.slice(start, end);
    setPaginatedBreeds(paginatedData);

    if (pageNumber >= pageCount) {
      setPageNumber(0);
    }
  }, [breeds, filteredBreeds, pageCount, pageNumber]);

  if (breeds.length === 0) {
    return <Spinner />;
  }

  const previousLiClass = classnames("page-item", {
    disabled: pageNumber === 0,
  });

  const nextLiClass = classnames("page-item", {
    disabled: pageNumber === pageCount - 1,
  });

  return (
    <div className="breeds container px-4 px-lg-5">
      <h1 className="text-center pt-3">Breeds</h1>
      <nav>
        <form className="d-flex search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              filterBreeds(e.target.value, breeds, setFilteredBreeds);
            }}
          />
        </form>
      </nav>
      {Boolean(pageCount) ? (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Origin</th>
                <th scope="col">Dog Friendly</th>
                <th scope="col">Intelligence</th>
              </tr>
            </thead>
            <tbody>
              {paginatedBreeds.map((breed) => {
                return (
                  <tr key={breed.id}>
                    <th>{breed.name}</th>
                    <td>{breed.origin}</td>
                    <td>{breed.dog_friendly}</td>
                    <td>{breed.intelligence}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav>
            <ul className="pagination justify-content-center">
              <li className={previousLiClass}>
                <div
                  className="page-link"
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  Previous
                </div>
              </li>
              {getPageOptions(pageNumber, pageCount).map((num) => {
                const pageLinkClass = classnames("page-link", {
                  "page-link__active": num === pageNumber,
                });
                return (
                  <li
                    key={num}
                    className="page-item"
                    onClick={() => setPageNumber(num)}
                  >
                    <div className={pageLinkClass}>{num + 1}</div>
                  </li>
                );
              })}
              <li className={nextLiClass}>
                <div
                  className="page-link"
                  onClick={() => setPageNumber(pageNumber + 1)}
                >
                  Next
                </div>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <div className="row">
          <div className="col-md-6 offset-md-3 col-sm-12 text-center">
            <h4>Sorry, nothing found...</h4>
            <img
              className="img-fluid rounded-circle mt-4 mb-4"
              src={require("../../images/grumpy-not-found.jpeg")}
              alt="..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Breeds;
