/**
 * Converts RGB values to HSL
 * @returns [hue (0-1), saturation (0-1), lightness (0-1)]
 */
export function rgbToHsl(
  r: number,
  g: number,
  b: number
): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  if (max === min) {
    return [0, 0, l]; // achromatic (gray)
  }

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  let h = 0;
  switch (max) {
    case r:
      h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      break;
    case g:
      h = ((b - r) / d + 2) / 6;
      break;
    case b:
      h = ((r - g) / d + 4) / 6;
      break;
  }

  return [h, s, l];
}

/**
 * Converts HSL values back to RGB
 * @param h Hue (0-1)
 * @param s Saturation (0-1)
 * @param l Lightness (0-1)
 * @returns [r, g, b] each 0-255
 */
export function hslToRgb(
  h: number,
  s: number,
  l: number
): [number, number, number] {
  if (s === 0) {
    const gray = Math.round(l * 255);
    return [gray, gray, gray]; // achromatic
  }

  const hueToRgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  const r = hueToRgb(p, q, h + 1 / 3);
  const g = hueToRgb(p, q, h);
  const b = hueToRgb(p, q, h - 1 / 3);

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * Transforms a hex color to be more neo-brutal
 * - Increases saturation by 20%
 * - Brightens dark colors
 */
export function neobrutalize(hex: string): string {
  // Remove # if present and parse RGB
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);

  // Convert to HSL for manipulation
  const hsl = rgbToHsl(r, g, b);

  // Boost saturation by 20%
  hsl[1] = Math.min(hsl[1] * 1.2, 1);

  // Brighten dark colors
  if (hsl[2] < 0.5) {
    hsl[2] = Math.min(hsl[2] * 1.3 + 0.1, 0.9);
  }

  // Convert back to RGB
  const [r2, g2, b2] = hslToRgb(hsl[0], hsl[1], hsl[2]);

  // Return as hex
  return (
    '#' +
    r2.toString(16).padStart(2, '0') +
    g2.toString(16).padStart(2, '0') +
    b2.toString(16).padStart(2, '0')
  );
}

export function getContrastTextColor(hex: string): '#000000' | '#FFFFFF' {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);

  // Calculate relative luminance (perceived brightness)
  // Human eyes are most sensitive to green, then red, then blue
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black for light backgrounds, white for dark
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}
