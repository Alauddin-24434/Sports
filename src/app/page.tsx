"use client"
import { useState, useEffect } from 'react';
import Collection from "@/components/Collection/Collection";
import Banner from "@/components/Banner/Banner";

export default function Landing() {
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save the theme to local storage
  };

  // Effect to load theme from local storage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <main className={`${theme === 'light' ? 'bg-[#F9F8FF] ' : 'bg-[#292B32]'}`}>
      <Banner theme={theme}/>
      <Collection theme={theme}  />
      {/* Toggle button for theme */}
      <button className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 text-gray-800" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </main>
  );
}
