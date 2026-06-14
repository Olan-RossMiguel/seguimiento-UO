export default function Footer() {
    return (
        <footer className="border-t border-stone-300/60 bg-white/60 px-6 py-4">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-2 text-xs text-stone-400">
                <p>
                    © 2026 Universidad Olmeca | Raíz de Sabiduría. Todos los
                    derechos reservados.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-stone-600">
                        Aviso de Privacidad
                    </a>
                    <a href="#" className="hover:text-stone-600">
                        Términos y Condiciones
                    </a>
                    <a href="#" className="hover:text-stone-600">
                        Contacto
                    </a>
                </div>
            </div>
        </footer>
    );
}
