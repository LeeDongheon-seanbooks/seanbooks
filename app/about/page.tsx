import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* 히어로 섹션 */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          새로운 시각, 새로운 이야기
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          션북스는 독자들에게 새로운 관점과 가치 있는 이야기를 전달하기 위해 노력합니다
        </p>
      </section>

      {/* 미션과 비전 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">미션</h2>
          <p className="text-gray-600">
            우리는 양질의 도서를 통해 독자들의 삶을 풍요롭게 만들고,
            새로운 시각과 깊이 있는 통찰을 제공하여 사회에 긍정적인 변화를 이끌어내고자 합니다.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">비전</h2>
          <p className="text-gray-600">
            션북스는 독자와 저자가 함께 성장하는 플랫폼이 되어,
            지식과 경험의 공유를 통해 더 나은 미래를 만들어가는 것을 목표로 합니다.
          </p>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">핵심 가치</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">혁신</h3>
            <p className="text-gray-600">
              새로운 시각과 방식으로 출판 문화를 혁신하고, 독자들에게 신선한 경험을 제공합니다.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">전문성</h3>
            <p className="text-gray-600">
              각 분야의 전문가들과 협력하여 깊이 있는 콘텐츠를 제작합니다.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">소통</h3>
            <p className="text-gray-600">
              독자와의 열린 소통을 통해 더 나은 도서를 만들어갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">연혁</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-24 flex-shrink-0 text-gray-500">2024</div>
            <div className="flex-grow">
              <p className="text-gray-900 font-medium">션북스 설립</p>
              <p className="text-gray-600">새로운 시각의 출판사로 시작</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-24 flex-shrink-0 text-gray-500">2024.04</div>
            <div className="flex-grow">
              <p className="text-gray-900 font-medium">첫 도서 출간</p>
              <p className="text-gray-600">"미래를 여는 책" 출간</p>
            </div>
          </div>
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">출판팀 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h3 className="text-lg font-semibold text-gray-900">김편집</h3>
            <p className="text-gray-600">편집장</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h3 className="text-lg font-semibold text-gray-900">이기획</h3>
            <p className="text-gray-600">기획자</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
            <h3 className="text-lg font-semibold text-gray-900">박디자인</h3>
            <p className="text-gray-600">디자이너</p>
          </div>
        </div>
      </section>
    </div>
  );
} 