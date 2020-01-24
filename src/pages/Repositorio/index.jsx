import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import api from "../../services/api";

import { Container, Owner, Loading, BackButton, IssuesList } from "./styles";

function Repositorio({ match }) {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5
          }
        })
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    load();
  }, [match.params.repositorio]);

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#FFF" size={20} />
      </BackButton>

      <Owner>
        <img
          src={repositorio.owner.avatar_url}
          alt={`Foto perfil de ${repositorio.owner.login}`}
        />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description} </p>
      </Owner>

      <IssuesList>
        {issues.map(issues => (
          <li key={issues.id}>
            <img src={issues.user.avatar_url} alt={issues.user.login} />

            <div>
              <strong>
                <a href={issues.html_url}>{issues.title}</a>

                {issues.labels.map(label => (
                  <span key={label.id}>{label.name}</span>
                ))}
              </strong>
              <p>{issues.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>
    </Container>
  );
}

export default Repositorio;
