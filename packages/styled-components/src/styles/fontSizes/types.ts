const FontGroupNames = ['title', 'text'] as const;
const FontSizeNames = ['Xxl', 'Xl', 'L', 'M', 'S'] as const;

export type FontGroup = typeof FontGroupNames[number];
export type FontSizeGroup = typeof FontSizeNames[number];

type MakeFontTokenSet<TokenName extends FontGroup> =
  `${TokenName}${FontSizeGroup[number]}`;

export type FontToken = MakeFontTokenSet<'title'> | MakeFontTokenSet<'text'>;

export type FontScheme = Record<FontToken, string>;
