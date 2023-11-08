import './index.css';
import React, { useState } from 'react';
import { getme, updateme, resetUserScore, deleteme } from '../controllers/me';
import { useNavigate } from 'react-router-dom';

function Me() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  const fetchData = async () => {
    try {
      const user = await getme(token);
      setUsername(user.username);
      setEmail(user.email);
    } catch (error) {
      // Gérer les erreurs de récupération des informations de l'utilisateur
      console.error(error);
    }
  };

  // Appeler la fonction fetchData immédiatement après la définition du composant
  fetchData();

  const handleUpdateme = async () => {
    try {
      await updateme(username, email, token);
      // Gérer la réussite de la mise à jour du profil
    } catch (error) {
      // Gérer les erreurs de mise à jour du profil
      console.error(error);
    }
  };

  const handleResetScore = async () => {
    try {
      await resetUserScore(token);
      // Gérer la réussite de la réinitialisation du score
    } catch (error) {
      // Gérer les erreurs de réinitialisation du score
      console.error(error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteme(token);
      // Rediriger l'utilisateur vers la page de connexion après la suppression du compte
      navigate('/login');
    } catch (error) {
      // Gérer les erreurs de suppression du compte
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Profil</h2>
      <div className="form-group">
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input type="text" id="username" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Adresse e-mail:</label>
        <input type="email" id="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className="button" onClick={handleUpdateme}>Mettre à jour le profil</button>
      <button className="button" onClick={handleResetScore}>Réinitialiser le score</button>
      <button className="button" onClick={handleDeleteAccount}>Supprimer le compte</button>
    </div>
  );
}

export default Me;
