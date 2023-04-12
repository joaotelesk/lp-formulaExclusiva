import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-screen min-h-screen ">
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
        <section className="bg-white-400 h-auto py-16 ">
          <div className="container flex">
            <div className="container flex flex-wrap justify-around gap-12">
              <div className="bg-white-500 py-4 px-2 gap-x-4 h-20 min-w-[283px] max-w-[336px] rounded-s-full rounded-e-full flex justify-center  items-center">
                <Image
                  src="/Section2/figure1.svg"
                  width={70}
                  height={70}
                  alt=" imagem 1 de motivos para utlizar o produto "
                />
                <p className="text-black-200 lg:max-w-[200px] text-xl lg:text-base">
                  <span className="font-bold ">Reduz</span> a vontade de comer
                </p>
              </div>
              <div className="bg-white-500 py-4 px-2 gap-x-4 h-20 min-w-[283px] max-w-[336px] rounded-s-full rounded-e-full flex justify-center  items-center">
                <Image
                  src="/Section2/figure2.svg"
                  width={70}
                  height={70}
                  alt=" imagem 2 de motivos para utlizar o produto "
                />
                <p className="text-black-200 lg:max-w-[200px] text-xl lg:text-base">
                  <span className="font-bold ">Combate</span> as estrias e
                  celulites
                </p>
              </div>
              <div className="bg-white-500 py-4 px-2 gap-x-4 h-20 min-w-[283px] max-w-[336px] rounded-s-full rounded-e-full flex justify-center  items-center">
                <Image
                  src="/Section2/figure3.svg"
                  width={70}
                  height={70}
                  alt=" imagem 3 de motivos para utlizar o produto "
                />
                <p className="text-black-200 lg:max-w-[200px] text-xl lg:text-base">
                  <span className="font-bold ">Promove</span> melhorias na sua
                  saúde
                </p>
              </div>
              <div className="bg-white-500 py-4 px-2 gap-x-4 h-20 min-w-[283px] max-w-[336px] rounded-s-full rounded-e-full flex justify-center  items-center">
                <Image
                  src="/Section2/figure4.svg"
                  width={70}
                  height={70}
                  alt=" imagem 4 de motivos para utlizar o produto "
                />
                <p className="text-black-200 lg:max-w-[200px] text-xl lg:text-base">
                  <span className="font-bold ">Saudável</span> e 100% natural
                </p>
              </div>
              <div className="bg-white-500 py-4 px-2 gap-x-4 h-20 min-w-[283px] max-w-[336px] rounded-s-full rounded-e-full flex justify-center  items-center">
                <Image
                  src="/Section2/figure5.svg"
                  width={70}
                  height={70}
                  alt=" imagem 5 de motivos para utlizar o produto "
                />
                <p className="text-black-200 lg:max-w-[200px] text-xl lg:text-base">
                  <span className="font-bold ">Queima</span> gordura localizada
                </p>
              </div>
              <div className="bg-white-500 py-4 px-2 gap-x-4 h-20 min-w-[283px] max-w-[336px] rounded-s-full rounded-e-full flex justify-center  items-center">
                <Image
                  src="/Section2/figure6.svg"
                  width={70}
                  height={70}
                  alt=" imagem 6 de motivos para utlizar o produto "
                />
                <p className="text-black-200 lg:max-w-[200px] text-xl lg:text-base">
                  <span className="font-bold ">Acelera</span> o metabolismo
                </p>
              </div>
            </div>
          </div>
        </section>
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
                  Pensado para quem deseja emagrecer de maneira definitiva e
                  livre do efeito sanfona,{" "}
                  <span className="font-bold">Ultrad 7000</span> já conquistou o
                  mundo e foi aprovado em mais de 17 países como a verdadeira
                  fórmula para emagrecer com saúde e sem sofrimento.
                </p>
                <p className="max-w-sm">
                  A combinação exclusiva dentro das cápsulas formam uma espécie
                  de gel que proporciona uma poderosa ação inibidora de apetite,
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
        <section className="bg-MobBanner2 bg-cover lg:bg-auto lg:bg-DeskBanner2 bg-no-repeat  min-h-screen ">
          <div className="container flex flex-col items-center py-16">
            <h2 className="text-green-300 font-extrabold text-3xl lg:text-4xl max-w-xl text-center">
              FÓRMULA <span className="text-white-500">EXCLUSIVA</span> COM
              COMPOSTOS BIOATIVOS!
            </h2>
            <div className="flex gap-14 flex-wrap justify-around my-14">
              <div className="flex flex-col items-center gap-y-4">
                <Image
                  src="/Section4/figure1.svg"
                  width={106}
                  height={106}
                  alt="iamgem 1 dos beneficios"
                />
                <h3 className="font-extrabold text-green-300">
                  AJUDA RE​​​​​​​DUZIR A BARRIGA​​​​​​​
                </h3>
                <p className="max-w-xs text-center font-medium text-black-400">
                  Auxilia na absorção das moléculas de gordura dos alimentos
                  ingeridos, facilitando o organismo a gastar energia e a
                  queimar de gordura.
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <Image
                  src="/Section4/figure2.svg"
                  width={106}
                  height={106}
                  alt="iamgem 2 dos beneficios"
                />
                <h3 className="font-extrabold text-green-300">
                  ACELERA O METABOLISMO​​​​​​​{" "}
                </h3>
                <p className="max-w-xs text-center font-medium text-black-400">
                  Ajuda a corrigir os danos metabólicos causados pela idade,
                  toxinas e outros fatores, resultando em um metabolismo mais
                  rápido e mais eficiente que trabalha a seu favor e não contra
                  você.
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <Image
                  src="/Section4/figure3.svg"
                  width={106}
                  height={106}
                  alt="iamgem 3 dos beneficios"
                />
                <h3 className="font-extrabold text-green-300">
                  QUEIMA DE GORDURA
                </h3>
                <p className="max-w-xs text-center font-medium text-black-400">
                  Contém ativos poderosos que ajudam a controlar o acúmulo de
                  gordura na região abdominal (Adipogênese).
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <Image
                  src="/Section4/figure4.svg"
                  width={106}
                  height={106}
                  alt="iamgem 4 dos beneficios"
                />
                <h3 className="font-extrabold text-green-300">
                  CONTROLA O APETITE​​​​​​​
                </h3>
                <p className="max-w-xs text-center font-medium text-black-400">
                  Ajuda na Moderaçāo do apetite, diminuindo a compulsão por
                  doces, auxiliando na saciedade, evitando o consumo
                  desnecessário de alimentos.​​​​​​​
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <Image
                  src="/Section4/figure5.svg"
                  width={106}
                  height={106}
                  alt="iamgem 5 dos beneficios"
                />
                <h3 className="font-extrabold text-green-300">
                  COMBATE A CELULITE​​​​​​​
                </h3>
                <p className="max-w-xs text-center font-medium text-black-400">
                  Age como anti-inflamatório natural que auxiliam a combater a
                  celulite que advém do excesso de tecido adiposo.
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <Image
                  src="/Section4/figure6.svg"
                  width={106}
                  height={106}
                  alt="iamgem 6 dos beneficios"
                />
                <h3 className="font-extrabold text-green-300">
                  EMAGRECE NATURALMENTE​​​​​​​
                </h3>
                <p className="max-w-xs text-center font-medium text-black-400">
                  A fórmula traz ativadores bioativos naturais que auxiliam na
                  quebra do tecido adiposo
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
