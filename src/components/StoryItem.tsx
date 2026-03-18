import type { Story } from "../types/story";

type StoryItemProps = {
  story: Story;
};

const StoryItem = ({ story }: StoryItemProps) => {
  return (
    <a
      href={story.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-1 px-4 py-3 border-b border-white/10 cursor-pointer hover:bg-white/10 transition-colors duration-150"
    >
      <span className="text-sm font-medium text-white/80 leading-snug group-hover:text-orange-400 transition-colors duration-150">
        {story.title}
      </span>
      <div className="flex items-center gap-2 text-xs text-white/30">
        <span>by {story.by}</span>
        <span>·</span>
        <span className="truncate max-w-[200px]">
          {new URL(story.url).hostname}
        </span>
      </div>
    </a>
  );
};

export default StoryItem;
