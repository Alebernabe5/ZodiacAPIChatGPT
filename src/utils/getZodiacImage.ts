import aquariusImage from '../assets/aquarius.png';
import ariesImage from '../assets/aries.png';
import cancerImage from '../assets/cancer.png';
import capricornImage from '../assets/capricorn.png';
import geminiImage from '../assets/gemini.png';
import leoImage from '../assets/leo.png';
import libraImage from '../assets/libra.png';
import piscesImage from '../assets/pisces.png';
import saggitariusImage from '../assets/saggitarius.png';
import scorpioImage from '../assets/scorpio.png';
import taurusImage from '../assets/taurus.png';
import virgoImage from '../assets/virgo.png';
import { Zodiac } from '../types/zodiac';

const imageMap: Record<string, string> = {
    aquarius: aquariusImage,
    aries: ariesImage,
    cancer: cancerImage,
    capricorn: capricornImage,
    gemini: geminiImage,
    leo: leoImage,
    libra: libraImage,
    pisces: piscesImage,
    saggitarius: saggitariusImage,
    scorpio: scorpioImage,
    taurus: taurusImage,
    virgo: virgoImage,
}

export const getZodiacImage = (zodiac: Zodiac):string => imageMap[zodiac.toLocaleLowerCase()] || "";
