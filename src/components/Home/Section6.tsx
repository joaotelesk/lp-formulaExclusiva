// Components
import { CardCommune } from "../Common/CardCommune";

// Utilities
// Interfaces
// Hooks

export function Section6() {
  return (
    <>
      <section className="bg-white-400 min-h-screen py-24 px-10 flex flex-col items-center">
        <h2 className="text-[2.4375rem] font-extrabold text-yellow mb-5 max-w-[563px] text-center leading-10">
          <span className="text-green-300">CONHEÇA A FORMULAÇÃO</span> DO ULTRAD
          7000
        </h2>

        <div className="container items-baseline  flex flex-col lg:flex-row justify-center gap-10  my-10">
          <CardCommune
            image="/Section6/figure1.png"
            size={180}
            alt="figure1-section6"
            title="Quitosana"
            description="Fibra capaz de se conectar com a gordura no trato digestivo, evitando, que possa ser absorvida pelo corpo e elimina particulas de gordura para fora do corpo pelas fezes."
          />
          <CardCommune
            image="/Section6/figure2.png"
            size={180}
            alt="figure2-section6"
            title="Quitosana"
            description="Fibra capaz de se conectar com a gordura no trato digestivo, evitando, que possa ser absorvida pelo corpo e elimina particulas de gordura para fora do corpo pelas fezes."
          />
          <CardCommune
            image="/Section6/figure3.png"
            size={180}
            alt="figure3-section6"
            title="Psyllium"
            description="É um tipo de fibra que ajuda no controle do apetite, fazendo com que nosso corpo absorva menos gorduras e colesterol."
          />
          <CardCommune
            image="/Section6/figure4.png"
            size={180}
            alt="figure4-section6"
            title="Cromo"
            description="Ajuda emagrecer, pois ajuda na redução da glicemia, ganho de massa muscular e perda de peso, principalmente na região abdominal."
          />
        </div>
      </section>
    </>
  );
}
