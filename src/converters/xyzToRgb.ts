import { RGB, XYZ } from '../types';

const calculate = (x: number) =>
  (x > 0.0031308 ? 1.055 * Math.pow(x, 1 / 2.4) - 0.055 : 12.92 * x) * 255;

export const xyzToRgb = ({ x, y, z }: XYZ): RGB => {
  const varX = x / 100;
  const varY = y / 100;
  const varZ = z / 100;

  const result = [
    calculate(varX * 3.2406 + varY * -1.5372 + varZ * -0.4986),
    calculate(varX * -0.9689 + varY * 1.8758 + varZ * 0.0415),
    calculate(varX * 0.0557 + varY * -0.204 + varZ * 1.057),
  ].map((x) => Math.abs(Math.round(x)));

  return {
    r: result[0],
    g: result[1],
    b: result[2],
  };
};
