import reaction from "./assets/icon-reaction.svg";
import memory from "./assets/icon-memory.svg";
import verbal from "./assets/icon-verbal.svg";
import visual from "./assets/icon-visual.svg";

export const stats = [
  {
    id: 1,
    category: "Reaction",
    score: 80,
    icon: reaction,
    bgColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555",
    txtColor: "#FF5555",
  },
  {
    id: 2,
    category: "Memory",
    score: 92,
    icon: memory,
    bgColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E",
    txtColor: "#FFB21E",
  },
  {
    id: 3,
    category: "Verbal",
    score: 61,
    icon: verbal,
    bgColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F",
    txtColor: "#00BB8F",
  },
  {
    id: 4,
    category: "Visual",
    score: 72,
    icon: visual,
    bgColor:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6",
    txtColor: "#1125D6",
  },
];
