import { useState } from "preact/hooks";

export default function FootballExplosion() {
  const [emojis, setEmojis] = useState([]);

  const handleClick = () => {
    const newEmojis = Array.from({ length: 30 }, () => ({
      id: Math.random(),
      emoji: "🏈",
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      animationDuration: Math.random() * 2 + 1 + "s",
    }));
    setEmojis(newEmojis);

    // Remove emojis after animation completes
    setTimeout(() => {
      setEmojis([]);
    }, 2000); // Adjust to match the animation duration
  };

  return (
    <div class="">
      <div class="grid grid-cols-7 items-center my-8">
        <div class="col-span-3">
          <hr class="border-b-1 border-gray-900/10" />
        </div>
        <button class="text-center text-2xl" onClick={handleClick}>
          🏈
        </button>
        <div class="col-span-3">
          <hr class="border-b-1 border-gray-900/10" />
        </div>
      </div>

      {/* Render football emojis */}
      <div class="absolute inset-0 pointer-events-none">
        {emojis.map(({ id, emoji, left, top, animationDuration }) => (
          <span
            key={id}
            class="absolute text-4xl animate-fly"
            style={{
              left,
              top,
              animationDuration,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
