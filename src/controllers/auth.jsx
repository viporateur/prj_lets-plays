import axios from 'axios';

const apiUrl = 'https://api.joeleprof.com/lets-play';

export async function login(email, password) {
    const body = {
        'email': email,
        'password': password
    };

    try {
        const response = await axios.post(`${apiUrl}/auth/login`, body);
        if (response.status === 200) {
            const data = response.data;
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('isAdmin', data.isAdmin);
            return { success: true, data };
        } else {
            return { success: false, error: 'Erreur lors de la connexion.' };
        }
    } catch (error) {
        return { success: false, error: 'Erreur lors de la connexion.' };
    }
}

export const register = async (email, password, username) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/register`, {
            email: email,
            password: password,
            username: username
        });
        if (response.status === 201) {
            return { success: true, token: response.data.token };
        } else {
            return { success: false, error: 'Erreur lors de l\'inscription.' };
        }
    } catch (error) {
        return { success: false, error: 'Erreur lors de l\'inscription.' };
    }
};
