import AOS from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import { Nav } from "../components/Navigation"
import Image from "next/image"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import client1 from "../assets/avatar-1.png"
import client2 from "../assets/avatar-2.png"
import client3 from "../assets/avatar-3.png"
import { BsFillTelephoneFill } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { AiFillInstagram, AiOutlineWhatsApp  } from "react-icons/ai"


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { MenuProvider } from "../contexts/MenuContext"
import { Menu } from "../components/Menu"





export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out' })
  })
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <MenuProvider value={{openMenu, setOpenMenu}}>
      <div id="Home" className="w-screen max-w-full">
        <Menu/>
        <Nav />
        <div className="md:w-full w-[600px] shadow-xl flex items-center h-[440px] bg-home bg-no-repeat bg-cover  text-5xl md:text-7xl text-white font-medium  "><p data-aos="fade-right" className="w-3/4 ml-10">Bem vindo a <strong className="font-extrabold">Nunes pizzaria</strong>, venha apreciar uma boa pizza.</p> </div>
        <div data-aos="fade-up" className="flex md:w-full gap-7 px-10 md:gap-10 justify-between md:px-36 mt-32 w-[600px] pb-20 text-2xl font-bold text-white" >
          <p className=" md:w-1/3 w-44 h-44 md:h-72 bg-pizza bg-cover bg-no-repeat rounded flex items-end justify-center shadow-2xl">Pizzas</p>
          <p className=" md:w-1/3 w-44 h-44 md:h-72  bg-carne bg-no-repeat rounded flex items-end justify-center shadow-2xl">Carnes</p>
          <p className=" md:w-1/3 w-44 h-44 md:h-72 bg-sushi bg-cover bg-no-repeat rounded flex items-end justify-center shadow-2xl">Sushis</p>
        </div>
      </div>

      <div id="About" className="h-screen w-screen max-w-full">
        <div data-aos="fade-right" className="md:w-full w-[600px] h-44 mt-28 shadow-xl bg-[#bf4949] px-10 pt-5">
          <h2 className="text-white font-bold text-5xl">Sobre nós:</h2>
          <p className="md:text-2xl text-xl font-semibold text-white mt-5">Surgimos em 2019, com objetivo de conquistar o público limoeirense com a maior qualidade e bom gosto possível.</p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="md:w-[60%] w-[580px] h-60 flex flex-col mt-20 shadow-xl bg-white rounded-md text-black justify-center absolute items-center"
        >
          <SwiperSlide className="w-72 px-10 py-12 shadow-xl">
            <div className="w-full flex items-center gap-2 text-xl justify-start px-32">
              <Image className="w-12 h-12 rounded-full" src={client1} alt={""} />
              <strong>
                Caio Ribeiro
              </strong>
            </div>
            <p className="-w-full text-center ">Essa é a melhor pizzaria de Limoeiro-PE, para mim a melhor opção é a pizza de bolonhesa</p>
          </SwiperSlide>
          <SwiperSlide className="w-72 px-10 py-12 shadow-xl">
            <div className="w-full flex items-center gap-2 text-xl justify-start px-32">
              <Image className="w-12 h-12 rounded-full" src={client2} alt={""} />
              <strong>
                Natália Guittler
              </strong>
            </div>
            <p className="-w-full text-center ">Nunca comi um sushi tão bom, altamente recomendo, peçam o temaki de salmão frito, um delícia...</p>
          </SwiperSlide>
          <SwiperSlide className="w-72 px-10 py-12 shadow-xl">
            <div className="w-full flex items-center gap-2 text-xl justify-start px-32">
              <Image className="w-12 h-12 rounded-full" src={client3} alt={""} />
              <strong>
                Sílvio Luís
              </strong>
            </div>
            <p className="-w-full  text-center ">Amei a picanha, muito bem localizado, ótima comida, ótimo atendimento, enfim, lugar perfeito.</p>
          </SwiperSlide>
        </Swiper>

      </div>
      <div data-aos="fade-up" id="Contact" className=" flex gap-20 w-[600px] md:w-full h-[20%] px-10 bg-[#831313]">
        <div>
          <h2 className="text-2xl flex items-center gap-2 pt-20 py-2 text-white font-bold ">Email: <p className="text-xl">nunespizza@gmail.com</p></h2>
          <h2 className="text-2xl flex items-center gap-2 py-2 text-white font-bold "><CiLocationOn /> <p className="text-xl">Limoeiro/PE</p></h2>
          <h2 className="text-2xl flex items-center gap-2 py-2 text-white font-bold "><BsFillTelephoneFill /> <p className="text-xl">(81) 99407-2554</p></h2>
          <h2 className="text-2xl flex items-center gap-2 py-2 text-white font-bold "><AiFillInstagram /> <a href="https://www.instagram.com/nunes.pizzaria.oficial/" target="_blank">nunes.pizzaria.oficial</a></h2>
        </div>
        <div>
          <button className="text-xl border items-center mt-48 hover:bg-red-400 hover:duration-300 hover:opacity-75  gap-2 flex rounded-full px-4 py-2 text-white border-white"><AiOutlineWhatsApp />Faça seu pedido</button>
        </div>
      </div>
    </MenuProvider>

  )
}
