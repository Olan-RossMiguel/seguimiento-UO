import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Crear cuenta" />

            {/* Encabezado */}
            <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800">
                    Crear cuenta de Egresado
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                    Únete a la red de egresados de la Universidad Olmeca
                </p>
            </div>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="name" value="Nombre completo" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        placeholder="Tu nombre completo"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-1" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Correo Electrónico" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        placeholder="nombre@olmeca.edu.mx"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
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
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-1" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmar contraseña"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-1"
                    />
                </div>

                {/* Botón ancho completo + link login */}
                <div className="flex flex-col gap-3 pt-1">
                    <PrimaryButton
                        className="w-full justify-center"
                        disabled={processing}
                    >
                        Crear cuenta →
                    </PrimaryButton>
                    <p className="text-center text-sm text-gray-500">
                        ¿Ya tienes cuenta?{' '}
                        <Link
                            href={route('login')}
                            className="font-semibold text-[#6b7c3f] hover:underline"
                        >
                            Inicia sesión
                        </Link>
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}
