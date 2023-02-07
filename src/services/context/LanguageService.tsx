import React, { ReactNode } from 'react'
import { LanguageModel } from '../../models/LanguageModel'
import en from '../../assets/locales/en.json';
import he from '../../assets/locales/he.json';


interface LanCtxt{
    language:LanguageModel, 
    getLangOpts?: () =>  LangOpt[],
    changeLangHandler?: (langName: string) => void
}

export const LanguageCtst = React.createContext<LanCtxt>({language:en});


interface Props{
    children:ReactNode
}

export interface Languages{
    [k: string]: LanguageModel
}
export interface LangOpt{
    key:string,
    name: string
}



export const LanguageService: React.FC<Props> = ({children}) => {
    
    const languages:Languages = {en,he}
    const [language, setLanguage] = React.useState(languages["en"]);

    const getLangOpts = ():LangOpt[] => {
        return Object.entries(languages).map(lan => {
            return {
                key:lan[0],
                name:lan[1].language
            }
        })
    }

    const changeLangHandler = (langName:string ) => {
        if(!!languages[langName].workout){
            setLanguage(languages[langName]);
        }
    }



  return (
    <LanguageCtst.Provider value={{language, getLangOpts ,changeLangHandler}}>
        {children}
    </LanguageCtst.Provider>
  )
}
