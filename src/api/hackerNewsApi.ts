import type { Story } from "../types/story";

const HN_URL = "https://hacker-news.firebaseio.com/v0";

// Fetch amount of top stores
export const fetchTopStoryIds = async (amount: number): Promise<number[]> => {
  const res = await fetch(`${HN_URL}/topstories.json`);
  const topStoriesIds: number[] = await res.json();
  const reducedIds = topStoriesIds.slice(0, amount);

  return reducedIds;
};

// Fetch story
export const fetchStory = async (id: number): Promise<Story> => {
  const res = await fetch(`${HN_URL}/item/${id}.json`);
  const story: Story = await res.json();

  return story;
};
