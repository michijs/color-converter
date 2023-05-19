import { RGB } from "../types";

export const toHex = (x: number) => {
  const asHex = x.toString(16);
  return asHex.length === 1 ? asHex.repeat(2) : asHex;
};

export const rgbToHex = ({ r, g, b }: RGB) =>
  `#${[r, g, b].map(toHex).join("")}`;
