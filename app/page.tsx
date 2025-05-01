import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* 히어로 섹션 */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          션북스
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          새로운 시각, 새로운 이야기를 전달하는 출판사
        </p>
      </section>

      {/* 최신 도서 섹션 */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">최신 도서</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 도서 카드 예시 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[3/4] relative bg-gray-200 dark:bg-gray-700">
              {/* 이미지는 나중에 추가 */}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">도서 제목</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">저자 이름</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">출간일: 2024.04</p>
            </div>
          </div>
          
          {/* 더미 도서 카드들 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[3/4] relative bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">도서 제목 2</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">저자 이름</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">출간일: 2024.03</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[3/4] relative bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">도서 제목 3</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">저자 이름</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">출간일: 2024.02</p>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 rounded-xl">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">션북스 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            션북스는 독자들에게 새로운 관점과 깊이 있는 통찰을 전달하기 위해 노력합니다.
            우리는 다양한 분야의 전문가들과 협력하여 양질의 도서를 출간하고 있습니다.
          </p>
          <a
            href="/about"
            className="inline-block bg-gray-900 dark:bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            더 알아보기
          </a>
        </div>
      </section>

      {/* 소셜 미디어 섹션 */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">소셜 미디어</h2>
        <p className="text-gray-600 dark:text-gray-300">
          션북스의 다양한 소식과 이야기를 소셜 미디어에서 만나보세요
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            유튜브
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            인스타그램
          </a>
          <a
            href="https://blog.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            블로그
          </a>
        </div>
      </section>
    </div>
  );
}
