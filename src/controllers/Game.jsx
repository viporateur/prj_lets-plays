import axios from 'axios';

const apiUrl = 'https://api.joeleprof.com/lets-play';

export const incrementScore = async () => {
  const token=sessionStorage.getItem('token');
  const headers={
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const response =await axios.put(`${apiUrl}/game/wins`,{},headers );
    return alert(response.status)
  } catch (error) {
    throw error;
  }
};


export const decrementScore = async (token) => {
  try {
    await axios.put(`${apiUrl}/game/lost`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    throw error;
  }
};
