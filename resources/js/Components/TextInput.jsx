import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-[#6b7c3f] focus:outline-none focus:ring-1 focus:ring-[#6b7c3f] ' +
                className
            }
            ref={localRef}
        />
    );
});
