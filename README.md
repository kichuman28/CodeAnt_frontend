# CodeAnt AI Frontend Assignment

This project is a frontend implementation for CodeAnt AI's developer platform, created as part of the Frontend Developer Intern assignment. It's built using React and Vite, featuring a modern and responsive design that works seamlessly across desktop and mobile devices.

![image](https://github.com/user-attachments/assets/a265a289-b5d2-4cfc-a6a9-c10eb9328b4a)
![image](https://github.com/user-attachments/assets/d90d5cb0-4fff-4470-bf50-3bbef94f3de9)


## Features

- 🔐 Authentication System with SAAS/Self-hosted options
- 📱 Fully Responsive Design
- 🎨 Clean and Modern UI
- 📊 Repository Management Dashboard
- 💻 Multi-device Support

## Tech Stack

- React 18
- Vite
- TailwindCSS
- React Router DOM

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/codeant-frontend-assignment.git
   cd codeant-frontend-assignment
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Project Structure

```
codeant-frontend/
├── public/
│   └── ant-logo.svg
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── RepositoryList.jsx
│   │   └── ...
│   ├── layouts/
│   │   └── DashboardLayout.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   └── RepositoryPage.jsx
│   ├── ui/
│   │   └── icons/
│   └── App.jsx
└── index.html
```

## Features Implementation

### Authentication
- Dual authentication options: SAAS and Self-hosted
- Clean login interface with social login options
- Secure routing system

### Dashboard
- Repository management with search functionality
- Real-time repository status updates
- Quick actions for repository refresh and addition

### Responsive Design
- Mobile-first approach
- Adaptive sidebar that transforms into a dropdown menu on mobile
- Optimized spacing and layout for different screen sizes

## Design Decisions

- Used TailwindCSS for consistent styling and rapid development
- Implemented a component-based architecture for better maintainability
- Created reusable UI components for icons and common elements
- Used CSS Grid and Flexbox for responsive layouts
- Implemented mobile-first design principles

## Future Improvements

- Add dark mode support
- Implement user settings persistence
- Add more interactive animations
- Enhance accessibility features
- Add unit tests

## Assignment Details

This project was created as part of the Frontend Developer Intern assignment for CodeAnt. The goal was to demonstrate:

- Modern React development practices
- Responsive design implementation
- Clean code architecture
- Component reusability
- State management
- Routing implementation

## License

This project is created for assignment purposes and is not licensed for commercial use.
