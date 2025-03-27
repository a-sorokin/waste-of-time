import styles from './AstExe.module.scss';
import { ExeTemplate } from '@/features/os';
import { APPS } from '@/features/os/constants';

export const AstExe = () => {
  return (
    <ExeTemplate appName={APPS.AST}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className={styles.ast}>
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2c3e50" />
            <stop offset="100%" stopColor="#1a252f" />
          </linearGradient>
        </defs>

        <g stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round">
          <line x1="32" y1="20" x2="32" y2="30" />

          <line x1="32" y1="30" x2="22" y2="40" />
          <line x1="22" y1="40" x2="16" y2="50" />

          <line x1="32" y1="30" x2="42" y2="40" />
          <line x1="42" y1="40" x2="48" y2="50" />

          <circle cx="32" cy="20" r="3" fill="#4a90e2" />
          <circle cx="22" cy="40" r="3" fill="#4a90e2" />
          <circle cx="42" cy="40" r="3" fill="#4a90e2" />
          <circle cx="16" cy="50" r="2.5" fill="#4a90e2" />
          <circle cx="48" cy="50" r="2.5" fill="#4a90e2" />
        </g>

        <text x="32" y="58" textAnchor="middle" fill="white" fontWeight="bold" fontSize="8">
          AST
        </text>
      </svg>
    </ExeTemplate>
  );
};
