class AbstractContactDetails {
    constructor(value, pattern) {
        this.value = value;
        this.pattern = pattern;
    }
    validate() {
        return this.pattern.test(this.value);
    }
}