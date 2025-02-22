import { ExeTemplate } from '@/features/os';
import { APPS } from '@/features/os/constants';

export const HyperCubeExe = () => {
  return (
    <ExeTemplate appName={APPS.hypercube}>
      <>Cube</>
    </ExeTemplate>
  );
};
