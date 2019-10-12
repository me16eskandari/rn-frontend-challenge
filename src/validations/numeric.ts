export const numeric = (value: string, message: string = "This feild must be a number"): [string, boolean] => {

    let [error, hasError] = ["", false];

    if (value && isNaN(+value)) [error, hasError] = [message, true];

    return [error, hasError];

}