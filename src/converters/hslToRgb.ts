import type { HSL, RGB } from "../types";

const HueToRgb = (v1: number, v2: number, vH: number) => {
  if (vH < 0) vH += 1;
  if (vH > 1) vH -= 1;
  if (6 * vH < 1) return v1 + (v2 - v1) * 6 * vH;
  if (2 * vH < 1) return v2;
  if (3 * vH < 2) return v1 + (v2 - v1) * (2 / 3 - vH) * 6;
  return v1;
};

export const hslToRgb = ({ h, s, l }: HSL): RGB => {
  if (s === 0)
    return {
      r: l * 255,
      g: l * 255,
      b: l * 255,
    };
  else {
    const var2 = l < 0.5 ? l * (1 + s) : l + s - s * l;
    const var1 = 2 * l - var2;

    return {
      r: 255 * HueToRgb(var1, var2, h + 1 / 3),
      g: 255 * HueToRgb(var1, var2, h),
      b: 255 * HueToRgb(var1, var2, h - 1 / 3),
    };
  }
};
