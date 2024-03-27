import type { LAB, LCH } from "../types";

export const lchToLab = ({ l, c, h }: LCH): LAB => ({
  l,
  a: c * Math.cos((h * Math.PI) / 180),
  b: c * Math.sin((h * Math.PI) / 180),
});
