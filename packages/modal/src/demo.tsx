import React, { useState } from "react";
import ReactDOM from "react-dom/client"; // Importer createRoot

import Modal from "./lib/Modal";
import "./lib/modal.css";

// Définir le type pour les données du formulaire
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const Demo: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
    closeModal();
  };

  return (
    <div>
      <h1>Tester le composant Modal avec des données</h1>
      <button onClick={openModal}>Ouvrir le Modal</button>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Entrer vos informations</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Prénom :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Nom :</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Soumettre</button>
        </form>
      </Modal>

      {submittedData && (
        <div>
          <h2>Données soumises :</h2>
          <p>Prénom : {submittedData.firstName}</p>
          <p>Nom : {submittedData.lastName}</p>
          <p>Email : {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

// Utiliser createRoot pour React 18
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Demo />);
}
