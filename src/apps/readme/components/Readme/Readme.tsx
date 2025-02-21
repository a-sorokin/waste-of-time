import styles from './Readme.module.scss';

export const Readme = () => {
  return (
    <div className={styles.readme}>
      <h3>Welcome to WasteOfTimeOS v0.1.8</h3>
      <span>What you can do</span>
      <li>Open apps</li>
      <li>Drag them</li>
      <li>Resize them</li>
      <li>Enjoy the donut</li>
    </div>
  );
};
