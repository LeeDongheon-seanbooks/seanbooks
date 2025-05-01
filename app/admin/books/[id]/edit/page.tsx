'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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

export default function EditBookPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState<Book>({
    id: params.id,
    title: '',
    author: '',
    category: '',
    publishDate: '',
    description: '',
    coverImage: '',
    status: 'draft',
  });

  useEffect(() => {
    // 로컬 스토리지에서 도서 데이터 가져오기
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      const books = JSON.parse(savedBooks);
      const book = books.find((b: Book) => b.id === params.id);
      if (book) {
        setFormData(book);
      } else {
        // 도서를 찾을 수 없는 경우 관리자 페이지로 리다이렉트
        router.push('/admin');
      }
    }
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 로컬 스토리지에서 기존 도서 목록 가져오기
      const savedBooks = localStorage.getItem('books');
      if (savedBooks) {
        const books = JSON.parse(savedBooks);
        
        // 도서 정보 업데이트
        const updatedBooks = books.map((book: Book) =>
          book.id === params.id ? formData : book
        );
        
        // 로컬 스토리지에 저장
        localStorage.setItem('books', JSON.stringify(updatedBooks));
      }
      
      // 관리자 페이지로 이동
      router.push('/admin');
    } catch (error) {
      console.error('도서 수정 중 오류 발생:', error);
      alert('도서를 수정하는 중에 오류가 발생했습니다.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">도서 수정</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                제목
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                저자
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                카테고리
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              >
                <option value="">카테고리 선택</option>
                <option value="역학">역학</option>
                <option value="심리학">심리학</option>
                <option value="철학">철학</option>
                <option value="수필">수필</option>
                <option value="소설">소설</option>
                <option value="시">시</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                출간일
              </label>
              <input
                type="date"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                설명
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                표지 이미지 URL
              </label>
              <input
                type="url"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                상태
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              >
                <option value="draft">초안</option>
                <option value="published">출간됨</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 