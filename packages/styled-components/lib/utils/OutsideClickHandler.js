import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef } from 'react';
const OutsideClickHandler = ({ children, outsideClick, trigger = true, }) => {
    const ref = useRef(null);
    const handleClick = useCallback((e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            outsideClick(e.target);
        }
    }, [outsideClick]);
    useEffect(() => {
        if (trigger) {
            setTimeout(() => document.addEventListener('click', handleClick), 0);
        }
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick, trigger]);
    return _jsx("div", { ref: ref, children: children });
};
export default OutsideClickHandler;
//# sourceMappingURL=OutsideClickHandler.js.map