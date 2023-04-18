# Color converter
A conversion utility for color spaces.

![npm][version] [![license][github-license]][github-license-url] ![npm][npm-downloads] ![npm][repo-size]
  [![CodeQL](https://github.com/michijs/color-converter/actions/workflows/codeql.yml/badge.svg)](https://github.com/michijs/color-converter/actions/workflows/codeql.yml)
  [![Tests](https://github.com/michijs/color-converter/actions/workflows/tests.yml/badge.svg)](https://github.com/michijs/color-converter/actions/workflows/tests.yml)

Based on [CSS color module 4 draft](https://www.w3.org/TR/css-color-4/#color-converter-code) and [Easy RGB documentation](http://www.easyrgb.com/en/math.php)

## Color spaces conversion
Conversion can be made from the following spaces:
- hex ↔ rgba or rgb ↔ xyz ↔ lab ↔ lch
- rgba or rgb ↔ lch (a shorcut for the previous one)
- hex ↔ rgba or rgb ↔ hsl
- hex ↔ rgba or rgb ↔ hsv

## Color spaces support
We offer support for the following spaces:
- [lch (HCL)](https://en.wikipedia.org/wiki/HCL_color_space)
- [lab (CIE LAB)](https://en.wikipedia.org/wiki/CIELAB_color_space)
- [RGB](https://en.wikipedia.org/wiki/RGB_color_model)
- [RGBA](https://en.wikipedia.org/wiki/RGBA_color_model)
- [HEX](https://en.wikipedia.org/wiki/Web_colors) (only with 3, 4, 6 or 8 digits) (FE: #FFF, #FFF0, #FFFFFF, #FFFFFF00)
- [XYZ (CIE 1931)](https://en.wikipedia.org/wiki/CIE_1931_color_space)
- [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)
- [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV)

## License
 - [MIT](https://github.com/michijs/color-converter/blob/master/LICENSE.md)

[repo-size]: https://img.shields.io/github/repo-size/michijs/color-converter
[npm-downloads]: https://img.shields.io/npm/dt/@michijs/color-converter
[version]: https://img.shields.io/npm/v/@michijs/color-converter
[github-license]: https://img.shields.io/github/license/michijs/color-converter
[github-license-url]: https://github.com/michijs/color-converter/blob/master/LICENSE.md
