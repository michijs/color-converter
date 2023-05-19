import { References } from "../types";

export const references = {
  /**Incandescent/tungsten */
  A: {
    CIE_2_1931: { x: 109.85, y: 100.0, z: 35.585 },
    CIE_10_1964: { x: 111.144, y: 100.0, z: 35.2 },
  },
  /**Old direct sunlight at noon */
  B: {
    CIE_2_1931: { x: 99.0927, y: 100.0, z: 85.313 },
    CIE_10_1964: { x: 99.178, y: 100.0, z: 84.3493 },
  },
  /**Old daylight */
  C: {
    CIE_2_1931: { x: 98.074, y: 100.0, z: 118.232 },
    CIE_10_1964: { x: 97.285, y: 100.0, z: 116.145 },
  },
  /**ICC profile PCS */
  D50: {
    CIE_2_1931: { x: 96.422, y: 100.0, z: 82.521 },
    CIE_10_1964: { x: 96.72, y: 100.0, z: 81.427 },
  },
  /**Mid-morning daylight */
  D55: {
    CIE_2_1931: { x: 95.682, y: 100.0, z: 92.149 },
    CIE_10_1964: { x: 95.799, y: 100.0, z: 90.926 },
  },
  /**Daylight, sRGB, Adobe-RGB */
  D65: {
    CIE_2_1931: { x: 95.047, y: 100.0, z: 108.883 },
    CIE_10_1964: { x: 94.811, y: 100.0, z: 107.304 },
  },
  /**North sky daylight */
  D75: {
    CIE_2_1931: { x: 94.972, y: 100.0, z: 122.638 },
    CIE_10_1964: { x: 94.416, y: 100.0, z: 120.641 },
  },
  /**Equal energy */
  E: {
    CIE_2_1931: { x: 100.0, y: 100.0, z: 100.0 },
    CIE_10_1964: { x: 100.0, y: 100.0, z: 100.0 },
  },
  /**Daylight Fluorescent */
  F1: {
    CIE_2_1931: { x: 92.834, y: 100.0, z: 103.665 },
    CIE_10_1964: { x: 94.791, y: 100.0, z: 103.191 },
  },
  /**Cool fluorescent */
  F2: {
    CIE_2_1931: { x: 99.187, y: 100.0, z: 67.395 },
    CIE_10_1964: { x: 103.28, y: 100.0, z: 69.026 },
  },
  /**White Fluorescent */
  F3: {
    CIE_2_1931: { x: 103.754, y: 100.0, z: 49.861 },
    CIE_10_1964: { x: 108.968, y: 100.0, z: 51.965 },
  },
  /**Warm White Fluorescent */
  F4: {
    CIE_2_1931: { x: 109.147, y: 100.0, z: 38.813 },
    CIE_10_1964: { x: 114.961, y: 100.0, z: 40.963 },
  },
  /**Daylight Fluorescent */
  F5: {
    CIE_2_1931: { x: 90.872, y: 100.0, z: 98.723 },
    CIE_10_1964: { x: 93.369, y: 100.0, z: 98.636 },
  },
  /**Lite White Fluorescent */
  F6: {
    CIE_2_1931: { x: 97.309, y: 100.0, z: 60.191 },
    CIE_10_1964: { x: 102.148, y: 100.0, z: 62.074 },
  },
  /**Daylight fluorescent, D65 simulator */
  F7: {
    CIE_2_1931: { x: 95.044, y: 100.0, z: 108.755 },
    CIE_10_1964: { x: 95.792, y: 100.0, z: 107.687 },
  },
  /**Sylvania F40, D50 simulator */
  F8: {
    CIE_2_1931: { x: 96.413, y: 100.0, z: 82.333 },
    CIE_10_1964: { x: 97.115, y: 100.0, z: 81.135 },
  },
  /**Cool White Fluorescent */
  F9: {
    CIE_2_1931: { x: 100.365, y: 100.0, z: 67.868 },
    CIE_10_1964: { x: 102.116, y: 100.0, z: 67.826 },
  },
  /**Ultralume 50, Philips TL85 */
  F10: {
    CIE_2_1931: { x: 96.174, y: 100.0, z: 81.712 },
    CIE_10_1964: { x: 99.001, y: 100.0, z: 83.134 },
  },
  /**Ultralume 40, Philips TL84 */
  F11: {
    CIE_2_1931: { x: 100.966, y: 100.0, z: 64.37 },
    CIE_10_1964: { x: 103.866, y: 100.0, z: 65.627 },
  },
  /**Ultralume 30, Philips TL83 */
  F12: {
    CIE_2_1931: { x: 108.046, y: 100.0, z: 39.228 },
    CIE_10_1964: { x: 111.428, y: 100.0, z: 40.353 },
  },
} satisfies References;

export const DefaultReference = references.D65.CIE_2_1931;
