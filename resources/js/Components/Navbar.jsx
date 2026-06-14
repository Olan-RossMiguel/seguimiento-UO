export default function Navbar({ variant = 'mobile' }) {
    const isDesktop = variant === 'desktop';

    return (
        <header
            className={[
                'flex items-center justify-between px-4 py-3',
                isDesktop
                    ? 'border-b border-stone-300/60 bg-white/80 px-6 backdrop-blur-sm'
                    : 'border-b border-stone-200 bg-white',
            ].join(' ')}
        >
            {/* Logo + nombre */}
            <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5a6e2c]">
                    <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-white"
                        aria-hidden="true"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                </div>
                <span className="text-sm font-semibold text-[#3d4e1e]">
                    Egresados UO
                </span>
            </div>

            {/* Derecha */}
            <div className="flex items-center gap-4">
                <a
                    href="https://olmeca.edu.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium no-underline hover:opacity-75"
                    style={{ color: '#5a6e2c' }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 shrink-0 fill-current"
                        aria-hidden="true"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    Sitio Universidad
                </a>

                {/* Botón ayuda — solo desktop */}
                {isDesktop && (
                    <button
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-500 hover:bg-stone-50"
                        aria-label="Ayuda"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                        </svg>
                    </button>
                )}
            </div>
        </header>
    );
}
