import React, { useCallback, useEffect, useRef } from 'react';
var OutsideClickHandler = function (_a) {
    var children = _a.children, outsideClick = _a.outsideClick, _b = _a.trigger, trigger = _b === void 0 ? true : _b;
    var ref = useRef(null);
    var handleClick = useCallback(function (e) {
        if (ref.current && !ref.current.contains(e.target)) {
            outsideClick(e.target);
        }
    }, [outsideClick]);
    useEffect(function () {
        if (trigger) {
            setTimeout(function () { return document.addEventListener('click', handleClick); }, 0);
        }
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick, trigger]);
    return React.createElement("div", { ref: ref }, children);
};
export default OutsideClickHandler;
