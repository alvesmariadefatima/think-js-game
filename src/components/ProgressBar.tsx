interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
  color?: "blue" | "green" | "purple" | "yellow";
}

export function ProgressBar({
  current,
  total,
  showLabel = true,
  color = "blue",
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((current / total) * 100), 100);

  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progresso</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${colors[color]} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
