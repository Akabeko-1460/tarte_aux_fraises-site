import Image from "next/image";
import type { Post } from "./PostModal";

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
  return (
    <article
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-rose-100/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 transform hover:-translate-y-2 border border-rose-50 flex flex-col h-full cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm text-gray-400 mb-2 font-medium">
          {post.date}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-rose-500 transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}
