class Test {
    constructor(name) {
        this.name = name;
    }
    func1() {
        console.log("this is func1, " + this.name);
    }
}

const t = new Test("samdychen");