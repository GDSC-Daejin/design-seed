# @gdsc-dju/styled-components

## Introduction

`@gdsc-dju/styled-components` is a library for creating color, font-size, window-sizes asset
that using in gdsc-dju websites.

Please read this docs to use this library.

## Installation

---
```shell
yarn add gds-styled-components @gdsc-dju/gds-styled-components
```

## Usage

---

### Setup Provider

```typescript jsx
import {GdsThemeProvider} from "";

<GdsThemeProvider mode={'auto'}> //mode: auto, dark-only, light-only
    <MyThemedComponent/>
</GdsThemeProvider>
```    
### To change theme

```typescript jsx
const { isDarkMode, toggleTheme } = useContext(DarkModeContext);

<button onClick={() => toggleTheme()}>
    {isDarkMode ? 'dark' : 'light'}
</button>
```

## Using styled

---

```typescript jsx
const Box = styled.div(props => ({
color: props.theme.colors.grey900,
background: props.theme.colors.white, 
fontSize: props => props.theme.fontSizes.body1,
}));

const Box1 = styled.div`
color: ${props => props.theme.colors.grey900};
background: ${props => props.theme.colors.white};
font-size: ${props => props.theme.fontSizes.h1};
`;

const Box2 = styled.div`
color: ${({theme}) => theme.colors.grey900};
background: ${({theme}) => theme.colors.white};
font-size: ${props => props.theme.fontSizes.body2};
`;
```

## Usage with custom theme

---

GdsThemeProvider is just a ThemeProvider with predefined types.

You can also use ThemeProvider directly.

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

// You need to set dark mode context to use dark theme.
const darkMode = useDarkMode();

<DarkModeContext.Provider value={darkMode}>
    <ThemeProvider theme={theme}>
        <MyThemedComponent />
    </ThemeProvider>
</DarkModeContext.Provider>
```