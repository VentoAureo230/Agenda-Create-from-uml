class Address extends AbstractContactDetails {
    pattern = "^[a-zA-Z0-9\s,'-]*$";
    value;
    constructor(value) {
        super();
        this.value = value;
    }
}