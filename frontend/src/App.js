import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import GitHubIcon from './components/GitHubIcon';

function App() {
    const [darkMode, setDarkMode] = useState(true); // Dark mode is default

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="bg-white dark:bg-dark-bg text-black dark:text-dark-text min-h-screen transition-colors duration-500">
                <header className="bg-blue-600 dark:bg-dark-card p-2 text-white">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                        <div className="flex items-center space-x-2 relative mb-4 md:mb-0">
                            <h1 className="text-2xl font-bold text-center md:text-left">E-commerce Analytics Dashboard</h1>
                            <div className="w-1 h-8 bg-gray-400 bg-gray-400 hidden md:block"></div>
                            <div className="relative flex items-center group">
                                <a
                                    href="https://github.com/kishlaykiku/Ecommerce-Data-Visualization"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-8 h-8"
                                >
                                    <GitHubIcon />
                                </a>
                                <span className="absolute left-11 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap tooltip-arrow tooltip-left hidden sm:block">
                                    Show Repo
                                </span>
                            </div>
                        </div>
                        <div className="relative flex items-center group">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-1 rounded-md transition-colors duration-500 flex items-center justify-center"
                                style={{ width: '45px', height: '45px' }}>
                            <span className="text-xl">{darkMode ? '🌞' : '🌜'}</span>
                            </button>
                            <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap tooltip-arrow tooltip-right hidden sm:block">
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