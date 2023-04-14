import { LAB, LCH } from '../types';

export const labToLch = ({ l, a, b }: LAB): LCH => {
  // Convert to polar form
  let hue = Math.atan2(b, a);

  if (hue > 0) hue = (hue / Math.PI) * 180;
  else hue = 360 - (Math.abs(hue) / Math.PI) * 180;

  return {
    l,
    c: Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)),
    h: hue,
  };
};
