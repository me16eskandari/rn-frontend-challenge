import { ChangeEventHandler } from "react";

export class FirstStepModel {
    name: string;
    nameError: string;
    age: string;
    ageError: string;
    nextStep: () => void;
    onChange: ChangeEventHandler
}