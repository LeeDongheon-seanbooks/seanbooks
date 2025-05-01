export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* 페이지 헤더 */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">연락처</h1>
        <p className="text-xl text-gray-600">
          문의사항이나 제안이 있으시다면 언제든 연락주세요
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 연락처 정보 */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">연락처 정보</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-gray-900">주소</h3>
                <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
                <p className="text-gray-600">션북스 빌딩 4층</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">이메일</h3>
                <p className="text-gray-600">contact@seanbooks.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">전화</h3>
                <p className="text-gray-600">02-123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">팩스</h3>
                <p className="text-gray-600">02-123-4568</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">영업 시간</h2>
            <div className="space-y-2">
              <p className="text-gray-600">월요일 - 금요일: 09:00 - 18:00</p>
              <p className="text-gray-600">토요일, 일요일, 공휴일: 휴무</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">소셜 미디어</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                유튜브
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                인스타그램
              </a>
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                블로그
              </a>
            </div>
          </div>
        </section>

        {/* 문의하기 폼 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">문의하기</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                제목
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              보내기
            </button>
          </form>
        </section>
      </div>

      {/* 지도 섹션 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">오시는 길</h2>
        <div className="aspect-video bg-gray-200 rounded-lg">
          {/* 지도는 나중에 추가 */}
        </div>
      </section>
    </div>
  );
} 