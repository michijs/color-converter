import { RGBA } from "../types";

export const hexToRgba = (hex: string): RGBA => {
  let r = 0;
  let g = 0;
  let b = 0;
  let a = 1;

  // Scenarios:
  // #FFF
  // #FFF0
  // #FFFFFF
  // #FFFFFF00
  if ([4, 5].includes(hex.length)) {
    r = parseInt(hex.slice(1, 2).repeat(2), 16);
    g = parseInt(hex.slice(2, 3).repeat(2), 16);
    b = parseInt(hex.slice(3, 4).repeat(2), 16);
    if (hex.length === 5) a = parseInt(hex.slice(4, 5).repeat(2), 16);
  } else {
    if ([7, 9].includes(hex.length)) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
      if (hex.length === 9) a = parseInt(hex.slice(7, 9), 16);
    } else
      throw "Not supported Hex, we only support Hex with 3, 4, 6 or 8 digits";
  }

  return { r, g, b, a };
};
