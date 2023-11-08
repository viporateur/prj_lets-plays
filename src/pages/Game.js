import React, { useState } from 'react';
import { incrementScore, decrementScore } from '../controllers/Game';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

function Game() {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  const fetchData = async () => {
    try {
      
    } catch (error) {
      // pour  Gérez les erreurs ici
      console.error(error);
    }
  };

  const handleIncrementScore = async () => {
    try {
      await incrementScore(token);
      setScore(score + 1);
    } catch (error) {
      //  pourGérer les erreurs lors de l'incrémentation du score
      console.error(error);
    }
  };

  const handleDecrementScore = async () => {
    try {
      await decrementScore(token);
      setScore(score - 1);
    } catch (error) {
      // Gérer les erreurs lors de la décrémentation du score
      console.error(error);
    }
  };

  
  fetchData();

  if (!token) {
    // Redirigez l'utilisateur vers la page de connexion s'il n'est pas authentifié
    navigate('/login');
    return null;
  }

  return (
    <div className="container">
      <h2>Le Jeu</h2>
      <p className="score">Score: {score}</p>
      <button className="button" onClick={handleIncrementScore}>Incrémenter le Score</button>
      <button className="button" onClick={handleDecrementScore}>Décrémenter le Score</button>
      <br />
      <br />
      <button className="button" onClick={() => navigate('/dashboard')}>Retour au Tableau de Bord</button>
    </div>
  );
}

export default Game;
