import React from "react";

import { NewsLetterType, SecondStepModel } from "../models";

export const SecondStep = (model: SecondStepModel) => {
    return (
        <div className="form relative">
            {
                model.submitting &&
                <div className="loading">Sending Data</div>
            }
            <div className="row">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={model.email} onChange={model.onChange} />
                {model.emailError && <span className="error-message">{model.emailError}</span>}
            </div>
            <div className="row">
                <label htmlFor="newsletter">Newsletter:</label>
                <select name="newsletter" value={model.newsletter} onChange={model.onChange}>
                    {Object.keys(NewsLetterType).map((x, index) => (
                        <option key={index}>{x}</option>
                    ))}
                </select>
            </div>
            <div className="row">
                <div className="flex">
                    <button onClick={model.prevStep} className="button transparent" type="button" title="next">Back</button>
                    <button onClick={model.submit} className="button" type="button" title="next">Submit</button>
                </div>
            </div>

        </div>
    )
}