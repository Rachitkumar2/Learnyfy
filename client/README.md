# 🎓 Learnyfy - Learning Management System

A modern, responsive Learning Management System built with React and Vite. Learnyfy provides an intuitive platform for both students and educators to manage courses, track progress, and enhance the learning experience.



## ✨ Features

### 👨‍🎓 Student Features
- **Course Browsing**: Explore available courses with detailed information
- **Course Enrollment**: Easy one-click enrollment process
- **Interactive Learning**: Video lessons with progress tracking
- **Course Progress**: Track completion status and learning path
- **Responsive Design**: Seamless experience across all devices
- **Search & Filter**: Find courses quickly with advanced search

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Loading States**: Smooth loading animations and transitions
- **Responsive Layout**: Mobile-first design approach

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Authentication**: Clerk Authentication
- **Progress Bars**: RC Progress
- **Utilities**: Humanize Duration, Uniqid

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rachitkumar2/Learnyfy.git
   cd Learnyfy/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   VITE_CURRENCY=₹
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts development server with hot reload |
| `npm run build` | Creates production build in `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── educator/        # Educator-specific components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   └── student/         # Student-specific components
│       ├── CourseCard.jsx
│       ├── Hero.jsx
│       ├── Loading.jsx
│       └── Navbar.jsx
├── pages/               # Route components
│   ├── educator/        # Educator dashboard pages
│   │   ├── Dashboard.jsx
│   │   ├── Addcourse.jsx
│   │   └── Mycourses.jsx
│   └── student/         # Student pages
│       ├── Home.jsx
│       ├── CourseDetails.jsx
│       └── CoursesList.jsx
├── context/             # React Context providers
│   └── AppContext.jsx
├── assets/              # Static assets (images, icons, fonts)
└── App.jsx              # Main application component
```

## 🎯 Key Components

### Course Management
- **CourseCard**: Displays course information with ratings and pricing
- **CourseDetails**: Comprehensive course view with curriculum
- **Player**: Video lesson player with progress tracking

### User Interface
- **Loading**: Smooth spinner animation for data loading
- **Navbar**: Responsive navigation with user authentication
- **Hero**: Landing page hero section with call-to-action

### Authentication
- **Clerk Integration**: Secure user authentication and management
- **Role-based Access**: Different interfaces for students and educators

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deployment 

#### Vercel 


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rachit Kumar**
- GitHub: [@Rachitkumar2](https://github.com/Rachitkumar2)


---
