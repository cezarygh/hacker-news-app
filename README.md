# Hacker News App

A little Hacker News App built with React, TypeScript, and custom hooks.

## Architecture

Application has three layers
hackerNewsApi.ts → useStories.ts → StoryList.tsx

`api/hackerNewsApi.ts`  
fetchTopStoryIds(amount) — fetches the top 500 story IDs from Hacker News and slices down to the requested amount  
fetchStory(id) — fetches full details for a single story by ID

`hooks/useStories.ts`  
Custom hook that takes the top amount stories from Hacker News and loops through each ID, then fetches the full story details for that ID and pushes to stories array and saves it.

`components/StoryList.tsx`  
Receives the stories array and renders each one using StoryItem.tsx.

---

## Reusable Button

`Button.tsx` is a single component that handles multiple states via props:

| Prop | Effect |
|------|--------|
| `variant` | `primary`, `secondary`, or `disabled` styling |
| `clickable` | Enables press animation |
| `shadow` | `boring` (drop shadow) or `exciting` (animated) |
| `progress` | Renders a fill bar from 0–100% |
| `onClick` | Click handler |

---

## Trade-offs and future work

Since it is a small application, I chose to show 10 stories rather than loading all 500 - for the future work i would like to implement a button that incrementally increases the amount of stories displayed.
