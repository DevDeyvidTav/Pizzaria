import { useMenuValue } from "../contexts/MenuContext"
import { AiOutlineWhatsApp  } from "react-icons/ai"

export function Menu() {
    const { openMenu, setOpenMenu } = useMenuValue()
    return (
        <div className={`${openMenu ? 'translate-x-0' : '-translate-x-full'} md:w-screen h-screen w-[600px] z-40 flex justify-center fixed duration-300 md:bg-black opacity-90`}>
            <div className="md:w-[60%] w-[95%] h-screen shadow-2xl shadow-black bg-menuPizza bg-cover bg-no-repeat px-8 md:px-16 py-10 gap-5 ">
                <div className="grid grid-cols-2 w-full h-[90%]">
                    <div className="flex justify-between text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>pizza de Calabresa</p>
                        <p>.................</p>
                        <p>R$35</p>
                    </div>
                    <div className="flex justify-between text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>pizza de Filé</p>
                        <p>.................</p>
                        <p>R$35</p>
                    </div>
                    <div className="flex justify-between text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>pizza de Strogonoff</p>
                        <p>.................</p>
                        <p>R$35</p>
                    </div>
                    <div className="flex justify-between text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>pizza de Napolitana</p>
                        <p>.................</p>
                        <p>R$35</p>
                    </div>
                    <div className="flex justify-between text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>pizza de 4 queijos</p>
                        <p>.................</p>
                        <p>R$35</p>
                    </div>
                    <div className="flex justify-between text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>pizza de Frango</p>
                        <p>.................</p>
                        <p>R$35</p>
                    </div>
                    <div className="flex justify-between text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>pizza de peperoni</p>
                        <p>.................</p>
                        <p>R$35</p>
                    </div>

                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>Picanha</p>
                        <p>.................</p>
                        <p className="text-base" >meia: R$65</p>
                        <p className="text-base">inteira: R$96</p>
                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>Cupim</p>
                        <p>.................</p>
                        <p className="text-base" >meia: R$40</p>
                        <p className="text-base">inteira: R$70</p>
                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>Churrasco</p>
                        <p>.................</p>
                        <p className="text-base" >meia: R$35</p>
                        <p className="text-base">inteira: R$60</p>
                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>Carne de sol</p>
                        <p>.................</p>
                        <p className="text-base" >meia: R$35</p>
                        <p className="text-base">inteira: R$70</p>
                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>Filé com fritas</p>
                        <p>.................</p>
                        <p className="text-base" >R$45</p>

                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>combo sushi 10 peças e 1 temaki</p>
                        <p>.................</p>
                        <p>R$25</p>
                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>combo sushi 20 peças e 1 temaki</p>
                        <p>.................</p>
                        <p>R$35</p>
                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>combo sushi 30 peças e 1 temaki</p>
                        <p>.................</p>
                        <p>R$40</p>
                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>temaki de salmão</p>
                        <p>.................</p>
                        <p>R$15</p>
                    </div>
                    <div className="flex justify-between items-center text-white text-xl font-bold w-full h-10 hover:opacity-50 p-1 rounded-md hover:duration-700 hover:bg-red-400">
                        <p>temaki de camarão</p>
                        <p>.................</p>
                        <p>R$20</p>
                    </div>
                </div>
                <div
                className="w-full flex justify-center gap-6 text-white text-xl"
                >
                    <button
                    className="p-2 bg-red-400 rounded-md"
                    onClick={() => setOpenMenu(false)}
                    >
                    Fechar
                    </button>
                    <button
                    className="p-2 bg-green-500 rounded-md flex items-center hover:bg-green-400 hover:duration-[400ms] justify-center gap-2"
                    >
                    < AiOutlineWhatsApp className="w-7 h-7" />
                    Fazer um pedido
                    </button>
                </div>
            </div>
        </div>
    )
}