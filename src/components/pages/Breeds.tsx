import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../common/helpers";

interface Breed {
  dog_friendly: number;
  intelligence: number;
  name: string;
  origin: string;
}

const Breeds: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    axios.get(baseURL + "breeds", {}).then((response) => {
      setBreeds(response.data);
    });
  }, []);

  return (
    <div className="categories container px-4 px-lg-5">
      <h1 className="text-center pt-3">Breeds</h1>
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
          {breeds.map((breed) => {
            return (
              <tr>
                <th>{breed.name}</th>
                <td>{breed.origin}</td>
                <td>{breed.dog_friendly}</td>
                <td>{breed.intelligence}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Breeds;
