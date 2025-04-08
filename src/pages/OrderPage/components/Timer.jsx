import { IconClock } from '@/assets/icons';
import { useTimer } from '@/hooks/useTimer';
import { formatTime } from '@/utils';
import { TIMER_DURATION } from '@/constants';

const Timer = () => {
  const { hours, minutes, seconds } = useTimer(TIMER_DURATION);
  return (
    <div className="flex items-center gap-4.5 mb-7 text-dark-blue">
      <IconClock />
      <span className="font-medium text-2xl">
        {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}
      </span>
    </div>
  );
};

export { Timer };
