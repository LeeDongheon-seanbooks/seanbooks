import Image from "next/image";
import Link from "next/link";

// 임시 도서 상세 데이터
const bookDetail = {
  id: 1,
  title: "미래를 여는 책",
  author: "김작가",
  publishDate: "2024.04",
  description: "미래 사회의 변화와 혁신에 대한 통찰력 있는 분석",
  longDescription: `
    이 책은 급변하는 현대 사회에서 우리가 마주할 미래에 대한 깊이 있는 통찰을 제공합니다.
    
    제1장에서는 기술 혁신이 가져올 변화를,
    제2장에서는 사회 구조의 변화를,
    제3장에서는 개인의 삶의 방식 변화를 다룹니다.
    
    저자는 20년간의 연구와 현장 경험을 바탕으로, 미래 사회의 모습을 생생하게 그려내고
    우리가 어떻게 준비하고 대응해야 할지에 대한 실질적인 제안을 합니다.
  `,
  category: "사회",
  price: "18,000원",
  coverImage: "/placeholder.jpg",
  isbn: "979-11-xxxxx-xx-x",
  pages: "280쪽",
  size: "152*225mm",
  publisher: "션북스",
  tableOfContents: [
    "프롤로그",
    "제1장 기술 혁신과 미래",
    "제2장 변화하는 사회 구조",
    "제3장 새로운 삶의 방식",
    "제4장 미래를 준비하는 방법",
    "에필로그"
  ],
  relatedLinks: {
    youtube: "https://youtube.com/watch?v=xxxxx",
    instagram: "https://instagram.com/p/xxxxx",
    blog: "https://blog.naver.com/xxxxx"
  }
};

export default function BookDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 상단 네비게이션 */}
      <div className="mb-8">
        <Link href="/books" className="text-gray-600 hover:text-gray-900">
          ← 도서 목록으로 돌아가기
        </Link>
      </div>

      {/* 도서 기본 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[3/4] relative bg-gray-200 rounded-lg overflow-hidden">
          {/* 이미지는 나중에 추가 */}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="inline-block px-2 py-1 text-sm font-semibold text-gray-700 bg-gray-100 rounded">
              {bookDetail.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">{bookDetail.title}</h1>
            <p className="text-xl text-gray-600">{bookDetail.author} 저</p>
          </div>
          
          <p className="text-gray-600">{bookDetail.description}</p>
          
          <div className="border-t border-b border-gray-200 py-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">정가</span>
              <span className="font-medium">{bookDetail.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">출간일</span>
              <span>{bookDetail.publishDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ISBN</span>
              <span>{bookDetail.isbn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">페이지</span>
              <span>{bookDetail.pages}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">크기</span>
              <span>{bookDetail.size}</span>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              구매하기
            </button>
          </div>
        </div>
      </div>

      {/* 도서 상세 정보 */}
      <div className="space-y-8 mt-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">책 소개</h2>
          <div className="prose max-w-none">
            {bookDetail.longDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600">{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">목차</h2>
          <ul className="space-y-2">
            {bookDetail.tableOfContents.map((chapter, index) => (
              <li key={index} className="text-gray-600">{chapter}</li>
            ))}
          </ul>
        </section>

        {/* 관련 콘텐츠 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">관련 콘텐츠</h2>
          <div className="flex space-x-4">
            <a
              href={bookDetail.relatedLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300"
            >
              유튜브 영상 보기
            </a>
            <a
              href={bookDetail.relatedLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300"
            >
              인스타그램 포스트
            </a>
            <a
              href={bookDetail.relatedLinks.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300"
            >
              블로그 리뷰
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 