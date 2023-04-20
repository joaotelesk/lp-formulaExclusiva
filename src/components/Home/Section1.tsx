// Components
import Link from "next/link";

// Utilities
// Interfaces
// Hooks

export function Section1() {
  return (
    <>
      <section className="bg-MobBanner1 bg-cover lg:bg-auto lg:bg-DeskBanner1 bg-no-repeat  min-h-screen lg:min-h-full pb-10  bg-top mb-32 lg:mb-0 ">
        <div className="container pt-5 text-center lg:text-left lg:pt-24">
          <span className="font-bold text-lg text-green-300">
            Emagreça muito mais rápido!
          </span>
          <h2 className="text-3xl lg:text-5xl font-black mx-auto lg:mx-0 max-w-sm lg:max-w-md mt-2 text-white-500">
            SEM DIETAS MALUCAS OU{" "}
            <span className="text-green-300">EXERCÍCIOS FÍSICOS</span>
          </h2>
          <p className="font-normal text-lg text-left lg:text-base max-w-[255px] lg:max-w-[355px] mt-2 text-white-400 my-10 mb-96 lg:mb-10">
            <span className="text-green-300">Ultrad 7000</span> é um poderoso
            suplemento que acelera o seu metabolismo, diminui o inchaço e a
            retenção dos líquidos do seu corpo, elimina as substâncias
            inflamatórias e te faz emagrecer de forma rápida, saudável e
            definitiva.
          </p>

          <Link href="#" className="relative top-36 lg:top-0 ">
            <div className="bg-yellow h-20 lg:h-16 w-full lg:w-80 rounded-md flex justify-center items-center text-green-300 hover:bg-green-300 transform duration-300 hover:text-white-500">
              <span className="text-lg  font-bold ">
                SIM! EU QUERO EMAGRECER
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
