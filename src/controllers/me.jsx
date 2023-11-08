import axios from 'axios';

const apiUrl = 'https://api.joeleprof.com/lets-play';

export const getme = async (token) => {
  try {
    const response = await axios.get(`${apiUrl}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Erreur lors de la récupération des informations utilisateur.');
    }
  } catch (error) {
    throw error;
  }
};

export const updateme = async (username, email, token) => {
  try {
    const response = await axios.put(`${apiUrl}/me`, {
      username: username,
      email: email
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Erreur lors de la mise à jour des informations utilisateur.');
    }
  } catch (error) {
    throw error;
  }
};

export const deleteme = async (token) => {
  try {
    const response = await axios.delete(`${apiUrl}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 204) {
      console.log('Utilisateur supprimé avec succès.');
    } else {
      throw new Error('Erreur lors de la suppression de l\'utilisateur.');
    }
  } catch (error) {
    throw error;
  }
};

export const resetUserScore = async (token) => {
  try {
    const response = await axios.put(`${apiUrl}/me/reset-score`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Erreur lors de la réinitialisation du score utilisateur.');
    }
  } catch (error) {
    throw error;
  }
};
