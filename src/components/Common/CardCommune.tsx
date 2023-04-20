// Components
import Image from "next/image";

// Utilities
// Interfaces
interface CardCommuneProps {
  image: string;
  size: number;
  alt: string;
  title: string;
  description: string;
}

// Hooks

export function CardCommune({
  image,
  size,
  alt,
  title,
  description,
}: CardCommuneProps) {
  return (
    <>
      <div className="flex flex-col items-center gap-y-4 ">
        <Image src={image} width={size} height={size} alt={alt} />
        <h3 className="font-extrabold text-green-300">{title}</h3>
        <p className="max-w-xs text-center font-medium text-black-400">
          {description}
        </p>
      </div>
    </>
  );
}
