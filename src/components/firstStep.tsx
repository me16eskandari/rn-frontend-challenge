import React from "react";

import { FirstStepModel } from "../models";


export const FirstStep = (model: FirstStepModel) => {
    return (
        <div className="form">
            <div className="row">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={model.name} onChange={model.onChange} />
                {model.nameError && <span className="error-message">{model.nameError}</span>}
            </div>
            <div className="row">
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" name="age" value={model.age} onChange={model.onChange} />
                {model.ageError && <span className="error-message">{model.ageError}</span>}
            </div>
            <div className="row">
                <div className="flex">
                    <button onClick={model.nextStep} className="button" type="button"
                        title="next">Next</button>
                </div>
            </div>

        </div>
    )
}