import StoryItem from "./StoryItem";
import type { Story } from "../types/story";

export type StoryListProps = {
  stories: Story[];
};

const StoryList = (props: StoryListProps) => {
  const { stories } = props;

  return (
    <div className="flex flex-col">
      {stories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
