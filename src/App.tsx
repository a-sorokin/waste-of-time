import { Layout } from '@/components/Layout/Layout';
import { useInitListeners } from '@/initHooks/useInitListeners';
import { useRequestFirstRun } from '@/initHooks/useRequestFirstRun';
import { useRequestIpcData } from '@/initHooks/useRequestIpcData';
import { useRequestSettings } from '@/initHooks/useRequestSettings';

export const App = () => {
  useInitListeners();
  useRequestIpcData();
  useRequestSettings();
  useRequestFirstRun();

  return <Layout />;
};
