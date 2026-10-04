export const projectsData = [
  {
    _id: 'deltagpt-ai-chatbot',
    id: 'deltagpt-ai-chatbot',
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
    _id: 'wonderlust-hotel-booking-app',
    id: 'wonderlust-hotel-booking-app',
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
    _id: 'vyntra-video-call-app',
    id: 'vyntra-video-call-app',
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
    _id: 'zerodha-clone',
    id: 'zerodha-clone',
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

export const getProjectByIdOrSlug = (idOrSlug) => {
  if (!idOrSlug) return null;
  return projectsData.find(
    (project) =>
      project._id === idOrSlug ||
      project.id === idOrSlug ||
      project.slug === idOrSlug
  );
};

export default projectsData;
