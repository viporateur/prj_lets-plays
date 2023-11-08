import './index.css';
import React, { useState } from 'react';
import { login } from '../controllers/auth';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handleLogin = async () => {
   
      const token = await login(email, password);
      if (token) {
        // Stockez le token dans sessionStorage après une connexion réussie
        sessionStorage.setItem('token', token);
        navigate('/users'); // Redirigez vers le tableau de bord
      } else {
        // Gérer les erreurs d'authentification
        console.error('Échec de l\'authentification');
      }
    
    }

  return (
    <div className="container">
      <h2>Connexion</h2>
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
      <button className="button" onClick={handleLogin}>Se connecter</button>
      {/* Utilisez des accolades pour les commentaires JSX */}
      <Link to="/register" className="link">Pas encore inscrit ? Inscrivez-vous ici</Link>
    </div>
  );
}

export default Login;
