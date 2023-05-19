import { hexToRgba } from "./hexToRgba";
import { labToLch } from "./labToLch";
import { rgbToXyz } from "./rgbToXyz";
import { LCH, XYZ } from "../types";
import { xyzToLab } from "./xyzToLab";
import { DefaultReference } from "../constants";

export const hexToLch = (hex: string, reference: XYZ = DefaultReference): LCH =>
  labToLch(xyzToLab(rgbToXyz(hexToRgba(hex)), reference));
