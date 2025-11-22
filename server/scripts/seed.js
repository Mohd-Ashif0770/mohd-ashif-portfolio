require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Project = require('../models/Project');
const AdminUser = require('../models/AdminUser');

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    seedDatabase();
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

async function seedDatabase() {
  try {
    // Clear existing data
    await Project.deleteMany({});
    await AdminUser.deleteMany({});

    console.log('📦 Seeding projects...');

    // Seed projects
    const projects = [
      {
        title: 'DeltaGPT – AI Chatbot',
        slug: 'deltagpt-ai-chatbot',
        shortDescription:
          'Full-stack AI Chatbot using MERN + OpenAI, JWT auth, chat history, React Context API.',
        longDescription:
          'An advanced AI-powered chatbot built using OpenAI API, React, and Node.js. DeltaGPT delivers real-time intelligent conversations with a modern UI inspired by ChatGPT. Features include JWT authentication, persistent chat history, and React Context API for state management.',
        techStack: [
          'React',
          'Node.js',
          'Express',
          'OpenAI API',
          'MongoDB',
          'JWT',
        ],
        githubUrl: 'https://github.com/Mohd-Ashif0770/DeltaGPT-AI-Chatbot',
        liveUrl: 'https://delta-gpt-chatbot.vercel.app/',
        imageUrl: '',
      },
      {
        title: 'WonderLust – Hotel Booking App',
        slug: 'wonderlust-hotel-booking-app',
        shortDescription:
          'MERN hotel booking app with add/edit/delete listings, reviews, Bootstrap UI.',
        longDescription:
          'A full-featured hotel booking platform built with Node.js, Express, MongoDB, and EJS. Includes authentication, image uploads, and CRUD functionality for listings. Users can browse hotels, add reviews, and manage bookings.',
        techStack: [
          'Node.js',
          'Express.js',
          'MongoDB',
          'EJS',
          'Bootstrap',
          'Cloudinary',
        ],
        githubUrl:
          'https://github.com/Mohd-Ashif0770/Hotal_Booking_Node_Project',
        liveUrl: 'https://hotal-booking-node-project.onrender.com/listings',
        imageUrl: '',
      },
      {
        title: 'Vyntra – Video Call App',
        slug: 'vyntra-video-call-app',
        shortDescription: 'Real-time video call app (WebRTC based).',
        longDescription:
          'A real-time video calling app using WebRTC and Socket.io. Connects users through peer-to-peer video sessions with a sleek and responsive UI. Features include screen sharing, chat, and room management.',
        techStack: ['React.js', 'Node.js', 'Express', 'Socket.io', 'WebRTC'],
        githubUrl: 'https://github.com/Mohd-Ashif0770/Vyntra-VideoCallApp',
        liveUrl: 'https://vyntra-video-call-app.vercel.app/',
        imageUrl: '',
      },
      {
        title: 'Zerodha Clone',
        slug: 'zerodha-clone',
        shortDescription:
          'UI clone that demonstrates trading dashboard features.',
        longDescription:
          "A responsive frontend clone of India's leading stock trading platform, Zerodha. Designed with modern UI/UX practices focusing on simplicity and precision. Features include real-time data visualization and responsive design.",
        techStack: ['HTML', 'CSS', 'JavaScript', 'React.js'],
        githubUrl: 'https://github.com/Mohd-Ashif0770/zerodha-clone',
        liveUrl: 'https://zerodha-clone-kappa-eight.vercel.app/',
        imageUrl: '',
      },
    ];

    await Project.insertMany(projects);
    console.log(`✅ Seeded ${projects.length} projects`);

    // Seed admin user
    console.log('👤 Seeding admin user...');
    const adminEmail = 'mohdashif0770@gmail.com';
    const adminPassword = 'asif123';

    // Hash password
    const passwordHash = await bcrypt.hash(adminPassword, 10);

    await AdminUser.create({
      email: adminEmail,
      passwordHash,
    });

    console.log('✅ Seeded admin user');
    console.log('\n📝 Default Admin Credentials:');
    console.log(`   Email: ${adminEmail}`);
    console.log(`   Password: ${adminPassword}`);
    console.log('\n⚠️  IMPORTANT: Change these credentials in production!');

    console.log('\n🎉 Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}
