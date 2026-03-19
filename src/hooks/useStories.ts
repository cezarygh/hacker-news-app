import { useEffect, useState } from "react";
import type { Story } from "../types/story";
import { fetchStory, fetchTopStoryIds } from "../api/hackerNewsApi";

export const useStories = (amount: number, refresh: number = 0) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const fetchTopStories = async () => {
      setIsFetching(true);
      setProgress(1);

      const ids = await fetchTopStoryIds(amount);
      const stories: Story[] = [];

      for (let i = 0; i < ids.length; i++) {
        const story = await fetchStory(ids[i]);
        stories.push(story);
        setProgress(1 + Math.floor(((i + 1) / ids.length) * 99));
      }

      setStories(stories);
      setProgress(100);
      setIsFetching(false);
    };

    fetchTopStories();
  }, [amount, refresh]);

  return { isFetching, stories, progress };
};
