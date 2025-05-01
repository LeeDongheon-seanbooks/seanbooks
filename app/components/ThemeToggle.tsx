'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 초기 다크모드 상태 설정
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      setDarkMode(isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // HTML 요소에 다크모드 클래스 토글
    document.documentElement.classList.toggle('dark');
    
    // 사용자 선호도 저장
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  // 마운트되기 전에는 아무것도 렌더링하지 않음 (hydration 문제 방지)
  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-colors duration-200 ease-in-out
                hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary
                dark:focus:ring-primary"
      aria-label="테마 변경"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-200 ease-in-out transform hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-200 ease-in-out transform hover:-rotate-45" />
      )}
    </button>
  );
} 