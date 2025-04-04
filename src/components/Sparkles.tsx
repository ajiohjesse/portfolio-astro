import useRandomInterval from "@/hooks/useRandomInterval";
import { SparkleStar } from "@/icons/SparkleStar";
import { cn, randomInt } from "@/lib/utils";
import { useState } from "react";

// Default color is a bright yellow
const DEFAULT_COLOR = "hsl(50deg, 100%, 100%)";

const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(randomInt(10000, 99999)) + Date.now(),
    createdAt: Date.now(),
    color,
    size: randomInt(6, 12),
    style: {
      // Pick a random spot in the available space
      top: randomInt(0, 100) + "%",
      left: randomInt(0, 100) + "%",
      // Float sparkles above sibling content
      zIndex: 2,
    },
  };
};

type Sparkle = ReturnType<typeof generateSparkle>;

const Sparkles = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useRandomInterval(
    () => {
      const now = Date.now();
      // Create a new sparkle
      const sparkle = generateSparkle();
      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 4000;
      });
      // Include our new sparkle
      nextSparkles.push(sparkle);
      // Make it so!
      setSparkles(nextSparkles);
    },
    200,
    500,
  );

  return (
    <span className={cn("relative inline-block leading-none", className)}>
      {sparkles.map((sparkle) => (
        <SparkleStar
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong className="relative z-[1] inline-block">{children}</strong>
    </span>
  );
};

export default Sparkles;
