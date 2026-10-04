import axios from 'axios';
import { projectsData, getProjectByIdOrSlug } from '../data/projectsData';

// Use Vite proxy in development, or environment variable, or fallback to production
const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? '/api' : 'https://mohd-ashif-portfolio.onrender.com/api');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle network errors
    if (error.code === 'ECONNABORTED') {
      error.message = 'Request timeout. Please check your connection and try again.';
    } else if (error.message === 'Network Error') {
      error.message = 'Network error. Please check your connection and try again.';
    }
    return Promise.reject(error);
  }
);

// Project API (reads from local projectsData)
export const projectAPI = {
  getAll: () => Promise.resolve({ data: projectsData }),
  getById: (id) => Promise.resolve({ data: getProjectByIdOrSlug(id) }),
};

// Contact API
export const contactAPI = {
  submit: (contactData) => api.post('/contact', contactData),
};

export default api;

