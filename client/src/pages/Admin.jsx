import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectAPI, adminAPI } from '../utils/apiService';
import Toast from '../components/Toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [toast, setToast] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [projectForm, setProjectForm] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    longDescription: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
  });
  const [editingProject, setEditingProject] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchProjects();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const response = await adminAPI.login(loginForm);
      localStorage.setItem('adminToken', response.data.token);
      setIsAuthenticated(true);
      fetchProjects();
      setToast({ type: 'success', message: 'Login successful!' });
    } catch (error) {
      setToast({
        type: 'error',
        message: error.response?.data?.message || 'Login failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setProjects([]);
    setToast({ type: 'success', message: 'Logged out successfully!' });
  };

  const fetchProjects = async () => {
    try {
      const response = await projectAPI.getAll();
      setProjects(response.data);
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to load projects.',
      });
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const techStackArray = projectForm.techStack
        ? projectForm.techStack.split(',').map((tech) => tech.trim()).filter(Boolean)
        : [];

      const projectData = {
        ...projectForm,
        techStack: techStackArray,
      };

      if (editingProject) {
        await projectAPI.update(editingProject._id, projectData, imageFile);
        setToast({ type: 'success', message: 'Project updated successfully!' });
      } else {
        await projectAPI.create(projectData, imageFile);
        setToast({ type: 'success', message: 'Project created successfully!' });
      }

      resetForm();
      fetchProjects();
    } catch (error) {
      setToast({
        type: 'error',
        message:
          error.response?.data?.message || 'Failed to save project. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      await projectAPI.delete(id);
      setToast({ type: 'success', message: 'Project deleted successfully!' });
      fetchProjects();
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to delete project. Please try again.',
      });
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title || '',
      slug: project.slug || '',
      shortDescription: project.shortDescription || '',
      longDescription: project.longDescription || '',
      techStack: project.techStack ? project.techStack.join(', ') : '',
      githubUrl: project.githubUrl || '',
      liveUrl: project.liveUrl || '',
      imageUrl: project.imageUrl || '',
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setProjectForm({
      title: '',
      slug: '',
      shortDescription: '',
      longDescription: '',
      techStack: '',
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
    });
    setEditingProject(null);
    setImageFile(null);
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <div className="container py-5" style={{ marginTop: '100px' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h2 className="card-title text-center mb-4">Admin Login</h2>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={loginForm.email}
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, password: e.target.value })
                        }
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                  </form>
                </div>
              </div>
              <div className="text-center mt-3">
                <button
                  className="btn btn-link"
                  onClick={() => navigate('/')}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container py-5" style={{ marginTop: '100px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Admin Panel</h2>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i>
            Logout
          </button>
        </div>

        {/* Project Form */}
        <div className="card shadow mb-5">
          <div className="card-header">
            <h4 className="mb-0">
              {editingProject ? 'Edit Project' : 'Create New Project'}
            </h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleProjectSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="title" className="form-label">
                    Title *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={projectForm.title}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="slug" className="form-label">
                    Slug
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    value={projectForm.slug}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, slug: e.target.value })
                    }
                    placeholder="auto-generated if empty"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="shortDescription" className="form-label">
                  Short Description *
                </label>
                <textarea
                  className="form-control"
                  id="shortDescription"
                  rows="2"
                  value={projectForm.shortDescription}
                  onChange={(e) =>
                    setProjectForm({
                      ...projectForm,
                      shortDescription: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="longDescription" className="form-label">
                  Long Description
                </label>
                <textarea
                  className="form-control"
                  id="longDescription"
                  rows="4"
                  value={projectForm.longDescription}
                  onChange={(e) =>
                    setProjectForm({
                      ...projectForm,
                      longDescription: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="techStack" className="form-label">
                  Tech Stack (comma-separated)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="techStack"
                  value={projectForm.techStack}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, techStack: e.target.value })
                  }
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="githubUrl" className="form-label">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="githubUrl"
                    value={projectForm.githubUrl}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, githubUrl: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="liveUrl" className="form-label">
                    Live URL
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="liveUrl"
                    value={projectForm.liveUrl}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, liveUrl: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">
                  Image URL (or upload file below)
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="imageUrl"
                  value={projectForm.imageUrl}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, imageUrl: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageFile" className="form-label">
                  Upload Image (optional)
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="imageFile"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
                <small className="text-muted">
                  For production, use S3-compatible storage. Max 5MB.
                </small>
              </div>
              <div className="d-flex gap-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading
                    ? 'Saving...'
                    : editingProject
                    ? 'Update Project'
                    : 'Create Project'}
                </button>
                {editingProject && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Projects List */}
        <div className="card shadow">
          <div className="card-header">
            <h4 className="mb-0">All Projects ({projects.length})</h4>
          </div>
          <div className="card-body">
            {projects.length === 0 ? (
              <p className="text-muted">No projects yet. Create your first project above!</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Tech Stack</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project._id}>
                        <td>{project.title}</td>
                        <td>
                          {project.shortDescription.substring(0, 50)}...
                        </td>
                        <td>
                          {project.techStack && project.techStack.length > 0
                            ? project.techStack.join(', ')
                            : '-'}
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary me-2"
                            onClick={() => handleEdit(project)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(project._id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default Admin;

