import type { RGB, XYZ } from "../types";

const calculate = (x: number) =>
  (x > 0.04045 ? Math.pow((x + 0.055) / 1.055, 2.4) : x / 12.92) * 100;

export const rgbToXyz = ({ r, g, b }: RGB): XYZ => {
  const varR = calculate(r / 255);
  const varG = calculate(g / 255);
  const varB = calculate(b / 255);

  return {
    x: varR * 0.4124 + varG * 0.3576 + varB * 0.1805,
    y: varR * 0.2126 + varG * 0.7152 + varB * 0.0722,
    z: varR * 0.0193 + varG * 0.1192 + varB * 0.9505,
  };
};
