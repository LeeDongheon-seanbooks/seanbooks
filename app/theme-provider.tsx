'use client';

import { useEffect } from 'react';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 로컬 스토리지에서 테마 설정 가져오기
    const theme = localStorage.getItem('theme');
    
    // 시스템 다크모드 설정 확인
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 테마 설정이 없으면 시스템 설정 사용
    if (!theme && systemDarkMode) {
      document.documentElement.classList.add('dark');
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return <>{children}</>;
} 