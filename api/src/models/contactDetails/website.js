class Website extends AbstractContactDetails {
    pattern = "/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/";
    value;
    constructor(value) {
        super();
        this.value = value;
    }
}