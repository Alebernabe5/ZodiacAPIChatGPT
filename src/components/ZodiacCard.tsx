import { Link } from "react-router-dom";
import { Zodiac } from "../types/zodiac";
import { getZodiacImage } from "../utils/getZodiacImage";
import { useMemo } from "react";

interface ZodiacCardProps {
    zodiac: Zodiac;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ zodiac }) => {
    const imageSrc = useMemo(() => getZodiacImage(zodiac),[zodiac]);
    return (
      <Link to={zodiac.toLowerCase()} className="w-60 h-60 rounded-lg flex justify-center items-center flex-col border-gray-800 border backdrop-blur-xl shadow-xl m-auto backdrop-brightness-50 hover:scale-125">
        <img src={imageSrc} alt={zodiac} className="w-36 h-36 rounded-full" />
        <h3 className="text-3xl text-white mt-3 py-2 text-center">{zodiac}</h3>
      </Link>
    )
  }
    export default ZodiacCard;
    
