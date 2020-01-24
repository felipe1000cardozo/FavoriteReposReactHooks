import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";

import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";

import api from "../../services/api";

function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //Buscar (componentDidMount)
  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");
    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }
  }, []);
  //Salvar alterações (componentDidUpdate)
  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositorios));
  }, [repositorios]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setAlert(null);
        try {
          if (newRepo === "") {
            throw new Error("Você precisa indicar um repositório");
          }

          const response = await api.get(`repos/${newRepo}`);

          const hasRepo = repositorios.find(repo => repo.name === newRepo);

          if (hasRepo) {
            throw new Error("Repositório Duplicado");
          }

          const data = {
            name: response.data.full_name
          };

          setRepositorios([...repositorios, data]);
          setNewRepo("");
        } catch (error) {
          console.log(error);
          setAlert(true);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  );

  function handreInputChange(e) {
    setAlert(false);
    setNewRepo(e.target.value);
  }

  const handleDelete = useCallback(
    repo => {
      const find = repositorios.filter(r => r.name !== repo);
      setRepositorios(find);
    },
    [repositorios]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorios
      </h1>
      <Form onSubmit={handleSubmit} error={alert}>
        <input
          type="text"
          autoFocus
          placeholder="Adicionar Repositórios  Ex.facebook/react"
          value={newRepo}
          onChange={handreInputChange}
        />
        <SubmitButton title="Adicionar respositório" loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={10} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositorios.map((repo, index) => (
          <li key={index}>
            <span>{repo.name}</span>
            <span>
              <Link
                to={`repositorio/${encodeURIComponent(repo.name)}`}
                title="Acessar respositório"
              >
                <FaBars size={20} />
              </Link>
              <DeleteButton
                onClick={() => handleDelete(repo.name)}
                title="Excluir respositório"
              >
                <FaTrash size={20} />
              </DeleteButton>
            </span>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Main;
