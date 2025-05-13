import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

// Public API client (no auth required)
export const publicClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Example API service
export const exampleService = {
    getData: async () => {
        try {
            const response = await publicClient.get('/data');
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};

