import React, { useState } from 'react';
import { register } from '../controllers/auth';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'; // Assurez-vous d'importer votre fichier CSS ici

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
     register(email, password, username);
      navigate('/login'); // Redirigez vers la page de connexion après l'inscription réussie
    } catch (error) {
      // Gérez les erreurs d'inscription
      console.error('Erreur lors de l\'inscription:', error);
    }
  }

  return (
    <div className="container">
      <h2>Inscription</h2>
      <input
        className="input"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="button" onClick={handleRegister}>S'inscrire</button>
      <Link to="/login" className="link">Déjà inscrit ? Connectez-vous ici</Link>
    </div>
  );
}

export default Register;
