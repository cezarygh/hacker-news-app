FRONTEND TECHNICAL ASSIGNMENT

Hacker News App + Button Component 

Approach
This app uses hooks to fetch data that calls api
Has a reusble compontent Button.tsx

Application has three main layers
api/hackerNewsApi.ts -> hooks/useStories.ts -> components/StoryList.tsx 

#hackerNewsApi.ts
Inside hackerNewsApi.ts there is a fetchTopStoryIds that gets the IDs of the top 500 Hacker news, slices it to (amount) that is provided through a prop, and stores in (reducedIds)
I also have fetchStory that gets full details of a story by its ID (Which i provide with a prop)

#useStories.ts
Inside hooks folder there is a custom hook useStories.ts that gets the top amount stories from Hacker News and loops through each ID, then fetch full story details for that ID and pushes to stories array and saves it.

#StoryList.tsx
StoryList.tsx takes array of stories and renders it using storyItem.tsx compontent

Future work and trade off
I chose only to fetch 10 and not 500 news. It could be nice with a button that loads more news.

