import { labToXyz } from "./labToXyz";
import { lchToLab } from "./lchToLab";
import type { LCH, RGB, XYZ } from "../types";
import { xyzToRgb } from "./xyzToRgb";
import { DefaultReference } from "../constants";

export const lchToRgb = (lch: LCH, reference: XYZ = DefaultReference): RGB =>
  xyzToRgb(labToXyz(lchToLab(lch), reference));
