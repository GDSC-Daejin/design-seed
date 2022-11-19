const FontGroupNames = ['title', 'text'] as const;
const FontSizeNames = ['Xxl', 'Xl', 'L', 'M', 'S'] as const;

export type FontGroup = typeof FontGroupNames[number];
export type FontSizeGroup = typeof FontSizeNames[number];

type MakeFontTokenSet<
  TokenName extends FontGroup,
  Size extends FontSizeGroup,
> = `${TokenName}${Size[number]}`;

export type FontToken =
  | MakeFontTokenSet<'title', FontSizeGroup>
  | MakeFontTokenSet<'text', FontSizeGroup>;

export type FontScheme = Record<FontToken, string>;
