import styled from "styled-components";

// Conteneur pour le tableau
export const TableContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Titre principal
export const HRTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

// Sous-titre
export const Subtitle = styled.h2`
  text-align: center;
  color: #555;
  margin-bottom: 10px;
`;

// Style du tableau
export const StyledTable = styled.div`
  margin: 20px 0;
`;

// Bouton bleu foncé
export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 180px;
  margin: 20px auto;
  padding: 10px;
  background-color: #00509e; // Bleu foncé
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #003f7f; // Bleu encore plus foncé au survol
  }
`;

// Lien vers la page d'accueil en vert foncé
export const HomeLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: white;
  background-color: #1e7b2d; // Vert foncé
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #145a20; // Vert encore plus foncé au survol
  }
`;
