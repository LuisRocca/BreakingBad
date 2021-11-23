import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCharacters,
  byStatus,
  byCreated,
  byOrder,
} from "../../actions/index.jsx";
import Card from "./Card/index.jsx";
import Paginado from "./Paginado/index.jsx";
import SearchBar from "./SearchBar/index.jsx";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((e) => e.characters);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(9);
  const [order, setOrder] = useState("");
  const indexLastCharacter = currentPage * charactersPerPage;
  const indexFirstCharacter = indexLastCharacter - charactersPerPage;
  const allPagCharacters = allCharacters.slice(
    indexFirstCharacter,
    indexLastCharacter
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }

  function handleStatus(e) {
    dispatch(byStatus(e.target.value));
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(byOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleCreated(e) {
    dispatch(byCreated(e.target.value));
  }

  return (
    <div className="all">
      <div className="contenedor-flex">
        <div className="barra">
          <Link to="/character">Crear Personaje</Link>
          <h1>BREAKING BAD</h1>
          <button className="boton"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Volver a cargar todos los personajes
          </button>
          <div className="contenedor-select">
            <h3>State</h3>
            <select onChange={(e) => handleStatus(e)}>
              <option value="All">All</option>
              <option value="Alive">Alive</option>
              <option value="Deceased">Deceased</option>
              <option value="Unknown">Unknown</option>
              <option value="Presumed dead">Presumed Dead</option>
            </select>
            </div>
            <div className="contenedor-select">
              <h3>API or Created</h3>
            <select onChange={(e) => handleCreated(e)}>
              <option value="All">All</option>
              <option value="Created">My Characters</option>
              <option value="Api">Api Characters</option>
            </select>
          </div>
          <div className="contenedor-select">
            <select onChange={(e) => handleOrder(e)}>
              <option value="Asc">Asc</option>
              <option value="Desc">Desc</option>
            </select>          
          </div>
          <div className="search">
          <SearchBar></SearchBar>
          </div>
          <div className="contenedor-flex">
              <Paginado
                charactersPerPage={charactersPerPage}
                allCharacters={allCharacters.length}
                paginado={paginado}
              ></Paginado>
            </div>
        </div>
        <div className="contenedor-cards">
          {allPagCharacters?.map((i) => (
            <div className="separator">
              <Link to={"/details/" + i.id}>
                <Card
                  name={i.name}
                  image={i.image}
                  nickName={i.nickName}
                  key={i.id}
                ></Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
