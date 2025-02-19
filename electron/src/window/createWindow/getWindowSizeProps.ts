import { screen } from 'electron';

export const getWindowSizeProps = () => {
  const { workAreaSize, size: screenSize } = screen.getPrimaryDisplay();
  const { width, height } = workAreaSize;
  const { width: realWidth, height: realHeight } = screenSize;
  const { round } = Math;

  const windowWidth = width * 0.7;
  const windowHeight = height * 0.6;

  const xPosition = (realWidth - windowWidth) / 2;
  const yPosition = realHeight - windowHeight;

  return {
    y: round(yPosition),
    x: round(xPosition),
    width: round(windowWidth),
    height: round(windowHeight),
  };
};
