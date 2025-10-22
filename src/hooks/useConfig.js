import { useState, useEffect } from 'react';
import siteConfig from '../config/siteConfig.json';

export const useConfig = () => {
  const [config, setConfig] = useState(siteConfig);

  const updateConfig = async (newConfig) => {
    setConfig(newConfig);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
      
      await fetch(`${backendUrl}/api/config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newConfig)
      });
    } catch (error) {
      console.error('Failed to save config:', error);
      localStorage.setItem('siteConfig', JSON.stringify(newConfig));
    }
  };

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
        const response = await fetch(`${backendUrl}/api/config`);
        if (response.ok) {
          const backendConfig = await response.json();
          setConfig(backendConfig);
          return;
        }
      } catch (error) {
        console.error('Failed to load from backend:', error);
      }
      
      // Fallback to localStorage
      const savedConfig = localStorage.getItem('siteConfig');
      if (savedConfig) {
        setConfig(JSON.parse(savedConfig));
      }
    };
    
    loadConfig();
  }, []);

  return { config, updateConfig };
};