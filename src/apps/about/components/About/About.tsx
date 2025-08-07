import styles from './About.module.scss';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ExtendedNavigator, ExtendedPerformance, SystemInfo } from '@/apps/about/types';
import { Globe, MapPin, Monitor, MonitorSmartphone, Wifi } from 'lucide-react';

export const About = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('browser');

  useEffect(() => {
    const gatherSystemInfo = async () => {
      const info: SystemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        languages: navigator.languages,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency || 0,
        deviceMemory: (navigator as ExtendedNavigator).deviceMemory || 0,
        maxTouchPoints: navigator.maxTouchPoints || 0,
        screenWidth: screen.width,
        screenHeight: screen.height,
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        dateTime: new Date().toLocaleString(),
        memory: null,
        connection: null,
        battery: null,
        geolocation: null,
      };

      // Memory info
      if ('memory' in performance) {
        const memory = (performance as ExtendedPerformance).memory;
        if (memory) {
          info.memory = {
            usedJSHeapSize: Math.round(memory.usedJSHeapSize / 1024 / 1024),
            totalJSHeapSize: Math.round(memory.totalJSHeapSize / 1024 / 1024),
            jsHeapSizeLimit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
          };
        }
      }

      // Connection info
      if ('connection' in navigator) {
        const connection = (navigator as ExtendedNavigator).connection;
        if (connection) {
          info.connection = {
            effectiveType: connection.effectiveType || 'unknown',
            downlink: connection.downlink || 0,
            rtt: connection.rtt || 0,
          };
        }
      }

      // Battery info
      if ('getBattery' in navigator) {
        try {
          const getBattery = (navigator as ExtendedNavigator).getBattery;
          if (getBattery) {
            const battery = await getBattery();
            info.battery = {
              level: Math.round(battery.level * 100),
              charging: battery.charging,
              chargingTime: battery.chargingTime,
              dischargingTime: battery.dischargingTime,
            };
          }
        } catch (error) {
          // Battery info not available
        }
      }

      // Geolocation
      if ('geolocation' in navigator) {
        try {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
          });

          info.geolocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          };
        } catch (error) {
          // Geolocation not available
        }
      }

      setSystemInfo(info);
      setLoading(false);
    };

    gatherSystemInfo();
  }, []);

  const sections = [
    { id: 'browser', title: 'Browser Info', icon: Globe },
    { id: 'system', title: 'System Info', icon: Monitor },
    { id: 'screen', title: 'Screen Info', icon: MonitorSmartphone },
    { id: 'network', title: 'Network Info', icon: Wifi },
    { id: 'location', title: 'Location Info', icon: MapPin },
  ];

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <span>Gathering system information...</span>
        </div>
      </div>
    );
  }

  if (!systemInfo) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Failed to gather system information</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>System Information</h1>
        <div className={styles.timestamp}>Last updated: {systemInfo.dateTime}</div>
      </div>

      <div className={styles.navigation}>
        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              className={`${styles.navButton} ${activeSection === section.id ? styles.active : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <IconComponent className={styles.icon} size={16} strokeWidth={2} />
              {section.title}
            </button>
          );
        })}
      </div>

      <div className={styles.content}>
        {activeSection === 'browser' && (
          <div className={styles.section}>
            <h2>Browser Information</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>User Agent:</span>
                <span className={clsx(styles.value, styles.userAgent)} title={systemInfo.userAgent}>
                  {systemInfo.userAgent.length > 50
                    ? systemInfo.userAgent.substring(0, 50) + '...'
                    : systemInfo.userAgent}
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Platform:</span>
                <span className={styles.value}>{systemInfo.platform}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Language:</span>
                <span className={styles.value}>{systemInfo.language}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Languages:</span>
                <span className={styles.value} title={systemInfo.languages.join(', ')}>
                  {systemInfo.languages.join(', ').length > 30
                    ? systemInfo.languages.join(', ').substring(0, 30) + '...'
                    : systemInfo.languages.join(', ')}
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Cookies Enabled:</span>
                <span className={styles.value}>
                  <span className={`${styles.badge} ${systemInfo.cookieEnabled ? styles.badgeYes : styles.badgeNo}`}>
                    {systemInfo.cookieEnabled ? 'YES' : 'NO'}
                  </span>
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Online:</span>
                <span className={styles.value}>
                  <span className={`${styles.badge} ${systemInfo.onLine ? styles.badgeYes : styles.badgeNo}`}>
                    {systemInfo.onLine ? 'YES' : 'NO'}
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'system' && (
          <div className={styles.section}>
            <h2>System Information</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>CPU Cores:</span>
                <span className={styles.value}>{systemInfo.hardwareConcurrency}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Device Memory:</span>
                <span className={styles.value}>{systemInfo.deviceMemory} GB</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Max Touch Points:</span>
                <span className={styles.value}>{systemInfo.maxTouchPoints}</span>
              </div>
              {systemInfo.memory && (
                <>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Used Heap:</span>
                    <span className={styles.value}>{systemInfo.memory.usedJSHeapSize} MB</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Total Heap:</span>
                    <span className={styles.value}>{systemInfo.memory.totalJSHeapSize} MB</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Heap Limit:</span>
                    <span className={styles.value}>{systemInfo.memory.jsHeapSizeLimit} MB</span>
                  </div>
                </>
              )}
              {systemInfo.battery && (
                <>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Battery Level:</span>
                    <span className={styles.value}>
                      {systemInfo.battery.level ? `${systemInfo.battery.level}%` : 'Not available'}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Charging:</span>
                    <span className={styles.value}>
                      <span
                        className={`${styles.badge} ${systemInfo.battery.charging ? styles.badgeYes : styles.badgeNo}`}
                      >
                        {systemInfo.battery.charging ? 'YES' : 'NO'}
                      </span>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {activeSection === 'screen' && (
          <div className={styles.section}>
            <h2>Screen Information</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Screen Resolution:</span>
                <span className={styles.value}>
                  {systemInfo.screenWidth} x {systemInfo.screenHeight}
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Color Depth:</span>
                <span className={styles.value}>{systemInfo.colorDepth} bits</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Pixel Depth:</span>
                <span className={styles.value}>{systemInfo.pixelDepth} bits</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Timezone:</span>
                <span className={styles.value}>{systemInfo.timezone}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Timezone Offset:</span>
                <span className={styles.value}>{systemInfo.timezoneOffset} minutes</span>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'network' && (
          <div className={styles.section}>
            <h2>Network Information</h2>
            <div className={styles.infoGrid}>
              {systemInfo.connection ? (
                <>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Connection Type:</span>
                    <span className={styles.value}>{systemInfo.connection.effectiveType}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Downlink:</span>
                    <span className={styles.value}>{systemInfo.connection.downlink} Mbps</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>RTT:</span>
                    <span className={styles.value}>{systemInfo.connection.rtt} ms</span>
                  </div>
                </>
              ) : (
                <div className={styles.infoItem}>
                  <span className={styles.label}>Network Info:</span>
                  <span className={styles.value}>Not available</span>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === 'location' && (
          <div className={styles.section}>
            <h2>Location Information</h2>
            <div className={styles.infoGrid}>
              {systemInfo.geolocation ? (
                <>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Latitude:</span>
                    <span className={styles.value}>{systemInfo.geolocation.latitude.toFixed(6)}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Longitude:</span>
                    <span className={styles.value}>{systemInfo.geolocation.longitude.toFixed(6)}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Accuracy:</span>
                    <span className={styles.value}>{systemInfo.geolocation.accuracy.toFixed(2)} meters</span>
                  </div>
                </>
              ) : (
                <div className={styles.infoItem}>
                  <span className={styles.label}>Location:</span>
                  <span className={styles.value}>Not available</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
