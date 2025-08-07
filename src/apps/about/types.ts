export interface SystemInfo {
  userAgent: string;
  platform: string;
  language: string;
  languages: readonly string[];
  cookieEnabled: boolean;
  onLine: boolean;
  hardwareConcurrency: number;
  deviceMemory: number;
  maxTouchPoints: number;
  screenWidth: number;
  screenHeight: number;
  colorDepth: number;
  pixelDepth: number;
  timezone: string;
  timezoneOffset: number;
  dateTime: string;
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  connection: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  } | null;
  battery: {
    level: number;
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
  } | null;
  geolocation: {
    latitude: number;
    longitude: number;
    accuracy: number;
  } | null;
}

export interface ExtendedNavigator extends Navigator {
  deviceMemory?: number;
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
  getBattery?: () => Promise<BatteryManager>;
}

export interface ExtendedPerformance extends Performance {
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

export interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
}
