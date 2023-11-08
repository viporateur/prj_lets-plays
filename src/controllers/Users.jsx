


import axios from 'axios';

const apiUrl = 'https://api.joeleprof.com/lets-play';

export async function getUsers() {
    try {
      const token = sessionStorage.getItem('token');
      const headers = { headers: { 'Authorization': 'Bearer ' + token } };
  
      const { data } = await axios.get(`${apiUrl}/users`, headers);
  
      if (data && data.success) {
        return data.data;
      } else {
        throw new Error('Erreur lors de la récupération des utilisateurs.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Erreur d\'authentification : Token non valide ou expiré.');
      } else {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
      return [];
    }
  }
  
  export async function updateUser(id, username, email) {
    try {
      const token = sessionStorage.getItem('token');
      const headers = { 'Authorization': `Bearer ${token}` };
  
      const { data } = await axios.put(
        `${apiUrl}/users/${id}`,
        { username, email },
        { headers }
      );
  
      if (data && data.success) {
        return data.data;
      } else {
        throw new Error('Erreur lors de la mise à jour de l\'utilisateur.');
      }
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteUser(id) {
    try {
      const token = sessionStorage.getItem('token');
      const headers = { 'Authorization': `Bearer ${token}` };
  
      const { status } = await axios.delete(`${apiUrl}/users/${id}`, { headers });
  
      if (status === 204) {
        console.log('Utilisateur supprimé avec succès.');
      } else {
        throw new Error('Erreur lors de la suppression de l\'utilisateur.');
      }
    } catch (error) {
      throw error;
    }
  }
  