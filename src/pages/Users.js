import React, { useState } from 'react';
import { getUsers } from '../controllers/Users';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'; // Importez votre fichier CSS ici

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const isAdmin = sessionStorage.getItem('isAdmin')
  const handleFetchUsers = async () => {
    try {
      const userList = await getUsers(token);
      setUsers(userList);
    } catch (error) {
      // Vérifiez si l'erreur est due à un statut 401
      if (error.response && error.response.status === 401) {
        // Redirigez l'utilisateur vers la page de connexion s'il n'est pas authentifié
        navigate('/login');
      } else {
        // Affichez un message d'erreur générique pour les autres erreurs
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    }
  };
  

  return (
    <div className="container">
      <h2>Liste des Utilisateurs</h2>
      <button className="button" onClick={handleFetchUsers}>Charger la Liste des Utilisateurs</button>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="list-item">{user.username}</li>
        ))}
      </ul>
      <Link to="/dashboard" className="link">Retour au Tableau de Bord</Link>
    </div>
  );
}

export default Users;




