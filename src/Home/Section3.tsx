// Components
import Image from "next/image";
import Link from "next/link";

// Utilities
// Interfaces
// Hooks

export function Section3() {
  return (
    <>
      <section className="min-h-screen py-20 px-10 flex flex-col items-center">
        <div className="container flex flex-col items-center mb-10">
          <div className="flex flex-col lg:flex-row  justify-around gap-5">
            <Image
              src="/Section3.png"
              width={489}
              height={578}
              alt="imagem da section 3"
            />
            <div className="bg-white-400  rounded-xl py-10 px-6 lg:p-16 text-lg text-black-500">
              <h3 className=" text-4xl lg:text-5xl font-extrabold text-green-300 mb-5">
                EMAGRECER COM SAÚDE{" "}
                <span className="text-yellow">É POSSÍVEL SIM !</span>
              </h3>
              <p className="mb-5 max-w-sm">
                Pensado para quem deseja emagrecer de maneira definitiva e livre
                do efeito sanfona,{" "}
                <span className="font-bold">Ultrad 7000</span> já conquistou o
                mundo e foi aprovado em mais de 17 países como a verdadeira
                fórmula para emagrecer com saúde e sem sofrimento.
              </p>
              <p className="max-w-sm">
                A combinação exclusiva dentro das cápsulas formam uma espécie de
                gel que proporciona uma poderosa ação inibidora de apetite,
                permitindo o emagrecimento rápido e saudável.
              </p>
            </div>
          </div>
        </div>

        <Link href="#" className="  lg:top-0 ">
          <div className="bg-yellow h-20 lg:h-16 w-full lg:w-80 rounded-s-full rounded-e-full  flex justify-center items-center hover:bg-green-300 transform duration-300 text-white-500 px-10 lg:px-0">
            <span className="text-lg text-center font-bold ">
              SIM! EU QUERO EMAGRECER
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}
