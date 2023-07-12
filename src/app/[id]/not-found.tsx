import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <Link href="/" className="text-fuchsia-500"> ← Volver atrás </Link>
            <div className="h-screen w-full grid place-content-center text-center" >
                <h1 className="text-fuchsia-800 font-bold text-9xl" >404</h1>
                <p className="text-2xl mt-4">Pregunta no encontrada</p>
            </div>
        </>
    );
}