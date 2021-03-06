import React from "react"
import decoration from "../assets/shirt.svg";
import signature from "../assets/Signature.svg";

export const About = () => {
    return (
        <>
            <div id={"about"} className={"row section__about"}>
                <div id={"about__wrapper"} className={"col-6 about__container"}>
                    <h2 className={"about__header"}>O nas</h2>
                    <img className={"about__decoration"} src={decoration} alt={"decoration"}/>
                    <p className={"about__text"}>Nori grape silver beet broccoli kombu beet greens fava bean potato
                        quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <img className={"about__signature"} src={signature} alt={"signature"}/>
                </div>
                <div className={"col-6 about__picture"}></div>
            </div>
        </>
    )
}