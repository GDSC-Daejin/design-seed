const FontWeightNames = ['bold', 'medium', 'regular'];
export type FontWeightGroup = typeof FontWeightNames[number];

export type FontWeightScheme = Record<FontWeightGroup, number>;

export const fontWeights: FontWeightScheme = {
  bold: 700,
  medium: 500,
  regular: 400,
};
