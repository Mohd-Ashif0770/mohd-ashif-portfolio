# Quick Start Guide - Vite + React Portfolio

Get your portfolio up and running locally in 5 minutes with **Vite**!

## Prerequisites

- Node.js v16+ installed
- MongoDB Atlas account (free tier works)

## Steps

### 1. Install Dependencies

```bash
npm run install:all
```

This installs dependencies for root, server, and client.

### 2. Set Up Environment Variables

**Server (.env file in `server/` directory):**
```bash
cd server
cp env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

**Client (.env file in `client/` directory):**
```bash
cd client
echo "VITE_API_URL=http://localhost:5000/api" > .env
```

**Note**: In Vite, environment variables must use `VITE_` prefix (not `REACT_APP_`).

### 3. Seed Database

```bash
cd server
npm run seed
```

This creates:
- 4 sample projects
- Default admin user (mohdashif0770@gmail.com / asif123)

### 4. Start Development Servers

From the root directory:

```bash
npm run dev
```

This starts:
- **Backend**: http://localhost:5000
- **Frontend (Vite)**: http://localhost:3000

## Access Points

- **Portfolio**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
  - Email: `mohdashif0770@gmail.com`
  - Password: `asif123`
- **API Health**: http://localhost:5000/api/health

## Vite Development Features

- ⚡ **Lightning Fast**: Instant server start
- 🔥 **HMR**: Hot Module Replacement - changes appear instantly
- 📦 **Optimized**: Faster builds and smaller bundles
- 🛠️ **Better DX**: Improved developer experience

## Next Steps

1. **Add Your Assets**:
   - Profile image: `client/public/assets/profile.jpg` (400x400px recommended)
   - Resume: `client/public/assets/Resume.pdf` (must be named exactly `Resume.pdf`)

2. **Customize Content**:
   - Update personal info in components (About.jsx, Hero.jsx, etc.)
   - Modify projects in the admin panel or update seed.js

3. **Build for Production**:
   ```bash
   cd client
   npm run build
   ```
   Output will be in `client/dist/` directory

4. **Deploy**:
   - See `DEPLOYMENT.md` for detailed deployment instructions
   - Backend: Deploy to Render
   - Frontend: Deploy to Vercel (Vite preset)

## Troubleshooting

### MongoDB Connection Error
- Verify your MONGO_URI in `.env` is correct
- Check that your IP is whitelisted in MongoDB Atlas
- Ensure the database user password is correct

### Port Already in Use
- Change PORT in `server/.env` (default: 5000)
- Or kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  ```

### CORS Errors
- Ensure backend is running on port 5000
- Check VITE_API_URL in client/.env matches backend URL

### Vite Not Starting
- Make sure you're in the `client/` directory or using root `npm run dev`
- Check that all dependencies are installed: `npm install` in client/
- Verify Node.js version is 16+

### Assets Not Loading
- Resume must be named exactly `Resume.pdf` (case-sensitive)
- Files must be in `client/public/assets/` directory
- After adding files, restart Vite dev server

### Build Errors
- Clear node_modules and reinstall:
  ```bash
  cd client
  rm -rf node_modules package-lock.json
  npm install
  ```

## Vite vs Create React App

| Feature | Create React App | Vite |
|---------|-----------------|------|
| Dev Server Start | ~10-30s | ~1-2s ⚡ |
| HMR | Slower | Instant 🔥 |
| Build Time | ~30-60s | ~5-10s ⚡ |
| Bundle Size | Larger | Smaller 📦 |
| Dev Experience | Good | Excellent 🚀 |

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions
- Review error messages in browser console and terminal
- Vite Docs: https://vitejs.dev

## Useful Commands

```bash
# Install all dependencies
npm run install:all

# Start both server and client
npm run dev

# Start only backend
npm run server

# Start only frontend (Vite)
npm run client

# Build frontend for production
cd client && npm run build

# Preview production build locally
cd client && npm run preview

# Seed database
npm run seed
```

---

Happy coding! 🚀
