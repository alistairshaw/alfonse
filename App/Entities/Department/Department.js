'use strict';

module.exports = Department;

import GameDate from "../../ValueObjects/Dates/GameDate"
import * as check from 'check-types';

function Department(name, dateOfBirth, physicality) {
    // validate constructor objects
    check.isDate(dateOfBirth);
    physicality.isPrototypeOf(Physicality);

    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.physicality = physicality;
}

Department.prototype.getAge = function() {
    let GameDate = new GameDate();
    return GameDate.getNumberOfYearsSince(dateOfBirth);
};