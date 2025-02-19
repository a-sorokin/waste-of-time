import { useCallback, useState } from 'react';
import { LinuxBoot } from '@/features/booting';
import { Donut } from '@/features/donut';

export const App = () => {
  const [isBootComplete, setIsBootComplete] = useState(false);

  const setBootComplete = useCallback(() => {
    setIsBootComplete(true);
  }, []);

  return <div>{isBootComplete ? <Donut /> : <LinuxBoot onComplete={setBootComplete} />}</div>;
};
