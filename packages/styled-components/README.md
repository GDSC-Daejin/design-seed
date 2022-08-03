# @gdsc-dju/styled-components

## Introduction

`@gdsc-dju/styled-components` is a library for creating color, font-size, window-sizes asset
that using in gdsc-dju websites.

Please read this docs to use this library.

## Installation

---
```shell
yarn add styled-components @gdsc-dju/styled-components
```

## Usage

Setup Provider

```typescript jsx
import {GdsThemeProvider} from "@gdsc-dju/styled-components";

<GdsThemeProvider mode={'auto'}>
    <MyThemedComponent/>
</GdsThemeProvider>
```

## Using styled

```typescript jsx
const Box = styled.div(props => ({
color: props.theme.colors.grey900,
backgroundColor: props.theme.colors.white,
}));

const Box1 = styled.div`
color: ${props => props.theme.colors.grey900};
backgroundColor: ${props => props.theme.colors.white};
`;

const Box2 = styled.div`
color: ${({theme}) => theme.colors.grey900};
backgroundColor: ${({theme}) => theme.colors.white};
`;
```

## Usage with custom theme

GdsThemeProvider is just a ThemeProvider with predefined types.

You can use ThemeProvider directly to opt-out the default behavior.

```typescript jsx

type CustomTheme = {
    colors: ColorScheme,
    myColors: MyColorScheme,
};

const theme: CustomTheme = {
    colors: colors.light.scheme,
    myColors: {/* ... */},
};

declare module 'styled-components' {
interface DefaultTheme extends CustomTheme {}
}

// You should provide dark mode context and control its behavior.
const darkMode = useDarkMode();

<DarkModeContext.Provider value={darkMode}>
    <ThemeProvider theme={theme}>
        <MyThemedComponent />
    </ThemeProvider>
</DarkModeContext.Provider>
```