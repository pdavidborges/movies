import Image from "next/image";
import Link from "next/link";

export function Header(){
    return(
        
        <header className="z-20 bg-brand-dark/60 backdrop-blur-md bg-op flex flex-col gap-y-3 justify-between items-center p-6 fixed top-0 w-full sm:flex-row">

            <Link href='/'>
                <Image src='/img/logo.svg' width={130} height={50} alt="Logo" quality={75} />
            </Link>

            <nav className="flex gap-14">
                <Link href='/' className="text-white hover:text-brand-light hover:underline">Início</Link>
                <Link href='/filmes' className="text-white hover:text-brand-light hover:underline">Filmes</Link>
                <Link href='/series' className="text-white hover:text-brand-light hover:underline">Series</Link>
            </nav>

        </header>

    )
}
