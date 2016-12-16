export default class Gender {

    availableGenders = ['m', 'f'];

    constructor(gender) {
        if (this.availableGenders.indexOf(gender) === false) throw {
            name:        "Invalid Gender",
            level:       "Show Stopper"
        };

        this.value = gender;
    }

}