export const getDonutProps = (A: number, B: number) => {
  const b = new Array(1760).fill(' ');
  const z = new Array(1760).fill(0);

  for (let j = 0; j < 6.28; j += 0.07) {
    for (let i = 0; i < 6.28; i += 0.02) {
      const c = Math.sin(i);
      const d = Math.cos(j);
      const e = Math.sin(A);
      const f = Math.sin(j);
      const g = Math.cos(A);
      const h = d + 2;
      const D = 1 / (c * h * e + f * g + 5);
      const l = Math.cos(i);
      const m = Math.cos(B);
      const n = Math.sin(B);
      const t = c * h * g - f * e;
      const x = (40 + 30 * D * (l * h * m - t * n)) | 0;
      const y = (12 + 15 * D * (l * h * n + t * m)) | 0;
      const o = x + 80 * y;
      const N = (8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n)) | 0;

      if (y < 22 && y >= 0 && x >= 0 && x < 80 && D > z[o]) {
        b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0];
      }
    }
  }

  return b;
};
