import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: white;
  background-color: #003366; /* Couleur bleu foncé */
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #001f4d; /* Bordure légèrement plus foncée */
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre légère pour un effet 3D */
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #555;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #003366;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 2px solid #001f4d;
`;

export const ViewButton = styled.a`
  display: block;
  width: 180px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #00509e; /* Bleu plus foncé */
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    background-color: #003f7f; /* Bleu encore plus foncé au survol */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #1e7b2d; /* Vert plus foncé */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #145a20; /* Vert encore plus foncé au survol */
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
