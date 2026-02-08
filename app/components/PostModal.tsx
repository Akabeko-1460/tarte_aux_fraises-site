import Image from "next/image";
import { X } from "lucide-react";

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

interface PostModalProps {
  post: Post;
  onClose: () => void;
}

export function PostModal({ post, onClose }: PostModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Close Button */}
        <div className="relative">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur hover:bg-white rounded-full p-2 transition-colors shadow-lg"
          >
            <X size={24} className="text-gray-700" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="text-sm font-medium opacity-90 mb-2">
              {post.date}
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            {post.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}
