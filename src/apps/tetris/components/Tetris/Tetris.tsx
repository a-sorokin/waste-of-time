import styles from './Tetris.module.scss';
import TetrisNpm from 'react-tetris';

export const Tetris = () => {
  return (
    <div className={styles.tetrisContainer}>
      <TetrisNpm
        keyboardControls={{
          down: 'MOVE_DOWN',
          left: 'MOVE_LEFT',
          right: 'MOVE_RIGHT',
          space: 'HARD_DROP',
          z: 'FLIP_COUNTERCLOCKWISE',
          x: 'FLIP_CLOCKWISE',
          up: 'FLIP_CLOCKWISE',
          p: 'TOGGLE_PAUSE',
          c: 'HOLD',
          shift: 'HOLD',
        }}
      >
        {({ Gameboard, points, linesCleared, state, controller }) => (
          <>
            <div>
              <div>
                <p>Points: {points}</p>
                <p>Lines Cleared: {linesCleared}</p>
              </div>

              <div className={styles.info}>
                <div>down MOVE DOWN</div>
                <div>left MOVE LEFT</div>
                <div>right MOVE RIGHT</div>
                <div>up FLIP CLOCKWISE</div>
                <div>space HARD DROP</div>
              </div>

              {state === 'LOST' ? (
                <div className={styles.gameOver}>
                  <h2>Game Over</h2>
                  <button onClick={controller.restart}>New game</button>
                </div>
              ) : null}
            </div>

            <Gameboard />
          </>
        )}
      </TetrisNpm>
    </div>
  );
};
