// Components
import { CardCommune } from "@/components/CardCommune";
import Image from "next/image";

// Utilities
// Interfaces
// Hooks

export function Section4() {
  return (
    <>
      <section className="bg-MobBanner2 bg-cover lg:bg-auto lg:bg-DeskBanner2 bg-no-repeat  min-h-screen ">
        <div className="container flex flex-col items-center py-16">
          <h2 className="text-green-300 font-extrabold text-3xl lg:text-4xl max-w-xl text-center">
            FÓRMULA <span className="text-white-500">EXCLUSIVA</span> COM
            COMPOSTOS BIOATIVOS!
          </h2>
          <div className="flex gap-14 flex-wrap justify-around my-14">
            <CardCommune
              image="/Section4/figure1.svg"
              size={106}
              alt="imagem 1 dos beneficios"
              title="AJUDA RE​​​​​​​DUZIR A BARRIGA​​​​​​​"
              description="Auxilia na absorção das moléculas de gordura dos alimentos ingeridos, facilitando o organismo a gastar energia e a queimar de gordura."
            />
            <CardCommune
              image="/Section4/figure2.svg"
              size={106}
              alt="imagem 2 dos beneficios"
              title="QUEIMA DE GORDURA"
              description="Ajuda a corrigir os danos metabólicos causados pela idade, toxinas e outros fatores, resultando em um metabolismo mais rápido e mais eficiente que trabalha a seu favor e não contra você."
            />
            <CardCommune
              image="/Section4/figure3.svg"
              size={106}
              alt="imagem 3 dos beneficios"
              title="ACELERA O METABOLISMO​​​​​​​"
              description="Contém ativos poderosos que ajudam a controlar o acúmulo de gordura na região abdominal (Adipogênese)."
            />
            <CardCommune
              image="/Section4/figure4.svg"
              size={106}
              alt="imagem 4 dos beneficios"
              title="CONTROLA O APETITE​​​​​​​​​​​​​​"
              description="Ajuda na Moderaçāo do apetite, diminuindo a compulsão por doces, auxiliando na saciedade, evitando o consumo desnecessário de
              alimentos.​​​​​​​"
            />
            <CardCommune
              image="/Section4/figure5.svg"
              size={106}
              alt="imagem 5 dos beneficios"
              title="COMBATE A CELULITE​​​​​​​​​​​​​​​​​​​​​"
              description="Age como anti-inflamatório natural que auxiliam a combater a celulite que advém do excesso de tecido adiposo.​​​​​​​"
            />
            <CardCommune
              image="/Section4/figure6.svg"
              size={106}
              alt="imagem 6 dos beneficios"
              title="EMAGRECE NATURALMENTE​​​​​​​"
              description="A fórmula traz ativadores bioativos naturais que auxiliam na quebra do tecido adiposo​​​​​​​"
            />
          </div>
        </div>
      </section>
    </>
  );
}
