// Components
import { CardSection2 } from "@/components/CardSection2";

// Utilities
// Interfaces
// Hooks

export function Section2() {
  return (
    <>
      <section className="bg-white-400 h-auto py-16 ">
        <div className="container flex">
          <div className="container flex flex-wrap justify-around gap-12">
            <CardSection2
              image="/Section2/figure1.svg"
              size={70}
              alt="imagem 1 de motivos para utlizar o produto"
              textPrimary="Reduz"
              textSecondary=" as estrias e
              celulites"
            />
            <CardSection2
              image="/Section2/figure2.svg"
              size={70}
              alt="imagem 2 de motivos para utlizar o produto"
              textPrimary="Combate"
              textSecondary=" a vontade de comer"
            />
            <CardSection2
              image="/Section2/figure3.svg"
              size={70}
              alt="imagem 3 de motivos para utlizar o produto"
              textPrimary="Promove"
              textSecondary=" melhorias na sua
              saúde"
            />
            <CardSection2
              image="/Section2/figure4.svg"
              size={70}
              alt="imagem 4 de motivos para utlizar o produto"
              textPrimary="Saudável"
              textSecondary=" e 100% natural"
            />
            <CardSection2
              image="/Section2/figure5.svg"
              size={70}
              alt="imagem 5 de motivos para utlizar o produto"
              textPrimary="Queima"
              textSecondary=" gordura localizada"
            />
            <CardSection2
              image="/Section2/figure6.svg"
              size={70}
              alt="imagem 6 de motivos para utlizar o produto"
              textPrimary="Acelera"
              textSecondary=" o metabolismo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
