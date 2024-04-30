class Email extends AbstractContactDetails {
    pattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
    value;
    constructor(value) {
        super();
        this.value = value;
    }

}