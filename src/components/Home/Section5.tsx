// Components
import Image from "next/image";
import Link from "next/link";

// Utilities
// Interfaces
// Hooks

export function Section5() {
  return (
    <>
      <section className="min-h-screen py-20 px-10 flex flex-col items-center">
        <h2 className="text-[2.4375rem] font-extrabold text-yellow mb-5 max-w-[502px] text-center leading-10">
          <span className="text-green-300">QUEM COMPRA,</span> APROVA E
          RECOMENDA
        </h2>
        <p className=" max-w-3xl text-center text-black-200">
          Ultrad 7000 é a solução perfeita para quem busca emagrecer de forma
          rápida e saudável Veja os resultados de quem já usou Ultrad 7000
        </p>
        <div className="container items-center  flex flex-col lg:flex-row justify-center gap-8  my-20">
          <Image
            src="/Section5/figure1.png"
            width={368}
            height={429}
            alt="figure1-section5"
          />
          <Image
            src="/Section5/figure2.png"
            width={368}
            height={429}
            alt="figure2-section5"
          />
          <Image
            src="/Section5/figure3.png"
            width={368}
            height={429}
            alt="figure3-section5"
          />
        </div>
        <Link href="#" className="lg:top-0 mb-5">
          <div className="bg-yellow h-20 lg:h-16 w-full lg:w-80 rounded-s-full rounded-e-full  flex justify-center items-center hover:bg-green-300 transform duration-300 text-white-500 px-10 lg:px-0">
            <span className="text-lg text-center font-bold">
              SIM! EU QUERO EMAGRECER
            </span>
          </div>
        </Link>
        <Image
          src="/formasPagamento-sm.png"
          width={312}
          height={33}
          alt="Formas de pagamento - sm"
        />
      </section>
    </>
  );
}
