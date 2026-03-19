import { useState } from "react";
import StoryList from "../src/components/StoryList";
import { useStories } from "./hooks/useStories";
import Button from "./components/Button";

function App() {
  const [refresh, setRefresh] = useState(0);
  const [amount, _setAmount] = useState(10);
  const { stories, isFetching, progress } = useStories(amount, refresh);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="content-wrap">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        </div>

        <h1 className="relative text-3xl font-black tracking-tighter mb-6 text-purple-500 uppercase">
          Hacker news
        </h1>

        <div className="relative flex flex-col md:flex-row gap-6 md:h-[calc(100vh-8rem)]">
          <div className="w-full md:w-2/5 flex flex-col p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-white/5">
            <div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden flex flex-col">
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                  Top {amount} Stories
                </span>
                {isFetching && (
                  <span className="text-xs text-orange-400 animate-pulse">
                    Fetching...
                  </span>
                )}
              </div>
              <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <StoryList stories={stories} />
              </div>
            </div>
          </div>

          <div className="flex-1 p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-white/5">
            <div className="h-full content-center rounded-2xl bg-white/5 backdrop-blur-md flex flex-wrap items-center justify-center gap-5 p-6">
              <Button label="Clickable" clickable />
              <Button variant="disabled" label="Disabled" />
              <Button label="Boring shadow" shadow="boring" />
              <Button label="Exciting shadow!" shadow="exciting" />
              <Button
                onClick={() => setRefresh((r) => r + 1)}
                clickable
                variant="secondary"
                label={isFetching ? `Loading... ${progress}%` : "Fetch data"}
                progress={progress}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
