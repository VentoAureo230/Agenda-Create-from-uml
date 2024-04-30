class Phone extends AbstractContactDetails {
    pattern = "/^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/";
    value;
    constructor(value) {
        super();
        this.value = value;
    }
}