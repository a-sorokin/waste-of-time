import { useCallback, useState } from 'react';
import { LinuxBoot } from '@/features/booting';
import { Donut } from '@/features/donut';
import { Os } from '@/features/os';

export const App = () => {
  const [isBootComplete, setIsBootComplete] = useState(true);

  const setBootComplete = useCallback(() => {
    setIsBootComplete(true);
  }, []);

  return (
    <div>
      {isBootComplete ? <Donut /> : <LinuxBoot onComplete={setBootComplete} />}
      <Os isBootComplete={isBootComplete} />
    </div>
  );
};
