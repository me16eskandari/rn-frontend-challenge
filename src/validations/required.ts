export const required = (value: string, message: string = "This feild is required"): [string, boolean] => {

    let [error, hasError] = ["", false];

    if (!value) [error, hasError] = [message, true];

    return [error, hasError];

}