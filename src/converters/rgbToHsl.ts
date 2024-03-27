import type { HSL, RGB } from "../types";

export const rgbToHsl = ({ r, g, b }: RGB): HSL => {
  const varR = r / 255;
  const varG = g / 255;
  const varB = b / 255;

  const varMin = Math.min(varR, varG, varB); //Min. value of RGB
  const varMax = Math.max(varR, varG, varB); //Max. value of RGB
  const delMax = varMax - varMin; //Delta RGB value

  const l = (varMax + varMin) / 2;
  //This is a gray, no chroma...
  let h = 0,
    s = 0;

  //Chromatic data...
  if (delMax !== 0) {
    if (l < 0.5) s = delMax / (varMax + varMin);
    else s = delMax / (2 - varMax - varMin);

    const delR = ((varMax - varR) / 6 + delMax / 2) / delMax;
    const delG = ((varMax - varG) / 6 + delMax / 2) / delMax;
    const delB = ((varMax - varB) / 6 + delMax / 2) / delMax;

    if (varR === varMax) h = delB - delG;
    else if (varG === varMax) h = 1 / 3 + delR - delB;
    else if (varB === varMax) h = 2 / 3 + delG - delR;

    if (h < 0) h++;
    if (h > 1) h--;
  }

  return {
    h,
    s,
    l,
  };
};
