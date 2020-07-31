import React from "react";
import {YellowLabel} from "./YellowLabel";

export const Step4 = ({currentStep, nextStep, prevStep}) => {
    if (currentStep !== 4) {
        return null
    }
    return (
        <>
            <YellowLabel text={"Podaj adres oraz termin odbioru rzeczy."}/>
            <div className="row bear__container">
                <div className={"step4__container"}>
                    <h4 className={"step4__counter"}>Krok 4/4</h4>
                    <h2 className={"step4__header"}>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                    <form className={"step4__form"}>
                        <div className={"step4__form-wrapper"}>
                            <h2 className={"step4__box__header"}>Adres odbioru</h2>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Ulica</label>
                                <input className={"step4__form-input"}/>
                            </div>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Miasto</label>
                                <input className={"step4__form-input"}/>
                            </div>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Kod<br/>pocztowy</label>
                                <input className={"step4__form-input"}/>
                            </div>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Numer<br/>telefonu</label>
                                <input className={"step4__form-input"}/>
                            </div>
                        </div>
                        <div className={"step4__form-wrapper"}>
                            <h2 className={"step4__box__header"}>Termin odbioru </h2>
                            <div className={"step4__form-box"}>
                                <label></label>
                                <input/>
                            </div>
                            <div>
                                <label></label>
                                <input/>
                            </div>
                            <div>
                                <label></label>
                                <textarea></textarea>
                            </div>
                        </div>
                    </form>
                    <div>
                        <button onClick={prevStep}>Wstecz</button>
                        <button onClick={nextStep}>Dalej</button>
                    </div>
                </div>
            </div>
        </>
    )
}