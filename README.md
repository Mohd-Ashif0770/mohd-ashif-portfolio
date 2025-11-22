# Mohd Ashif - Portfolio Website (Vite + React)

A modern, full-stack MERN portfolio website showcasing projects, skills, and contact information. Built with **Vite + React**, Bootstrap 5, Express, MongoDB, and Node.js.

![Portfolio Screenshot](https://via.placeholder.com/800x400/5A00FF/ffffff?text=Mohd+Ashif+Portfolio+Vite)

## 🚀 Features

- **⚡ Vite + React**: Lightning-fast development and build times
- **🎨 Modern Gradient UI**: Beautiful gradient backgrounds matching Lovable portfolio design
- **📱 Fully Responsive**: Mobile-first design using Bootstrap 5
- **🔐 Admin Panel**: Secure admin interface for managing projects (JWT authentication)
- **📧 Contact Form**: Functional contact form with email notifications
- **✨ Smooth Animations**: AOS (Animate On Scroll) library for engaging transitions
- **🎯 Dynamic Projects**: Dynamic project display with images, descriptions, and links
- **📄 Resume Download**: Direct resume PDF download functionality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (MongoDB Atlas account recommended for cloud deployment)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Portfolio
```

### 2. Install Dependencies

Install dependencies for root, server, and client:

```bash
npm run install:all
```

Or install individually:

```bash
# Root dependencies (concurrently)
npm install

# Server dependencies
cd server
npm install

# Client dependencies
cd ../client
npm install
```

### 3. Environment Variables

#### Server Environment Variables

Create a `.env` file in the `server/` directory:

```bash
cd server
cp env.example .env
```

Edit `.env` with your configuration:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development

# Optional: Email configuration (for contact form notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@yourdomain.com
```

#### Client Environment Variables

Create a `.env` file in the `client/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

**Important**: In Vite, environment variables must be prefixed with `VITE_` (not `REACT_APP_`).

For production, update `VITE_API_URL` to your deployed backend URL.

### 4. Seed the Database

Run the seed script to populate the database with initial projects and admin user:

```bash
cd server
npm run seed
```

**Default Admin Credentials:**

- Email: `mohdashif0770@gmail.com`
- Password: `asif123`

⚠️ **IMPORTANT**: Change these credentials before deploying to production!

### 5. Add Assets

1. **Profile Image**: The profile image is automatically fetched from GitHub. To use a custom image, replace `client/public/assets/profile.jpg` with your own (recommended: 400x400px square format).

2. **Resume**: Add your resume PDF file to `client/public/assets/` as `Resume.pdf`
   - The download button links to `/assets/Resume.pdf`
   - Make sure the file is named exactly `Resume.pdf` (case-sensitive)

## 🏃 Running Locally

### Development Mode (Both Client & Server)

From the root directory, run:

```bash
npm run dev
```

This will start:

- **Server**: http://localhost:5000
- **Client (Vite)**: http://localhost:3000

### Run Separately

**Server only:**

```bash
cd server
npm run dev
```

**Client only:**

```bash
cd client
npm run dev
```

## 📁 Project Structure

```
Portfolio/
├── client/                 # Vite + React frontend
│   ├── public/
│   │   ├── assets/        # Static assets (images, resume)
│   │   │   └── Resume.pdf # Resume file (add your PDF here)
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Toast.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Project.jsx
│   │   │   └── Admin.jsx
│   │   ├── utils/         # Utilities
│   │   │   └── apiService.js
│   │   ├── App.jsx
│   │   ├── main.jsx       # Vite entry point
│   │   └── index.css
│   ├── index.html         # Vite HTML template
│   ├── vite.config.js     # Vite configuration
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── scripts/          # Utility scripts
│   │   └── seed.js
│   ├── uploads/          # Uploaded files (project images)
│   ├── server.js         # Server entry point
│   └── package.json
├── package.json          # Root package.json (for concurrently)
├── .gitignore
└── README.md
```

## 🚀 Deployment

### Backend Deployment (Render)

1. **Create a Render Account** at https://render.com

2. **Create a New Web Service**:

   - Connect your GitHub repository
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: `Node`

3. **Add Environment Variables** in Render dashboard:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   NODE_ENV=production
   EMAIL_HOST=smtp.gmail.com (optional)
   EMAIL_PORT=587 (optional)
   EMAIL_USER=your-email@gmail.com (optional)
   EMAIL_PASS=your-app-password (optional)
   EMAIL_FROM=noreply@yourdomain.com (optional)
   ```

4. **Get Your Backend URL**: After deployment, note your Render service URL (e.g., `https://your-app.onrender.com`)

### Frontend Deployment (Vercel)

1. **Create a Vercel Account** at https://vercel.com

2. **Install Vercel CLI** (optional):

   ```bash
   npm install -g vercel
   ```

3. **Update Client Environment Variables**:

   - Create `.env.production` in `client/` directory:

   ```env
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api
   ```

4. **Deploy via Vercel CLI**:

   ```bash
   cd client
   vercel
   ```

   Or connect your GitHub repository to Vercel dashboard:

   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist` (Vite default)
   - Install Command: `npm install`

5. **Add Environment Variables** in Vercel dashboard:

   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api
   ```

6. **Build Settings**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### MongoDB Atlas Setup

1. **Create MongoDB Atlas Account** at https://www.mongodb.com/cloud/atlas

2. **Create a Cluster** (Free tier available)

3. **Create Database User**:

   - Go to Database Access
   - Add new database user
   - Save username and password

4. **Whitelist IP Address**:

   - Go to Network Access
   - Add IP Address: `0.0.0.0/0` (for Render) or your specific IP

5. **Get Connection String**:
   - Go to Database → Connect
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `portfolio`

## 🎨 UI Features

- **Gradient Backgrounds**: All sections use beautiful gradient backgrounds matching Lovable portfolio
- **Glassmorphism**: Cards use backdrop blur effects for modern look
- **Smooth Animations**: AOS animations on scroll
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Modern Buttons**: Gradient buttons with hover effects
- **Custom Scrollbar**: Gradient-styled scrollbar

## 🔐 Security Notes

- **Change JWT_SECRET**: Use a strong, random secret in production
- **Update Admin Credentials**: Change default admin email/password after first login
- **MongoDB Security**: Use strong passwords and restrict IP access when possible
- **Environment Variables**: Never commit `.env` files to version control
- **File Uploads**: In production, use S3-compatible storage instead of local file system

## 📝 API Endpoints

### Public Endpoints

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project by ID or slug
- `POST /api/contact` - Submit contact form

### Protected Endpoints (Require JWT Token)

- `POST /api/admin/login` - Admin login
- `POST /api/admin/projects` - Create project
- `PUT /api/admin/projects/:id` - Update project
- `DELETE /api/admin/projects/:id` - Delete project

## 🛠️ Technologies Used

### Frontend

- **Vite** 5.0 (Build tool)
- React 18
- React Router 6
- Bootstrap 5
- Font Awesome 6
- AOS (Animate On Scroll)
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Multer (file uploads)
- Nodemailer (email notifications)

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Mohd Ashif**

- Email: mohdashif0770@gmail.com
- LinkedIn: [https://www.linkedin.com/in/mohd-ashif/](https://www.linkedin.com/in/mohd-ashif/)
- GitHub: [https://github.com/Mohd-Ashif0770](https://github.com/Mohd-Ashif0770)
- Location: Udhna, Surat, Gujarat

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Mohd-Ashif0770/portfolio/issues).

## 📞 Support

For support, email mohdashif0770@gmail.com or connect via LinkedIn.

---

Made with ❤️ by Mohd Ashif using Vite + React
