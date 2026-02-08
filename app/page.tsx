"use client";

import { useState } from "react";
import { Cake, Coffee, Star } from "lucide-react";

export default function Home() {
  // 状態管理
  const [activeTab, setActiveTab] = useState<"AllPosts" | "About">("AllPosts");
  const posts = [
    {
      id: 1,
      title: "ア・ラ・カンパーニュ：サクサクタルト生地の裏技",
      excerpt:
        "神戸発祥の人気パティスリー「ア・ラ・カンパーニュ」。時間が経ってもべちゃっとしない、プロが教える「空焼き」のひと手間をご紹介。",
      image: "/images/a_la_campagne2_1.JPG",
      category: "Recipe",
      date: "2026.01.12",
      likes: 178,
    },
    {
      id: 2,
      title: "デリス タルト＆カフェ：季節限定いちごタルト",
      excerpt:
        "人気カフェ「デリス タルト＆カフェ」。サクサクのタルト生地と濃厚なカスタードの相性が抜群の絶品タルトをご紹介。",
      image: "/images/delices_tarte_cafe1_1.JPG",
      category: "Cafe",
      date: "2024.09.14",
      likes: 210,
    },
    {
      id: 3,
      title: "トルタイシオ：隠れた名店のタルト",
      excerpt:
        "地元で愛される「トルタイシオ」のいちごタルト。丁寧に作られた一品の魅力をお届けします。",
      image: "/images/torutaishio1_1.JPG",
      category: "Review",
      date: "2024.02.10",
      likes: 95,
    },
    {
      id: 4,
      title: "キル フェ ボン：季節のフルーツタルト",
      excerpt:
        "静岡発のタルト専門店「キル フェ ボン」。新鮮な果物をふんだんに使った、まるでアート作品のようなタルトをご紹介。",
      image: "/images/quil_fait_bon1_1.JPG",
      category: "Cafe",
      date: "2024.02.05",
      likes: 89,
    },
    {
      id: 5,
      title: "パティスリー トゥーストゥース：洗練されたタルト",
      excerpt:
        "神戸を代表するパティスリー「TOOTH TOOTH」。洗練されたデザインと本格的な味わいのタルトをご紹介。",
      image: "/images/patisserie_tooth_tooth1_1.JPG",
      category: "Review",
      date: "2023.12.16",
      likes: 156,
    },
    {
      id: 6,
      title: "ア・ラ・カンパーニュ：宝石のようないちごタルト",
      excerpt:
        "神戸発祥の人気パティスリー「ア・ラ・カンパーニュ」。フレッシュないちごがたっぷり乗った美しいタルトの魅力をお伝えします。",
      image: "/images/a_la_campagne1_1.JPG",
      category: "Review",
      date: "2023.11.02",
      likes: 124,
    },
  ];

  // 全投稿を表示
  const filteredPosts = posts;

  return (
    <div className="min-h-screen bg-[#FFF5F5] text-[#4A4A4A]">
      {/* Hero Section */}
      <div className="pb-12 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center relative">
            <div className="absolute top-0 left-1/4 animate-gentle-bounce opacity-20 hidden md:block">
              <Cake size={48} className="text-rose-300" />
            </div>
            <div className="absolute bottom-0 right-1/4 animate-gentle-bounce-slow opacity-20 hidden md:block">
              <Coffee size={48} className="text-amber-300" />
            </div>

            <h1 className="font-script text-5xl md:text-7xl text-rose-500 mb-12 drop-shadow-sm">
              StrawberryLife
            </h1>
            <div className="flex justify-center gap-4">
              <button
                className={`px-8 py-3 border-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 ${
                  activeTab === "AllPosts"
                    ? "bg-gradient-to-r from-rose-400 to-rose-500 border-rose-400 text-white shadow-rose-200"
                    : "bg-white border-rose-200 text-rose-400 hover:bg-rose-50 hover:border-rose-300 hover:shadow-lg"
                }`}
                onClick={() => setActiveTab("AllPosts")}
              >
                All Posts
              </button>
              <button
                className={`px-8 py-3 border-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 ${
                  activeTab === "About"
                    ? "bg-gradient-to-r from-rose-400 to-rose-500 border-rose-400 text-white shadow-rose-200"
                    : "bg-white border-rose-200 text-rose-400 hover:bg-rose-50 hover:border-rose-300 hover:shadow-lg"
                }`}
                onClick={() => setActiveTab("About")}
              >
                About
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === "AllPosts" ? (
          <>
            {/* Featured / Introduction */}
            <div className="mb-16 bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 flex flex-col md:flex-row items-center gap-8 border border-rose-50">
              <div className="w-full md:w-1/2 h-64 md:h-80 relative overflow-hidden rounded-2xl group">
                <img
                  src="/images/quil_fait_bon1_2.JPG"
                  alt="Featured Tart"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-rose-500 uppercase tracking-wider">
                  New Arrival
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  キル フェ ボン：究極のいちごタルト
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  静岡発のタルト専門店「キル フェ
                  ボン」。今週末は、少し手間をかけて特別なタルトを作りませんか？アーモンドクリームの香ばしさと、フレッシュないちごの酸味が織りなすハーモニーをお届けします。
                </p>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="flex items-center mb-8">
              <div className="h-8 w-1 bg-rose-400 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-800">Latest Posts</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-rose-100/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 transform hover:-translate-y-2 border border-rose-50 flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm text-gray-400 mb-2 font-medium">
                      {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-rose-500 transition-colors leading-tight">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-rose-200">
                <Cake size={48} className="mx-auto text-rose-200 mb-4" />
                <p className="text-gray-500">
                  記事が見つかりませんでした。
                  <br />
                  他のカテゴリを試してみてください。
                </p>
              </div>
            )}
          </>
        ) : (
          /* About Section - タルトフレーズの歴史 */
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/50 border border-rose-50">
            <div className="text-center mb-12">
              <h2 className="font-script text-4xl md:text-5xl text-rose-500 mb-4">
                Tarte aux Fraises
              </h2>
              <p className="text-gray-600 text-lg">いちごタルトの歴史</p>
            </div>

            {/* メインビジュアル */}
            <div className="mb-16 relative overflow-hidden rounded-3xl shadow-2xl shadow-rose-200/50">
              <img
                src="/images/strawberry_tart_vintage.png"
                alt="Tarte aux Fraises - Paris"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="font-script text-3xl md:text-4xl drop-shadow-lg">
                  La douceur de la vie
                </p>
                <p className="text-rose-100 mt-2">人生の甘美なひととき</p>
              </div>
            </div>

            {/* タイムライン */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200 hidden md:block"></div>

              {/* 起源 */}
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 md:pr-12">
                  <div className="bg-rose-50 rounded-2xl p-6 inline-block">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      フランス宮廷での誕生
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      いちごタルトは18世紀のフランス宮廷で特に人気を博したとされます。貴族や上流階級の人々は、特別な日にこのタルトをふるまうことで、ゲストへのもてなしを表現していました。華やかな席を彩る重要な役割を果たし、社会的地位や文化的背景を反映したスイーツとして認識されるようになりました。
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-rose-400 rounded-full items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/tarte_borned.png"
                      alt="フランス宮廷でのタルト"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* いちごの魅力 */}
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 md:pr-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/fresh_strawberries.png"
                      alt="新鮮ないちご"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-rose-400 rounded-full items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="bg-rose-50 rounded-2xl p-6 inline-block">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      いちごの魅力
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      フランスでは、いちごは春から夏にかけて旬を迎え、特別に栽培される品種も多く存在します。フレッシュないちごの鮮やかな赤色は視覚的にも楽しませ、甘酸っぱさが口の中に広がります。季節感を醸し出す代表的なデザートとして位置付けられています。
                    </p>
                  </div>
                </div>
              </div>

              {/* タルトの特徴 */}
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 md:pr-12">
                  <div className="bg-rose-50 rounded-2xl p-6 inline-block">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      素材が織りなすハーモニー
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      いちごタルトは、サクサクとしたタルト生地（パート・シュクレ）、甘酸っぱい新鮮ないちご、そして香り豊かなカスタードクリーム（クレーム・パティシエール）で構成されています。バターの風味がしっかりと感じられる生地は、口の中でほろりと崩れる食感を楽しませてくれます。
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-rose-400 rounded-full items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/french_patisserie_history.png"
                      alt="パティスリーの技法"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 現代のパティスリー */}
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 md:pr-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/gototartetojapan.png"
                      alt="現代のパティスリー"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-rose-400 rounded-full items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="bg-rose-50 rounded-2xl p-6 inline-block">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      美しさへのこだわり
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      フランス料理のデザートは、見た目の美しさを重要視する傾向があり、いちごタルトも美しい色彩と飾りつけが施されます。表面に艶やかなジャムやゼリーをトッピングすることで、視覚的にも楽しめる芸術作品のような存在感を放っています。
                    </p>
                  </div>
                </div>
              </div>

              {/* 愛され続けるスイーツ */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 md:pr-12">
                  <div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl p-6 inline-block border-2 border-rose-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      歴史と文化を語る一品
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      いちごタルトは単なるデザートではなく、フランスの文化や歴史を語る一品です。豊かな歴史とともに今もなお愛され続け、一口味わうことでそこに込められた背景やストーリーを感じ取ることができます。美しさと豊かな味わいを兼ね備えたいちごタルトは、これからも多くの人々を魅了し続けることでしょう。
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full items-center justify-center z-10 shadow-lg">
                  <Star size={20} className="text-white" fill="currentColor" />
                </div>
                <div className="w-full md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/tartefraises.jpg"
                      alt="現代のタルトフレーズ"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-rose-100 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4">
          <span className="font-script text-2xl text-rose-500 mb-4 block">
            Strawberry Life
          </span>
          <p className="text-sm text-gray-500 leading-relaxed">
            いちごタルトのある幸せな日常を綴るブログ。
            <br />
            甘酸っぱい香りに包まれるようなひとときをお届けします。
          </p>
        </div>
      </footer>
    </div>
  );
}
