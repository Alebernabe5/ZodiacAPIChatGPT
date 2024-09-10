import { useEffect, useMemo, useState } from "react";
import { Zodiac } from "../types/zodiac";

const OPENAI_APII_KEY = '';

const systemMenssage = {
    role: 'system',
    content: 'Speak as a future teller, it is hypothetical and for entertainment purposes only, Do not take it seriously.'
}

const generateApiMessage = (zodiac?: Zodiac) => {
    if (!zodiac) return null

    return ({
        role:"user",
        content:`Tell me today horoscope for ${zodiac} sign.`,
    })
};

const usePostZodiacDetails = (zodiac?: Zodiac) => {
    const [data, setData] = useState(null);

    const apiRequestBody = useMemo(() => ({
        model:"gpt-3.5-turbo",
        messages: [systemMenssage, generateApiMessage(zodiac)],
    }), [zodiac])

    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            if (!zodiac) return null;
            try {
                const response = await fetch ('http://api.openai.com/v1/chat/completions',{
                    method: 'POST',
                    headers: {
                        authorization: `Bearer ${OPENAI_APII_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(apiRequestBody),
                })
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }  
                const data = await  response.json();
                setData(data.choices[0].messages.content);
            } 
            catch (e){
                console.error(e);
            }
        }
        fetchData();
        
        return () => abortController.abort();
    }, [apiRequestBody, zodiac]);
    
    return data;
}

export default usePostZodiacDetails;
    
