import { DefaultReference } from "../constants";
import { LAB, XYZ } from "../types";

const calculate = (x: number) =>
  x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;

export const xyzToLab = (
  { x, y, z }: XYZ,
  reference: XYZ = DefaultReference,
): LAB => {
  const varX = calculate(x / reference.x);
  const varY = calculate(y / reference.y);
  const varZ = calculate(z / reference.z);

  return {
    l: 116 * varY - 16,
    a: 500 * (varX - varY),
    b: 200 * (varY - varZ),
  };
};
