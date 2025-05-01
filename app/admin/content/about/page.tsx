'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface HistoryItem {
  year: string;
  event: string;
}

interface FormData {
  mission: string;
  vision: string;
  values: string[];
  history: HistoryItem[];
  team: TeamMember[];
}

type ArrayField = 'values' | 'history' | 'team';

export default function AboutContentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    mission: '독자들에게 새로운 관점과 깊이 있는 통찰을 전달',
    vision: '출판계의 혁신을 선도하는 선도적인 출판사',
    values: [
      '창의성',
      '정직성',
      '독자 중심',
      '지속 가능성'
    ],
    history: [
      { year: '2024', event: '션북스 설립' },
      { year: '2024', event: '첫 번째 도서 출간' }
    ],
    team: [
      { name: '김대표', role: '대표이사', bio: '20년 출판 경력' },
      { name: '이편집장', role: '편집장', bio: '15년 편집 경력' }
    ]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    console.log('Form submitted:', formData);
    router.push('/admin');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = <T extends ArrayField>(
    field: T,
    index: number,
    value: Partial<FormData[T][number]>
  ) => {
    setFormData(prev => {
      const currentArray = prev[field] as Array<FormData[T][number]>;
      const newArray = currentArray.map((item, i) => 
        i === index ? { ...item, ...value } : item
      );
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">출판사 소개 수정</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                미션
              </label>
              <input
                type="text"
                name="mission"
                value={formData.mission}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                비전
              </label>
              <input
                type="text"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                핵심 가치
              </label>
              <div className="space-y-2">
                {formData.values.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => {
                      const newValues = [...formData.values];
                      newValues[index] = e.target.value;
                      setFormData(prev => ({ ...prev, values: newValues }));
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, values: [...prev.values, ''] }))}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  + 가치 추가
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                연혁
              </label>
              <div className="space-y-4">
                {formData.history.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <input
                      type="text"
                      value={item.year}
                      onChange={(e) => handleArrayChange('history', index, { year: e.target.value })}
                      placeholder="연도"
                      className="mt-1 block w-24 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                    />
                    <input
                      type="text"
                      value={item.event}
                      onChange={(e) => handleArrayChange('history', index, { event: e.target.value })}
                      placeholder="사건"
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, history: [...prev.history, { year: '', event: '' }] }))}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  + 연혁 추가
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                팀 구성
              </label>
              <div className="space-y-4">
                {formData.team.map((member, index) => (
                  <div key={index} className="space-y-2">
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleArrayChange('team', index, { name: e.target.value })}
                      placeholder="이름"
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                    />
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => handleArrayChange('team', index, { role: e.target.value })}
                      placeholder="역할"
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                    />
                    <input
                      type="text"
                      value={member.bio}
                      onChange={(e) => handleArrayChange('team', index, { bio: e.target.value })}
                      placeholder="소개"
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, team: [...prev.team, { name: '', role: '', bio: '' }] }))}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  + 팀원 추가
                </button>
              </div>
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