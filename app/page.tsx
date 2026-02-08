"use client";

import { useState } from "react";
import Image from "next/image";
import { Cake, Coffee, Star } from "lucide-react";
import { Post, PostCard, PostModal } from "./components";

function tabClassName(isActive: boolean): string {
  return `px-8 py-3 border-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 ${
    isActive
      ? "bg-gradient-to-r from-rose-400 to-rose-500 border-rose-400 text-white shadow-rose-200"
      : "bg-white border-rose-200 text-rose-400 hover:bg-rose-50 hover:border-rose-300 hover:shadow-lg"
  }`;
}

export default function Home() {
  // 状態管理
  const [activeTab, setActiveTab] = useState<"AllPosts" | "About">("AllPosts");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const posts: Post[] = [
    {
      id: 1,
      title: "ア・ラ・カンパーニュ：南仏薫るいちごのタルト",
      excerpt:
        "バターが香るサクサクの生地に、手炊きで仕立てたなめらかなカスタードクリーム。その上にどっさり盛られた完熟いちごの甘酸っぱさが口いっぱいに広がります。南仏の田舎をイメージしたお店の雰囲気も心地よく、つい長居してしまいました。",
      image: "/images/a_la_campagne2_1.JPG",
      date: "2026.01.12",
    },
    {
      id: 2,
      title: "デリス タルト＆カフェ：ほろりと溶ける至福のいちごタルト",
      excerpt:
        "北海道産小麦粉『雪星』と発酵バターで焼き上げた生地は、口に入れた瞬間ほろりと溶ける繊細さ。その上にたっぷり盛られた完熟いちごは甘みが濃く、カスタードとの相性も抜群でした。",
      image: "/images/delices_tarte_cafe1_1.JPG",
      date: "2024.09.14",
    },
    {
      id: 3,
      title: "トルタイシオ：グラスフェッドバター香る宝石箱タルト",
      excerpt:
        "グラスフェッドバターを100%使用した生地は、風味が濃厚でコクのある味わい。ぎっしり並んだ大粒いちごは宝石箱のように美しく、甘いカスタードとの組み合わせが絶妙です。手頃な価格で本格的なタルトが楽しめるのも嬉しいポイント。",
      image: "/images/torutaishio1_1.JPG",
      date: "2024.02.10",
    },
    {
      id: 4,
      title: "キル フェ ボン：あまおうと紅ほっぺの贅沢タルト",
      excerpt:
        "あまおうや紅ほっぺなど厳選された品種のいちごが、タルトの上にぎゅっと立てて並べられた姿は圧巻。しっかり焼き込まれた厚めの生地と、ふわっと軽いディプロマットクリームが果実の甘さを引き立てます。まさに\u201C食べるアート\u201Dでした。",
      image: "/images/quil_fait_bon1_1.JPG",
      date: "2024.02.05",
    },
    {
      id: 5,
      title: "パティスリー トゥーストゥース：神戸の正統派いちごタルト",
      excerpt:
        "薄く繊細に焼き上げた生地の中にはアーモンドクリームの層が隠れていて、バニラが豊かに香るカスタードとの重なりに奥行きを感じます。いちごの配置も端正で、艶やかなナパージュが宝石のような輝きを添えていました。さすが神戸の正統派パティスリーです。",
      image: "/images/patisserie_tooth_tooth1_1.JPG",
      date: "2023.12.16",
    },
    {
      id: 6,
      title: "ア・ラ・カンパーニュ：いちごミルク仕立てのタルト・オーレ",
      excerpt:
        "いちごムースとホワイトチョコを合わせたクリームがどこを食べてもいちごミルクのような味わい。中にはフレッシュいちごが忍ばせてあり、食感のアクセントになっています。見た目もかわいらしく、贈り物にもぴったりの一品です。",
      image: "/images/a_la_campagne1_1.JPG",
      date: "2023.11.02",
    },
  ];

  return (
    <div className="min-h-screen">
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
                className={tabClassName(activeTab === "AllPosts")}
                onClick={() => setActiveTab("AllPosts")}
              >
                All Posts
              </button>
              <button
                className={tabClassName(activeTab === "About")}
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
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-rose-500 uppercase tracking-wider">
                  New Arrival
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="flex items-center mb-8">
              <div className="h-8 w-1 bg-rose-400 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-800">Latest Posts</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onClick={() => setSelectedPost(post)}
                />
              ))}
            </div>
          </>
        ) : (
          /* About Section - いちごタルトの魅力を探る：歴史と発祥 */
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/50 border border-rose-50">
            <div className="text-center mb-12">
              <h2 className="font-script text-4xl md:text-5xl text-rose-500 mb-4">
                Tarte aux Fraises
              </h2>
              <p className="text-gray-600 text-lg">
                いちごタルトの魅力を探る：歴史と発祥
              </p>
            </div>

            {/* メインビジュアル */}
            <div className="mb-16 relative overflow-hidden rounded-3xl shadow-2xl shadow-rose-200/50 h-64 md:h-96">
              <Image
                src="/images/unsplash-freetarte.jpg"
                alt="Tarte aux Fraises"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="font-script text-3xl md:text-4xl drop-shadow-lg">
                  La douceur de la vie
                </p>
                <p className="text-rose-100 mt-2">
                  フランス発祥の美しいお菓子、その歴史をたどる
                </p>
              </div>
            </div>

            {/* タイムライン */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200 hidden md:block"></div>

              {/* 1. いちごとフランスの出会い */}
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-stretch gap-8">
                <div className="w-full md:w-1/2 md:pr-12 flex">
                  <div className="bg-rose-50 rounded-2xl p-6 w-full">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      いちごとフランスの出会い
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      1714年、フランス軍士官フレジエが南米チリから大粒のチリイチゴを5株持ち帰りました。この品種がヨーロッパ在来種と交配し、現在の栽培いちご（Fragaria
                      ×
                      ananassa）が誕生。それまで小さな野いちごしか知らなかったフランスに、タルトを飾れる大粒いちごが登場したのです。
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-rose-400 rounded-full items-center justify-center z-10 shadow-lg shrink-0 self-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative h-full min-h-[12rem]">
                    <Image
                      src="/images/about_sailing_ship.jpg"
                      alt="フレジエの航海"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2. フランス菓子の技法の確立 */}
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-stretch gap-8">
                <div className="w-full md:w-1/2 md:pr-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative h-full min-h-[12rem]">
                    <Image
                      src="/images/about_pastry_display.jpg"
                      alt="パティスリーのショーケース"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-rose-400 rounded-full items-center justify-center z-10 shadow-lg shrink-0 self-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 flex">
                  <div className="bg-rose-50 rounded-2xl p-6 w-full">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      フランス菓子の技法の確立
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      17世紀末、料理人マシアロがカスタードクリームの原型を記録。19世紀にはカレームが菓子を芸術に高め、エスコフィエがパティシエを専門職として確立しました。この流れの中でパート・シュクレ（甘いタルト生地）も洗練されていきます。
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. いちごタルトの完成 */}
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-stretch gap-8">
                <div className="w-full md:w-1/2 md:pr-12 flex">
                  <div className="bg-rose-50 rounded-2xl p-6 w-full">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      いちごタルトの完成
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      パート・シュクレにカスタードを敷き、いちごを並べる古典的スタイルが確立したのは19世紀後半。大粒いちごの品種改良、菓子技法の成熟、パティスリー文化の広がり――これらが揃い、いちごタルトは春のショーケースを飾る代表的なデザートになりました。
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-rose-400 rounded-full items-center justify-center z-10 shadow-lg shrink-0 self-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative h-full min-h-[12rem]">
                    <Image
                      src="/images/publicdomain-freetarte.jpg"
                      alt="いちごタルト"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 4. 素材の魅力と美しさへのこだわり */}
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-stretch gap-8">
                <div className="w-full md:w-1/2 md:pr-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative h-full min-h-[12rem]">
                    <Image
                      src="/images/about_fresh_strawberries.jpg"
                      alt="新鮮ないちご"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-rose-400 rounded-full items-center justify-center z-10 shadow-lg shrink-0 self-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 flex">
                  <div className="bg-rose-50 rounded-2xl p-6 w-full">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      素材の魅力と美しさへのこだわり
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      フランスのいちごは4〜7月が旬。甘酸っぱいガリゲットや野いちごの香りを持つマラ・デ・ボワなど、品種ごとの個性がタルトの味を左右します。仕上げのナパージュ（艶出し）が果実に宝石のような輝きを与え、ショーケースを華やかに彩ります。
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. 現代への継承と進化 */}
              <div className="flex flex-col md:flex-row items-stretch gap-8">
                <div className="w-full md:w-1/2 md:pr-12 flex">
                  <div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl p-6 w-full border-2 border-rose-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      現代への継承と進化
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      「お菓子界のピカソ」ピエール・エルメの大胆な味の組み合わせや、セドリック・グロレの本物そっくりなトロンプ・ルイユ――古典の技法は現代のパティシエたちによって進化を続けています。シンプルだからこそ素材と技量がそのまま味に表れる一品です。
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full items-center justify-center z-10 shadow-lg shrink-0 self-center">
                  <Star size={20} className="text-white" fill="currentColor" />
                </div>
                <div className="w-full md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative h-full min-h-[12rem]">
                    <Image
                      src="/images/about_modern_dessert.jpg"
                      alt="現代のデザート"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Post Detail Modal */}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}

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
