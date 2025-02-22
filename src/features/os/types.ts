import { APPS } from '@/features/os/constants';

export type AppsOrder = { [key in APPS]: number };

export type RunningApps = Set<APPS>;
