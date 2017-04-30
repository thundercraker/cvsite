import * as React from "react"

const LanguageTag = (lang: string) => {
    let ltrim = lang.trim()
    let cname = "proglangs " + ltrim.toLowerCase()
    return (
        <div key={ltrim} className={cname}>{ltrim}</div>
    )
}

const LanguageTagA = (lang: string, cName: String) => {
    let cname = "proglangs " + cName.toLowerCase()
    return (
        <div key={lang} className={cname}>{lang}</div>
    )
}

export {LanguageTag,LanguageTagA}