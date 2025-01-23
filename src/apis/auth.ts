import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password
        });
        console.log('Login API response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Login API error:', error);
        throw error;
    }
};