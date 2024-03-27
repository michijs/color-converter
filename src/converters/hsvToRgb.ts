import type { HSV, RGB } from "src/types";

export const hsvToRgb = ({ h, s, v }: HSV): RGB => {
  if (s === 0)
    return {
      r: v * 255,
      g: v * 255,
      b: v * 255,
    };
  else {
    let varH = h * 6;
    if (varH === 6) varH = 0; //H must be < 1
    const varI = Math.round(varH),
      var1 = v * (1 - s),
      var2 = v * (1 - s * (varH - varI)),
      var3 = v * (1 - s * (1 - (varH - varI)));

    let varR, varG, varB;

    if (varI === 0) {
      varR = v;
      varG = var3;
      varB = var1;
    } else if (varI === 1) {
      varR = var2;
      varG = v;
      varB = var1;
    } else if (varI === 2) {
      varR = var1;
      varG = v;
      varB = var3;
    } else if (varI === 3) {
      varR = var1;
      varG = var2;
      varB = v;
    } else if (varI === 4) {
      varR = var3;
      varG = var1;
      varB = v;
    } else {
      varR = v;
      varG = var1;
      varB = var2;
    }

    return {
      r: varR * 255,
      g: varG * 255,
      b: varB * 255,
    };
  }
};
