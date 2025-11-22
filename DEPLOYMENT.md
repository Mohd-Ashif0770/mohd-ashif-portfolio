# Deployment Guide - Vite + React Portfolio

This guide provides step-by-step instructions for deploying the portfolio website to Render (backend) and Vercel (frontend) with **Vite**.

## Prerequisites

- GitHub account
- MongoDB Atlas account (free tier available)
- Render account (free tier available)
- Vercel account (free tier available)

## Step 1: MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for a free account

2. **Create a Cluster**
   - Choose the free M0 tier
   - Select a cloud provider and region
   - Wait for cluster creation (5-10 minutes)

3. **Create Database User**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Authentication Method: Password
   - Username: `portfolio-admin` (or your choice)
   - Password: Generate a secure password (save it!)
   - Database User Privileges: "Atlas admin"
   - Click "Add User"

4. **Whitelist IP Addresses**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (or add specific IPs)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `portfolio`
   - Example: `mongodb+srv://portfolio-admin:yourpassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`
   - Save this connection string for Step 2

## Step 2: Backend Deployment (Render)

1. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Vite portfolio"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Create Render Web Service**
   - Go to https://render.com
   - Sign up or log in with GitHub
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Render Service**
   - **Name**: `portfolio-backend` (or your choice)
   - **Region**: Choose closest to you
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
   - Click "Advanced" and add environment variables:

4. **Add Environment Variables in Render**
   ```
   PORT=5000
   MONGO_URI=<your-mongodb-atlas-connection-string-from-step-1>
   JWT_SECRET=<generate-a-strong-random-secret>
   NODE_ENV=production
   ```

   To generate a strong JWT_SECRET:
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

   Optional email variables (for contact form):
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=noreply@yourdomain.com
   ```

   **Note**: For Gmail, you need to create an "App Password":
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Generate App Password
   - Use that as EMAIL_PASS

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Once deployed, note your service URL (e.g., `https://portfolio-backend.onrender.com`)

6. **Seed Database**
   - SSH into your Render service or use Render Shell
   - Or add a one-time build command:
   ```bash
   npm install && npm run seed
   ```
   - Or manually seed using MongoDB Compass or MongoDB Atlas Data Explorer

7. **Test Backend**
   - Visit: `https://your-service.onrender.com/api/health`
   - Should return: `{"status":"OK","message":"Server is running"}`

## Step 3: Frontend Deployment (Vercel) - Vite

1. **Update Client Environment Variables**
   - Create `client/.env.production`:
   ```env
   VITE_API_URL=https://your-backend-service.onrender.com/api
   ```
   - **Important**: In Vite, use `VITE_` prefix (not `REACT_APP_`)
   - Replace `your-backend-service` with your actual Render service URL

2. **Deploy via Vercel Dashboard**
   - Go to https://vercel.com
   - Sign up or log in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - **Root Directory**: `client`
     - **Framework Preset**: **Vite** (this is important!)
     - **Build Command**: `npm run build` (Vite default)
     - **Output Directory**: `dist` (Vite default)
     - **Install Command**: `npm install`

3. **Add Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add:
   ```
   VITE_API_URL=https://your-backend-service.onrender.com/api
   ```
   - **Important**: Use `VITE_` prefix for Vite (not `REACT_APP_`)
   - Replace with your actual backend URL
   - Apply to: Production, Preview, Development

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes with Vite - faster than CRA!)
   - Your site will be live at `https://your-project.vercel.app`

## Step 4: Post-Deployment Steps

1. **Update CORS (if needed)**
   - In `server/server.js`, update CORS origin if you have a custom domain:
   ```javascript
   app.use(cors({
     origin: ['https://your-portfolio.vercel.app', 'https://yourdomain.com'],
     credentials: true
   }));
   ```

2. **Seed Database with Projects**
   - Option 1: SSH into Render and run seed script
   - Option 2: Use admin panel after first login
   - Option 3: Use MongoDB Compass to manually add projects

