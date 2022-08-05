const FontGroupNames = ['h', 'body'] as const;

export type FontGroup = typeof FontGroupNames[number];

type MakeFontTokenSet<
  TokenName extends FontGroup,
  TokenNumber extends number[],
> = `${TokenName}${TokenNumber[number]}`;

export type FontToken =
  | MakeFontTokenSet<'h', [1, 2, 3, 4, 5, 6, 7]>
  | MakeFontTokenSet<'body', [1, 2, 3, 4]>;

export type FontScheme = Record<FontToken, string>;
