import { ChangeEventHandler } from "react";

import { NewsLetterType } from "./newsLetterType";

export class SecondStepModel {
    email: string;
    emailError: string;
    newsletter: NewsLetterType;
    submitting: boolean;
    prevStep: () => void;
    submit: () => void;
    onChange: ChangeEventHandler;
}