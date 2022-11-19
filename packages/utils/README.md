# @gdsc-dju/styled-components

[![install size](https://packagephobia.com/badge?p=@gdsc-dju/styled-components)](https://packagephobia.com/result?p=@gdsc-dju/styled-components)

## Introduction

`@gdsc-dju/styled-components` is a library for Websites Components.

To use this library, you need to install `styled-components` and `styled-components-theme`.

[@gdsc-dju/styled-components-theme docs](https://www.npmjs.com/package/@gdsc-dju/styled-components-theme)

[DOCS](https://design.gdsc-dju.com)

## Installation


```shell
yarn add ui @gdsc-dju/theme @gdsc-dju/ui
```

## Usage

### Get Component

```typescript jsx
import {Navigation, Footer} from "@gdsc-dju/ui";

const App = () => {
    return (
        <>
            <Navigation/>
            <YourComponent/>
            <Footer/>
        </>
    )
}
```