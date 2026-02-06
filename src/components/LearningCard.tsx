import { Bookmark, User } from 'lucide-react';

interface LearningCardProps {
  image: string;
  title: string;
  instructor: string;
  tags: string[];
  className?: string;
}

export function LearningCard({ image, title, instructor, tags, className = '' }: LearningCardProps) {
  return (
    <div className={`learning-card w-full ${className}`}>
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-plynn-text-primary mb-3">
          {title}
        </h3>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-plynn-accent/20 flex items-center justify-center">
            <User className="w-4 h-4 text-plynn-accent" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-plynn-text-primary font-medium">{instructor}</p>
            <p className="text-xs text-plynn-text-secondary">Instructor</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
            <Bookmark className="w-4 h-4 text-plynn-text-secondary" />
          </button>
        </div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-plynn-text-secondary border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
