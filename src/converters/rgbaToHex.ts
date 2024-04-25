import { rgbToHex, toHex } from "./rgbToHex";
import type { RGBA } from "../types";

export const rgbaToHex = ({ a, ...rgb }: RGBA) => `${rgbToHex(rgb)}${toHex(a)}`;
