'use strict';

module.exports = Citizen;

import Physicality from "./Aggregates/Physicality";
import GameDate from "../../ValueObjects/Dates/GameDate"
import * as check from 'check-types';

function Citizen(name, dateOfBirth, physicality) {
    // validate constructor objects
    check.isDate(dateOfBirth);
    physicality.isPrototypeOf(Physicality);

    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.physicality = physicality;
}

Citizen.prototype.getAge = function() {
    let GameDate = new GameDate();
    return GameDate.getNumberOfYearsSince(dateOfBirth);
};