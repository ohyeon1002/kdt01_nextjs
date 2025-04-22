interface BallProps {
  value: number;
  colorTag: number;
}

export default function TailBall({ value, colorTag }: BallProps) {
  const colors: string[] = [
    "bg-amber-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-gray-400",
    "bg-green-400",
  ];
  return (
    <div
      className={`w-16 h-16 rounded-full ${colors[colorTag]}
                    flex justify-center items-center
                    text-white text-2xl font-bold
                    m-1.5`}
    >
      {value}
    </div>
  );
}
