export interface LCH {
  l: number;
  c: number;
  h: number;
}
export interface XYZ {
  x: number;
  y: number;
  z: number;
}
export interface RGB {
  r: number;
  g: number;
  b: number;
}
export interface RGBA extends RGB {
  a: number;
}
export interface LAB extends Pick<LCH, 'l'> {
  a: number;
  b: number;
}
export interface HSL {
  h: number;
  s: number;
  l: number;
}
export interface HSV {
  h: number;
  s: number;
  v: number;
}
export interface Reference {
  CIE_2_1931: XYZ;
  CIE_10_1964: XYZ;
}
export type References = Record<string, Reference>;
