import { createContext } from 'react';
const noop = () => { };
export const DarkModeContext = createContext({
    isDarkMode: false,
    toggleTheme: noop,
});
//# sourceMappingURL=DarkModeContext.js.map