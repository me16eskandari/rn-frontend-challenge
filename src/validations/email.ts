const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const email = (value: string, message: string = "This feild must be an email"): [string, boolean] => {

    let [error, hasError] = ["", false];

    if (value && !re.test(String(value).toLowerCase())) [error, hasError] = [message, true];

    return [error, hasError];

}