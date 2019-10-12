import { email } from "./email";
import { numeric } from "./numeric";
import { required } from "./required";

const validations = {
    email: email,
    numeric: numeric,
    requied: required
};

export default validations;