export function Nav() {
    return (
        <div className="text-white font-bold absolute font-sans max-w-full flex w-screen items-center px-8 h-10 justify-between">
            <h1 className="text-3xl">Nunes <span className="text-[#e65555]">pizza</span>.</h1>
            <ul className="flex gap-6 text-2xl">
                <li><a href="#About">Sobre</a></li>
                <li>Cardápio</li>
                <li><a href="#Contact">Contatos</a></li>
            </ul>
        </div>
    )
}