import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { IoPersonAddOutline } from 'react-icons/io5';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Iniciar Sesión" />

            <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800">
                    Bienvenido de nuevo
                </h1>
                <p className="mt-1 text-sm text-gray-500 md:hidden">
                    Ingresa a tu cuenta para gestionar tu perfil profesional
                </p>
                <p className="mt-1 hidden text-sm text-gray-500 md:block">
                    Accede a la red exclusiva de egresados de la Universidad
                    Olmeca
                </p>
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel
                        htmlFor="email"
                        value="Correo Institucional"
                        className="md:hidden"
                    />
                    <InputLabel
                        htmlFor="email"
                        value="Correo Electrónico"
                        className="hidden md:block"
                    />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        placeholder="nombre@olmeca.edu.mx"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-1" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Contraseña" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        placeholder="••••••••"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-y-2">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        Recordarme
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm font-medium text-[#6b7c3f] hover:underline"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    )}
                </div>

                <PrimaryButton
                    className="w-full justify-center"
                    disabled={processing}
                >
                    Iniciar Sesión →
                </PrimaryButton>
            </form>
            <div className="mt-6 hidden gap-3 rounded-xl bg-[#f3f3f1] p-4 text-sm text-zinc-600 md:flex">
                <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-5 w-5 shrink-0 fill-zinc-600"
                    aria-hidden="true"
                >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <p className="leading-snug">
                    Si eres egresado y aún no tienes cuenta, por favor contacta
                    a la{' '}
                    <strong className="font-bold text-zinc-900">
                        Coordinación de Egresados
                    </strong>{' '}
                    para solicitar tu acceso.
                </p>
            </div>
            <div className="mt-6 md:hidden">
                <p className="mb-3 text-center text-sm text-gray-500">
                    ¿Aún no eres parte de la red?
                </p>
                <Link
                    href={route('register')}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#5a6e2c] py-3 text-sm font-semibold text-[#5a6e2c] transition-colors hover:bg-[#f0f4e8]"
                >
                    <IoPersonAddOutline className="h-4 w-4" />
                    Crear cuenta de Egresado
                </Link>
            </div>
        </GuestLayout>
    );
}
