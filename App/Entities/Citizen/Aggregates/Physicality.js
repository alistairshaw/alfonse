'use strict';

module.exports = Physicality;

function Physicality(gender, height, weight, hairColour, strength) {
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.hairColour = hairColour;
    this.strength = strength;
}

Physicality.prototype.defendFromAssassin = function(citizen) {
    return true;
};