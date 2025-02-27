import { FC } from 'react';
import { LinuxBoot } from '@/features/booting';
import { Donut } from '@/features/donut';
import { DEV_MODE } from '@e/constants';

type Props = {
  isBootComplete: boolean;
  onComplete: () => void;
};

export const ScreenSaver: FC<Props> = ({ isBootComplete, onComplete }) => {
  if (DEV_MODE) return null;
  return <>{isBootComplete ? <Donut /> : <LinuxBoot onComplete={onComplete} />}</>;
};
