import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

export function Footer() {
  return (
    <>
      <footer className="bg-white-500 w-full flex flex-col gap-y-4">
        <section className="bg-yellow flex justify-center gap-x-2 items-center">
          <FiInstagram size={34} className="text-green-300" />
          <p className="text-green-300 text-xl font-medium py-7">
            Nos Acompanhe No Instagram
          </p>
        </section>
        <section className="container flex flex-col">
          <div className="flex justify-around flex-wrap my-10">
            <div className="flex flex-col items-center gap-y-2 font-medium text-black-500">
              <h3>Certificados de Segurança</h3>
              <Image
                src="/certificadosSeguranca.svg"
                width={400}
                height={76}
                alt="imagems dos sertificados de segurança do site"
              />
            </div>
            <div className="flex flex-col items-center gap-y-4 font-medium text-black-500">
              <h3>Formas de pagamento</h3>
              <Image
                src="/formasPagamento.svg"
                width={400}
                height={96}
                alt="imagems dos sertificados de segurança do site"
              />
            </div>
          </div>
          <hr className="text-white-200" />
          <div className="flex justify-around flex-wrap my-7 gap-y-5">
            <div className="flex flex-col items-center  font-normal text-black-300 text-sm">
              <h3 className="text-black-500 font-medium text-base mb-4">
                Empresa​
              </h3>
              <p className="mx-auto max-w-[258px] text-center">
                Saude Eficiente Comercio Alimenticio Ltda CNPJ:
                00.0000.000/0001-00
              </p>
            </div>
            <div className="flex flex-col items-center  font-normal text-black-300 text-sm">
              <h3 className="text-black-500 font-medium text-base mb-4">
                Fale Conosco
              </h3>
              <p className="mx-auto max-w-[258px] text-center">
                Fale conosco através dos nosso canais de Segunda a Sexta das 9
                horas as 17 horas. E-mail: suporte@alisantehairmadeperfect.com
              </p>
            </div>
            <div className="flex flex-col items-center  font-normal text-black-300 text-sm">
              <h3 className="text-black-500 font-medium text-base mb-4">
                Entrega Garantida
              </h3>
              <p className="mx-auto max-w-[280px] text-center">
                O prazo de entrega é de 3 a 10 dias úteis você receber no
                conforto da sua casa
              </p>
              <Link
                href="#"
                className=" bg-yellow rounded-sm text-white-500 py-3 px-6 mt-5 hover:bg-green-400 transform duration-200"
              >
                Rastreio
              </Link>
            </div>
          </div>
          <hr className="text-white-200" />

          <div className="flex flex-col flex-wrap mt-9 text-center">
            <p className="text-black-300 font-normal text-sm">
              Copyright © 2021 Saude Eficiente Comercio Alimenticio. Todos os
              direitos reservados. Todo o conteúdo do site, todas as fotos,
              imagens, logotipos, marcas, layout, aqui veiculados são de
              propriedade exclusiva da Saude Eficiente Comercio Alimenticio. É
              vedada qualquer reprodução, total ou parcial, de qualquer elemento
              de identidade, sem expressa autorização. A violação de qualquer
              direito mencionado implicará na responsabilização cível e criminal
              nos termos da Lei.
            </p>
            <div className="flex items-center justify-center gap-x-3 mt-5">
              <div className="rounded-full bg-red w-2 h-2" />
              <span className="text-xs font-normal text-gray">
                Políticas de Privacidade
              </span>
            </div>
          </div>
        </section>

        <section>
          <p className="text-black-600"></p>
        </section>
        <div className="bg-black-600 py-5 flex items-center justify-center gap-x-1 w-full">
          <p className={` font-sans font-extralight text-white-300 text-sm`}>
            Desenvolvido por
          </p>
          <Image
            src="/logoDev.svg"
            width={88}
            height={10}
            alt="logo do desenvolvedor - joaotelesk"
          />
        </div>
      </footer>
    </>
  );
}
