import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import { Swiper, SwiperSlide } from "swiper/react";

import { IoHomeSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";

const Views = () => {
  return (
    <>
      <div className="cardPersonal">photo </div>
    </>
  );
};

const ViewsUm = () => {
  return (
    <>
      <div className="cardPersonal">mypersonal </div>
    </>
  );
};

const ViewsDois = () => {
  return (
    <>
      <div className="cardPersonal">sla </div>
    </>
  );
};

function App() {
  const ViewsCarrossel = [
    { id: 1, view: <Views /> },
    { id: 2, view: <ViewsUm /> },
    { id: 3, view: <ViewsDois /> },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="title">
          <h1>Bem vindo ao meu portfolio</h1>
          <h4>Aqui eu guardo minhas pérolas(projetos)</h4>
        </section>
        <section className="myphoto">
          <div className="photo">photo</div>
          <div className="paragraphpersonal">
            <p>
              Um jovem de 17 anos com muitos sonhos e objetivos em mente,
              buscando ampliar seu conhecimento e compartilhar os mesmos. Me
              chamo Caio Felpe Vieira Ferreira e esse é meu portfolio de
              projetos pessoal, você verá aqui, meus projetos, meus objetivos, e
              meu desenvolvimento na carreira!
            </p>
          </div>
        </section>

        <div className="carrossel">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="conteudo-swiper"
          >
            {ViewsCarrossel.map((item) => (
              <SwiperSlide key={item.id}>
                <div>{item.view}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <section className="areasButtonsCards">
          <div className="buttonCard">
            <IoHomeSharp className="icon" />
            Home
          </div>
          <div className="buttonCard">
            <FaBook className="icon" />
            Estudos
          </div>
          <div className="buttonCard">
            <GiStairsGoal className="icon" />
            Metas
          </div>
          <div className="buttonCard">
            <MdMarkEmailRead className="icon" />
            Contate-me
          </div>
        </section>
        <div className="projects">
          <section className="apresentation"></section>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default App;
