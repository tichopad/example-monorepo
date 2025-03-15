import { useState, type PropsWithChildren } from 'react';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import styles from './FancyButton.module.css';

/**
 * Not your typical button.
 */
export function FancyButton({ children }: PropsWithChildren) {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <>
      {showConfetti ? <Fireworks autorun={{ speed: 3 }} /> : null}
      <button
        className={styles.button}
        onClick={() => setShowConfetti((show) => !show)}
      >
        {children}
      </button>
    </>
  );
}
