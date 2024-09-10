import ZodiacCard from "../components/ZodiacCard";
import { ZODIAC_NAMES } from "../constants/zodiac";

const Home = () => (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-20">
        {ZODIAC_NAMES.map((zodiac) => <ZodiacCard zodiac={zodiac} />)}
    </div>
)

export default Home; 