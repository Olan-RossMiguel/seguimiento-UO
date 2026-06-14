import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { IoIosArrowForward } from 'react-icons/io';
import { LuExternalLink } from 'react-icons/lu';

export default function GuestLayout({ children }) {
    return (
        <>
            {/* MOBILE */}
            <div
                className="flex min-h-screen flex-col md:hidden"
                style={{ backgroundColor: '#f5f5f0' }}
            >
                <Navbar variant="mobile" />

                <div
                    className="relative overflow-hidden rounded-b-3xl"
                    style={{ height: '180px' }}
                >
                    <img
                        src="/images/campus-uo.png"
                        alt="Campus Universidad Olmeca"
                        className="h-full w-full object-cover object-center"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(to top, rgba(42,54,18,0.95) 0%, rgba(42,54,18,0.6) 40%, transparent 100%)',
                        }}
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-lg font-bold leading-tight text-white drop-shadow">
                            Portal de Egresados
                        </p>
                        <p className="mt-0.5 text-xs italic text-white/75">
                            Raíz de Sabiduría
                        </p>
                    </div>
                </div>

                <div className="-mt-3 flex flex-1 flex-col px-4 pb-8">
                    <div className="w-full rounded-2xl border-2 border-[#6b6f31] bg-white px-6 pb-7 pt-6 shadow-md">
                        {children}
                    </div>
                </div>
            </div>

            {/* DESKTOP */}
            <div
                className="relative hidden min-h-screen overflow-hidden md:flex md:flex-col md:items-center md:justify-center md:px-4"
                style={{ backgroundColor: '#eeeee8' }}
            >
                {/* Navbar fija arriba */}
                <div className="absolute inset-x-0 top-0 z-20">
                    <Navbar variant="desktop" />
                </div>

                <div
                    className="absolute left-0 top-1/4 h-72 w-64 rounded-r-3xl opacity-40"
                    style={{ backgroundColor: '#d6d9c8' }}
                />
                <div
                    className="absolute right-0 top-1/3 h-64 w-56 rounded-l-3xl opacity-40"
                    style={{ backgroundColor: '#d6d9c8' }}
                />
                <div
                    className="absolute left-16 top-24 h-20 w-36 rounded-2xl opacity-30"
                    style={{ backgroundColor: '#c8ccb8' }}
                />
                <div
                    className="absolute bottom-24 right-20 h-24 w-40 rounded-2xl opacity-30"
                    style={{ backgroundColor: '#c8ccb8' }}
                />
                <div
                    className="absolute bottom-32 left-32 h-48 w-48 rounded-full opacity-20"
                    style={{ backgroundColor: '#b8bda8' }}
                />

                <div className="relative z-10 flex w-full flex-col items-center pb-32 pt-20">
                    <div className="mb-5 flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-1.5 text-sm text-yellow-700 shadow-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
                        Proceso de Admisión Agosto 2026 abierto
                    </div>

                    <div className="w-full max-w-md rounded-2xl bg-white px-8 py-8 shadow-lg">
                        {children}
                    </div>
                    <p className="mt-5 text-sm text-stone-500">
                        ¿No eres egresado?{' '}
                        <a
                            href="/register"
                            className="font-semibold text-[#5a6e2c] hover:underline"
                        >
                            Regístrate aquí
                        </a>
                    </p>

                    <div className="mt-5 flex gap-6 text-sm text-stone-500">
                        <a
                            href="#"
                            className="flex items-center gap-1 hover:text-stone-700"
                        >
                            <LuExternalLink className="h-3.5 w-3.5" />
                            Portal de Alumnos
                        </a>
                        <span className="text-stone-300">›</span>
                        <a
                            href="#"
                            className="flex items-center gap-1 hover:text-stone-700"
                        >
                            <IoIosArrowForward className="h-3.5 w-3.5" />
                            Oferta Académica
                        </a>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-20">
                    <Footer />
                </div>
            </div>
        </>
    );
}
