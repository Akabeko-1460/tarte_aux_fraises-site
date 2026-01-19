"use client";

import { useState } from "react";
import {
  Heart,
  Instagram,
  Twitter,
  Mail,
  ChevronRight,
  Cake,
  Coffee,
  Star,
} from "lucide-react";

export default function Home() {
  // 状態管理
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "ア・ラ・カンパーニュ：宝石のようないちごタルト",
      excerpt:
        "神戸発祥の人気パティスリー「ア・ラ・カンパーニュ」。フレッシュないちごがたっぷり乗った美しいタルトの魅力をお伝えします。",
      image: "/images/a_la_campagne1_1.JPG",
      category: "Review",
      date: "2024.03.15",
      likes: 124,
    },
    {
      id: 2,
      title: "キル フェ ボン：季節のフルーツタルト",
      excerpt:
        "静岡発のタルト専門店「キル フェ ボン」。新鮮な果物をふんだんに使った、まるでアート作品のようなタルトをご紹介。",
      image: "/images/quil_fait_bon1_1.JPG",
      category: "Cafe",
      date: "2024.03.10",
      likes: 89,
    },
    {
      id: 3,
      title: "デリス タルトカフェで見つけた絶品タルト",
      excerpt:
        "デリス タルト＆カフェの季節限定いちごタルト。サクサクのタルト生地と濃厚なカスタードの相性が抜群です。",
      image: "/images/delices_tarte_cafe1_1.JPG",
      category: "Cafe",
      date: "2024.03.05",
      likes: 210,
    },
    {
      id: 4,
      title: "パティスリー トゥーストゥースの魅力",
      excerpt:
        "神戸を代表するパティスリー「TOOTH TOOTH」。洗練されたデザインと本格的な味わいのタルトをレビュー。",
      image: "/images/patisserie_tooth_tooth1_1.JPG",
      category: "Review",
      date: "2024.02.28",
      likes: 156,
    },
    {
      id: 5,
      title: "トルタイシオ：隠れた名店のタルト",
      excerpt:
        "地元で愛される「トルタイシオ」のいちごタルト。丁寧に作られた一品の魅力をお届けします。",
      image: "/images/torutaishio1_1.JPG",
      category: "Review",
      date: "2024.02.20",
      likes: 95,
    },
    {
      id: 6,
      title: "タルト生地をサクサクにする裏技",
      excerpt:
        "時間が経ってもべちゃっとしない。プロが教える「空焼き」のひと手間について。",
      image: "/images/a_la_campagne2_1.JPG",
      category: "Recipe",
      date: "2024.02.14",
      likes: 178,
    },
  ]);

  // カテゴリフィルタリング
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  // いいね機能
  const toggleLike = (id: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      }),
    );
  };

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

            <h1 className="font-script text-5xl md:text-7xl text-rose-500 mb-6 drop-shadow-sm">
              Sweet & Sour Days
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              甘酸っぱい毎日に、とびきりのご褒美を。
              <br />
              いちごタルトを愛するすべての人へ贈る、ライフスタイルブログ。
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {["Recipe", "Review", "Cafe", "Lifestyle"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 border-2 rounded-full text-sm font-medium shadow-sm transition-all ${
                    activeCategory === cat
                      ? "bg-rose-100 border-rose-300 text-rose-500"
                      : "bg-white border-rose-100 text-rose-400 hover:bg-rose-50 hover:border-rose-300"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  #{cat}
                </button>
              ))}
              <button
                className={`px-4 py-2 border-2 rounded-full text-sm font-medium shadow-sm transition-all ${
                  activeCategory === "All"
                    ? "bg-rose-200 border-rose-300 text-rose-600"
                    : "bg-rose-100 border-rose-200 text-rose-500 hover:bg-rose-200"
                }`}
                onClick={() => setActiveCategory("All")}
              >
                All Posts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <div className="flex items-center space-x-2 text-amber-500 mb-2">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              週末のご褒美：究極のいちごタルト作り
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              今週末は、少し手間をかけて特別なタルトを作りませんか？
              アーモンドクリームの香ばしさと、フレッシュないちごの酸味が織りなすハーモニー。
              初心者でも失敗しない、とっておきのレシピを公開しました。
            </p>
            <button className="flex items-center text-rose-500 font-bold hover:text-rose-600 transition-colors group">
              続きを読む{" "}
              <ChevronRight
                className="ml-1 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
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
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rose-500">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-gray-400 mb-2 font-medium">
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-rose-500 transition-colors leading-tight">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <button className="text-sm font-medium text-rose-500 hover:text-rose-600">
                    Read More
                  </button>
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center space-x-1 text-gray-400 hover:text-rose-500 transition-colors group"
                  >
                    <Heart
                      size={18}
                      className={`transition-transform duration-300 group-hover:scale-125 ${post.likes % 2 !== 0 ? "fill-rose-500 text-rose-500" : ""}`}
                    />
                    <span className="text-xs">{post.likes}</span>
                  </button>
                </div>
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
      </main>

      {/* Newsletter Section */}
      <section className="bg-rose-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-rose-800 mb-4">Stay Sweet!</h2>
          <p className="text-rose-700 mb-8">
            最新のレシピやカフェ情報をニュースレターでお届けします。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-6 py-3 rounded-full border-2 border-white focus:outline-none focus:border-rose-300 bg-white/80 w-full text-gray-700 placeholder-rose-300"
            />
            <button className="px-8 py-3 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 transition-transform hover:scale-105 shadow-lg shadow-rose-200">
              Join
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-rose-100 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <span className="font-script text-2xl text-rose-500 mb-4 block">
                Strawberry Life
              </span>
              <p className="text-sm text-gray-500 leading-relaxed">
                いちごタルトのある幸せな日常を綴るブログ。
                <br />
                甘い香りに包まれた時間をお届けします。
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-rose-500 transition-colors">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500 transition-colors">
                    Cafe Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500 transition-colors">
                    Merchandise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500 transition-colors">
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-rose-500 transition-colors">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-rose-50 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 Strawberry Tart Life. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
