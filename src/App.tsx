import { useCallback, useEffect, useState } from 'react';
import { ScreenSaver } from '@/components/ScreenSaver';
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
    <>
      <ScreenSaver isBootComplete={isBootComplete} onComplete={setBootComplete} />
      {runOS ? <Os /> : null}
    </>
  );
};
