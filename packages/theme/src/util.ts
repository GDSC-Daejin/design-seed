import { colors, fontSizes, fontWeights } from './index';

export const isColorToken = (token: string): boolean => {
  const colorTokens = Object.keys(colors);
  return colorTokens.includes(token);
};
export const isFontSizeToken = (token: string): boolean => {
  const fontSizeTokens = Object.keys(fontSizes);
  return fontSizeTokens.includes(token);
};
export const isFontWeightToken = (token: string): boolean => {
  const fontWeightTokens = Object.keys(fontWeights);
  return fontWeightTokens.includes(token);
};
