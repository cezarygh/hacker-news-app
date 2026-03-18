import { useEffect, useState } from "react";
import type { Story } from "../types/story";
import { fetchStory, fetchTopStoryIds } from "../api/hackerNewsApi";

export const useStories = (amount: number) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchTopStories = async () => {
      setIsFetching(true);

      const ids = await fetchTopStoryIds(amount);
      const stories: Story[] = [];

      for (const id of ids) {
        const story = await fetchStory(id);
        stories.push(story);
      }

      setStories(stories);
      setIsFetching(false);
    };

    fetchTopStories();
  }, [amount]);

  return { isFetching, stories };
};
