export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `flex w-full items-center justify-center gap-2 rounded-lg bg-[#6b7c3f] py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60 ` +
                className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
