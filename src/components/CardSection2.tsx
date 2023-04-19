// Components
import Image from "next/image";

// Utilities
// Interfaces
interface CardSection2Props {
  image: string;
  size: number;
  alt: string;
  textPrimary: string;
  textSecondary: string;
}

// Hooks

export function CardSection2({
  image,
  alt,
  size,
  textPrimary,
  textSecondary,
}: CardSection2Props) {
  return (
    <>
      <div className="bg-white-500 py-4 px-2 gap-x-4 h-20 min-w-[283px] max-w-[336px] rounded-s-full rounded-e-full flex justify-center  items-center">
        <Image src={image} width={size} height={size} alt={alt} />
        <p className="text-black-200 lg:max-w-[200px] text-xl lg:text-base">
          <span className="font-bold ">{textPrimary}</span>
          {textSecondary}
        </p>
      </div>
    </>
  );
}
