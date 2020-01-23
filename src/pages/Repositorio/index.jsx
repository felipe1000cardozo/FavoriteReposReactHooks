import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container } from "./styles";

function Repositorio({ match }) {
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

      console.log(repositorioData.data);
      console.log(issuesData.data);
    }

    load();
  }, []);

  return (
    <Container>
      <h1>Repositorio</h1>
    </Container>
  );
}

export default Repositorio;
