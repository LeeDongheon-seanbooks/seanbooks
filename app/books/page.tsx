import Image from "next/image";
import Link from "next/link";

// 임시 도서 데이터
const books = [
  {
    id: 1,
    title: "미래를 여는 책",
    author: "김작가",
    publishDate: "2024.04",
    description: "미래 사회의 변화와 혁신에 대한 통찰력 있는 분석",
    category: "사회",
    price: "18,000원",
    coverImage: "/placeholder.jpg"
  },
  {
    id: 2,
    title: "마음의 지도",
    author: "이마음",
    publishDate: "2024.03",
    description: "현대인의 마음 건강을 위한 심리 안내서",
    category: "자기계발",
    price: "16,000원",
    coverImage: "/placeholder.jpg"
  },
  {
    id: 3,
    title: "코딩의 시작",
    author: "박개발",
    publishDate: "2024.02",
    description: "프로그래밍 입문자를 위한 친절한 안내서",
    category: "컴퓨터/IT",
    price: "22,000원",
    coverImage: "/placeholder.jpg"
  },
  {
    id: 4,
    title: "요리의 즐거움",
    author: "최셰프",
    publishDate: "2024.01",
    description: "일상을 특별하게 만드는 홈쿠킹 레시피",
    category: "요리",
    price: "19,800원",
    coverImage: "/placeholder.jpg"
  },
  {
    id: 5,
    title: "세계 여행 이야기",
    author: "정여행",
    publishDate: "2023.12",
    description: "세계 각국의 문화와 삶을 담은 여행 에세이",
    category: "여행",
    price: "17,000원",
    coverImage: "/placeholder.jpg"
  },
  {
    id: 6,
    title: "경제의 흐름",
    author: "한경제",
    publishDate: "2023.11",
    description: "쉽게 이해하는 현대 경제의 핵심 원리",
    category: "경제",
    price: "20,000원",
    coverImage: "/placeholder.jpg"
  }
];

export default function BooksPage() {
  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">도서 목록</h1>
        <p className="text-gray-600 dark:text-gray-300">션북스가 선보이는 모든 도서를 만나보세요</p>
      </div>

      {/* 카테고리 필터 */}
      <div className="flex justify-center space-x-4">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          전체
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          사회
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          자기계발
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          컴퓨터/IT
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          기타
        </button>
      </div>

      {/* 도서 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div key={book.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[3/4] relative bg-gray-200 dark:bg-gray-700">
              {/* 이미지는 나중에 추가 */}
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded">
                  {book.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{book.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{book.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{book.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 dark:text-white font-medium">{book.price}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">출간일: {book.publishDate}</span>
              </div>
              <Link 
                href={`/books/${book.id}`}
                className="mt-4 w-full bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors inline-block text-center"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 