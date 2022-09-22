import React from 'react';
import { FooterCopyRight, FooterLogo, FooterText, FooterWrapper, } from './styled';
export var Footer = function (_a) {
    var _b = _a.disable, disable = _b === void 0 ? false : _b, pages = _a.pages;
    return (React.createElement(React.Fragment, null, !disable && (React.createElement(FooterWrapper, null,
        React.createElement(FooterLogo, null,
            React.createElement(FooterText, { google: true, href: 'https://developers.google.com/' }, "Google"),
            React.createElement(FooterText, { href: 'https://developers.google.com/community-guidelines' }, "Community guidelines"),
            pages &&
                pages.map(function (page) { return (React.createElement(FooterText, { key: page.text, href: page.link }, page.text)); })),
        React.createElement(FooterCopyRight, null,
            'Copyright © ',
            "GDSC Daejin")))));
};
