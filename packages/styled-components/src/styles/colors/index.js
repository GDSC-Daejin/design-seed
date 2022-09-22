var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var assetLightGrey = {
    white: '#FFF',
    grey50: '#F9FAFB',
    grey100: '#F2F4F6',
    grey200: '#E5E8EB',
    grey300: '#D1D6DB',
    grey400: '#B0B8C1',
    grey500: '#8B95A1',
    grey600: '#6B7684',
    grey700: '#4E5968',
    grey800: '#333D4B',
    grey900: '#191F28',
};
export var assetDarkGrey = {
    white: '#191F28',
    grey50: '#333D4B',
    grey100: '#4E5968',
    grey200: '#6B7684',
    grey300: '#8B95A1',
    grey400: '#B0B8C1',
    grey500: '#D1D6DB',
    grey600: '#E5E8EB',
    grey700: '#F2F4F6',
    grey800: '#F9FAFB',
    grey900: '#FFF',
};
export var assetGreen = {
    green100: '#E8F5E9',
    green200: '#C8E6C9',
    green300: '#A5D6A7',
    green400: '#81C784',
    green500: '#66BB6A',
    green600: '#4CAF50',
    green900: '#34A853',
};
export var assetYellow = {
    yellow100: '#FFF8E1',
    yellow200: '#FFECB3',
    yellow300: '#FFE082',
    yellow400: '#FFD54F',
    yellow500: '#FFCA28',
    yellow600: '#FFC107',
    yellow900: '#FBBC04',
};
export var assetRed = {
    red100: '#FFEBEE',
    red200: '#FFCDD2',
    red300: '#EF9A9A',
    red400: '#E57373',
    red500: '#EF5350',
    red600: '#F44336',
    red900: '#EA4335',
};
export var assetOrange = {
    orange100: '#FFF3E0',
    orange200: '#FFE0B2',
    orange300: '#FFCC80',
    orange400: '#FFB74D',
    orange500: '#FFA726',
    orange600: '#FF9800',
    orange700: '#FB8C00',
    orange800: '#F57C00',
    orange900: '#FF740F',
};
export var assetBlue = {
    blue100: '#E3F2FD',
    blue200: '#BBDEFB',
    blue300: '#90CAF9',
    blue400: '#64B5F6',
    blue500: '#42A5F5',
    blue600: '#2196F3',
    blue900: '#4285F4',
};
var lightSemanticScheme = {
    background: '#fff',
    backgroundLow: 'grey100',
    boxShadow100: '0 0.8px 2px rgba(0,0,0,0.03), 0 3px 7px rgba(0,0,0,0.05), 0 12px 30px rgba(0,0,0,0.1)',
};
var darkSemanticScheme = {
    background: '#202124',
    backgroundLow: 'grey100',
    boxShadow100: '0 0.8px 2px rgba(0,0,0,0.03), 0 3px 7px rgba(0,0,0,0.05), 0 12px 30px rgba(0,0,0,0.1)',
};
export var pointColors = __assign(__assign(__assign(__assign(__assign({}, assetGreen), assetYellow), assetRed), assetBlue), assetOrange);
export var light = __assign(__assign(__assign({}, assetLightGrey), pointColors), lightSemanticScheme);
export var dark = __assign(__assign(__assign({}, assetDarkGrey), pointColors), darkSemanticScheme);
