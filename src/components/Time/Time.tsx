import { CalendarIcon } from "../Icons/CalendarIcon";

export function Time({ time, size = 14 }: { time: string; size?: number }) {
  return (
    <div className="flex text-gray-600 gap-[6px] items-center ml-[2px]">
      <CalendarIcon />
      {size == 14 ? (
        <span className="italic text-sm">{time}</span>
      ) : (
        <span className="italic text-md">{time}</span>
      )}
    </div>
  );
}