3. **Test Admin Login**
   - Go to `https://your-frontend.vercel.app/admin`
   - Login with default credentials:
     - Email: `mohdashif0770@gmail.com`
     - Password: `asif123`
   - **IMPORTANT**: Change password after first login

4. **Add Assets**
   - Add profile image: `client/public/assets/profile.jpg`
   - Add resume: `client/public/assets/Resume.pdf`
   - **Commit and push** to GitHub
   - Vercel will automatically redeploy

5. **Test Resume Download**
   - Navigate to About section
   - Click "Download Resume" button
   - Should download `Resume.pdf` from `/assets/Resume.pdf`

## Step 5: Custom Domain (Optional)

### Vercel Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `REACT_APP_API_URL` if using custom domain

### Render Custom Domain
1. Go to Service Settings → Custom Domains
2. Add your domain
3. Configure DNS records
4. Update CORS settings

## Vite-Specific Deployment Notes

### Build Output
- Vite builds to `dist/` directory (not `build/`)
- Output is optimized and tree-shaken
- Much faster build times than Create React App

### Environment Variables
- Vite requires `VITE_` prefix for environment variables
- Use `VITE_API_URL` instead of `REACT_APP_API_URL`
- Variables are accessed via `import.meta.env.VITE_API_URL` (not `process.env`)

### Asset Handling
- Assets in `public/` are served from root
- Resume file at `public/assets/Resume.pdf` is accessible at `/assets/Resume.pdf`
- Images are automatically optimized during build

## Troubleshooting

### Backend Issues

**Issue**: MongoDB connection fails
- **Solution**: Check MONGO_URI format, verify IP whitelist, check password

**Issue**: 502 Bad Gateway
- **Solution**: Check Render logs, verify server starts correctly, check PORT env var

**Issue**: Uploads not working
- **Solution**: Render free tier has ephemeral filesystem. Use S3-compatible storage for production.

### Frontend Issues (Vite)

**Issue**: Build fails on Vercel
- **Solution**: 
  - Check Framework Preset is set to "Vite"
  - Verify Root Directory is `client`
  - Check build logs for specific errors

**Issue**: CORS errors
- **Solution**: Update CORS settings in server.js, ensure backend URL is correct

**Issue**: API calls failing
- **Solution**: Check REACT_APP_API_URL is correct, verify backend is running

**Issue**: Assets not loading (Resume PDF, images)
- **Solution**: 
  - Ensure files are in `client/public/assets/`
  - Check file names match exactly (case-sensitive)
  - Verify paths use `/assets/` not `./assets/`

**Issue**: Vite dev server not working locally
- **Solution**:
  - Make sure you're running `npm run dev` from `client/` directory
  - Or use `npm run dev` from root (runs both server and client)

## Production Checklist

- [ ] Change JWT_SECRET to a strong random value
- [ ] Change default admin credentials
- [ ] Set up email notifications (optional)
- [ ] Configure CORS for production domains
- [ ] Use S3-compatible storage for file uploads
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure custom domains
- [ ] Add SSL certificates (automatic on Render/Vercel)
- [ ] Test all functionality
- [ ] Verify resume download works
- [ ] Backup MongoDB database regularly
- [ ] Test Vite build locally before deploying

## Maintenance

- **Database Backups**: Use MongoDB Atlas automated backups (available on paid tiers)
- **Monitoring**: Set up uptime monitoring (UptimeRobot, etc.)
- **Logs**: Monitor Render and Vercel logs for errors
- **Updates**: Keep dependencies updated regularly
- **Vite Updates**: Vite is actively maintained, update regularly for security

## Performance Benefits of Vite

- ⚡ **Faster Build Times**: Vite builds significantly faster than Create React App
- 📦 **Smaller Bundle Size**: Better tree-shaking and code splitting
- 🔥 **Hot Module Replacement**: Instant updates during development
- 🚀 **Optimized Production Builds**: Automatic code splitting and optimization

---

For additional help, refer to:
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
