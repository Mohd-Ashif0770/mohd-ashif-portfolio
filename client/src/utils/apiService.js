import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
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

// Project API
export const projectAPI = {
  getAll: () => api.get('/projects'),
  getById: (id) => api.get(`/projects/${id}`),
  create: (projectData, imageFile) => {
    const formData = new FormData();
    Object.keys(projectData).forEach((key) => {
      if (key === 'techStack' && Array.isArray(projectData[key])) {
        projectData[key].forEach((tech) => formData.append('techStack', tech));
      } else if (key !== 'techStack' && projectData[key] !== undefined) {
        formData.append(key, projectData[key]);
      }
    });
    if (imageFile) {
      formData.append('image', imageFile);
    }
    return api.post('/projects', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  update: (id, projectData, imageFile) => {
    const formData = new FormData();
    Object.keys(projectData).forEach((key) => {
      if (key === 'techStack' && Array.isArray(projectData[key])) {
        projectData[key].forEach((tech) => formData.append('techStack', tech));
      } else if (key !== 'techStack' && projectData[key] !== undefined) {
        formData.append(key, projectData[key]);
      }
    });
    if (imageFile) {
      formData.append('image', imageFile);
    }
    return api.put(`/projects/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  delete: (id) => api.delete(`/projects/${id}`),
};

// Contact API
export const contactAPI = {
  submit: (contactData) => api.post('/contact', contactData),
};

// Admin API
export const adminAPI = {
  login: (credentials) => api.post('/admin/login', credentials),
};

export default api;

