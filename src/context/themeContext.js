import React from 'react';

export const themes = {
    dark: 'dark',
    light: 'light'
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;