'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BookTable from './components/BookTable';

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  publishDate: string;
  description: string;
  coverImage: string;
  status: 'published' | 'draft';
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('books');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // 로컬 스토리지에서 도서 목록 불러오기
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      // 초기 데이터 설정 및 저장
      const initialBooks: Book[] = [{
        id: '1',
        title: '미래를 여는 책',
        author: '김작가',
        category: '사회',
        publishDate: '2024.04',
        description: '미래 사회의 변화와 혁신에 대한 통찰력 있는 분석',
        coverImage: '/placeholder.jpg',
        status: 'published' as const,
      }];
      setBooks(initialBooks);
      localStorage.setItem('books', JSON.stringify(initialBooks));
    }
  }, []);

  const handleDeleteBook = (id: string) => {
    if (confirm('정말로 이 도서를 삭제하시겠습니까?')) {
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('books')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'books'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                도서 관리
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'content'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                콘텐츠 관리
              </button>
              <button
                onClick={() => setActiveTab('social')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'social'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                소셜 미디어 관리
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'books' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">도서 관리</h2>
                  <Link
                    href="/admin/books/new"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                  >
                    새 도서 추가
                  </Link>
                </div>
                <BookTable books={books} onDelete={handleDeleteBook} />
              </div>
            )}

            {activeTab === 'content' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">콘텐츠 관리</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">메인 페이지 콘텐츠</h3>
                    <Link
                      href="/admin/content/main"
                      className="text-primary hover:text-primary/80"
                    >
                      수정하기 →
                    </Link>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">출판사 소개</h3>
                    <Link
                      href="/admin/content/about"
                      className="text-primary hover:text-primary/80"
                    >
                      수정하기 →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">소셜 미디어 관리</h2>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        유튜브 링크
                      </label>
                      <input
                        type="url"
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        인스타그램 링크
                      </label>
                      <input
                        type="url"
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        블로그 링크
                      </label>
                      <input
                        type="url"
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                    >
                      저장하기
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 