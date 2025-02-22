import { ExeTemplate } from '@/features/os';
import { APPS } from '@/features/os/constants';

export const ReadmeExe = () => {
  return (
    <ExeTemplate appName={APPS.readme}>
      <div>Text</div>
    </ExeTemplate>
  );
};
