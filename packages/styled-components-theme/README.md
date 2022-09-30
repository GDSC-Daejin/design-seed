# @gdsc-dju/styled-components

## Introduction

`@gdsc-dju/styled-components` is a library for creating color, font-size, window-sizes asset
that using in gdsc-dju websites.

Please read this docs to use this library.

## Installation


```shell
yarn add styled-components-theme @gdsc-dju/styled-components-theme
```

## Usage


### Setup Provider

```typescript jsx
import {GdsThemeProvider} from "";

<GdsThemeProvider mode={'auto'}> //mode: auto, dark-only, light-only
    <MyThemedComponent/>
</GdsThemeProvider>
```    


### To change theme

You can change theme by using `DarkModeContext`.

```typescript jsx
import {DarkModeContext} from "";

const {isDarkMode, toggleTheme} = useContext(DarkModeContext);

<button onClick={() => toggleTheme()}>
    {isDarkMode ? 'dark' : 'light'}
</button>
```

You can open SideMenu by using `MenuContext`.

```typescript jsx
import {MenuContext} from "";

const {isMenuOpen, toggleMenu, menuHandler} = useContext(MenuContext);

<button onClick={() => toggleMenu()}>
    {isMenuOpen ? 'open' : 'closed'}
</button>
```

## Using styled Tokens

```typescript jsx
const Box1 = styled.div`
color: ${props => props.theme.colors.grey900};
background: ${props => props.theme.colors.white};
font-size: ${props => props.theme.fontSizes.titleXxl};
`;

const Box2 = styled.div`
color: ${({theme}) => theme.colors.grey900};
background: ${({theme}) => theme.colors.white};
font-size: ${({theme}) => theme.fontSizes.textXxl};
`;
```

## Usage with custom theme

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
const menuValue = useToggleMenu();

<DarkModeContext.Provider value={darkMode}>
    <MenuContext.Provider value={menuValue}>
        <ThemeProvider theme={theme}>
            <MyThemedComponent />
        </ThemeProvider>
    </MenuContext.Provider>
</DarkModeContext.Provider>
```