import { useMenuValue } from "../contexts/MenuContext"

export function Nav() {
    const {setOpenMenu} = useMenuValue()
    return (
        <div className="text-white font-bold absolute font-sans md:max-w-full md:w-screen  flex w-[600px]  items-center px-8 h-10 justify-between">
            <h1 className="text-3xl">Nunes <span className="text-[#e65555]">pizza</span>.</h1>
            <ul className="flex gap-6 text-2xl">
                <li><a href="#About">Sobre</a></li>
                <li className="cursor-pointer" onClick={() => setOpenMenu(true)}>Cardápio</li>
                <li><a href="#Contact">Contatos</a></li>
            </ul>
        </div>
    )
}