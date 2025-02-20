import { useCallback, useEffect, useState } from 'react';
import { LinuxBoot } from '@/features/booting';
import { Donut } from '@/features/donut';
import { Os } from '@/features/os';
import { DEV_MODE } from '@e/constants';

export const App = () => {
  const [isBootComplete, setIsBootComplete] = useState(DEV_MODE);
  const [runOS, setRunOS] = useState(DEV_MODE);

  const setBootComplete = useCallback(() => setIsBootComplete(true), []);

  useEffect(() => {
    if (isBootComplete) setTimeout(() => setRunOS(true), 5000);
  }, [isBootComplete]);

  return (
    <div>
      {isBootComplete ? <Donut /> : <LinuxBoot onComplete={setBootComplete} />}
      {runOS ? <Os /> : null}
    </div>
  );
};
