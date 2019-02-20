export class ValidationPoc {
    public createValidation = (fn, errorMsg, type?) => (data) => {
        const result = fn(data);
        return {
            cata: (branch) =>
                result ? branch.right(result, type) : branch.left(errorMsg, type),
            type,
        };
    }

    public validateFormValues = (values) =>
        Object.keys(values).map((key) => ({
            [key]: values[key].cata({
                left: (e) => e,
                right: (a) => a,
            }),
        }))

    public test() {
        const EMAIL = "EMAIL";
        const PHONE = "PHONE";

        const createUserName = this.createValidation(
            (a) => a && a.length > 5,
            "Minimum of 6 characters required",
        );
        const createEmail = this.createValidation(
            (a) => a && a.length > 6,
            "Minimum of 7 characters required",
            EMAIL,
        );
        const createPhone = this.createValidation(
            (a) => a && a.length > 7,
            "Minimum of 8 characters required",
            PHONE,
        );

        const formValues = {
            email: createEmail("foo@"),
            phone: createPhone("987654321"),
            userName: createUserName("UserA"),
        };

        const errors = this.validateFormValues(formValues);

        console.log(JSON.stringify(errors, null, 4));
    }

}
