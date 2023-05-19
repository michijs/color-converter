import { DefaultReference } from "../constants";
import { LAB, XYZ } from "../types";

const calculate = (x: number) => {
  const pow = Math.pow(x, 3);
  return pow > 0.008856 ? pow : (x - 16 / 116) / 7.787;
};

export const labToXyz = (
  { l, a, b }: LAB,
  reference: XYZ = DefaultReference,
): XYZ => {
  let varY = (l + 16) / 116;
  let varX = a / 500 + varY;
  let varZ = varY - b / 200;

  varY = calculate(varY);
  varX = calculate(varX);
  varZ = calculate(varZ);
  return {
    x: varX * reference.x,
    y: varY * reference.y,
    z: varZ * reference.z,
  };
};
