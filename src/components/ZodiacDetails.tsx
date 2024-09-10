import { useMemo } from "react";
import { Link, useParams } from "react-router-dom"
import { getZodiacImage } from "../utils/getZodiacImage";
import { Zodiac } from "../types/zodiac";
import usePostZodiacDetails from "../hooks/usePostZodiacDetails";
import Loading from "./Loading";


const ZodiacDetails = () => {
    const { zodiac } = useParams();
    const data = usePostZodiacDetails(zodiac as Zodiac);
    const imageSrc= useMemo (() => getZodiacImage(zodiac as Zodiac), [zodiac]);

    return(
        <div className="w-3/4 p-12 mt-9 rounded-lg flex justify-center items-center flex-col border-gray-800 border backdrop-blur-xl backdrop-brightness-50  shadow-xl m-auto">
            <img src={imageSrc} alt={zodiac} className="w-36 h36 rounded-full"/>
            {data ? <p className=" text-xl text-white w-full mt-3 py-2 text-center">{data}</p> :<Loading />}
            <Link to="/"><button className=" text-xl text-white my-5">Back to Home</button></Link>
        </div>
    )
}

export default ZodiacDetails;