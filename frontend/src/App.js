import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-dark-bg text-black dark:text-dark-text min-h-screen transition-colors duration-500">
        <header className="bg-blue-600 dark:bg-dark-card p-2 text-white">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">E-commerce Analytics Dashboard</h1>
            <div className="relative group flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-1 rounded-md transition-colors duration-500 flex items-center justify-center"
                style={{ width: '45px', height: '45px' }} // Slightly smaller size for the button
              >
                <span className="text-xl">{darkMode ? '🌞' : '🌜'}</span>
              </button>
              <span className="absolute left-[-60px] bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Theme
              </span>
            </div>
          </div>
        </header>
        <Dashboard darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;