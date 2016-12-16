'use strict';

module.exports = GameDate;

function GameDate(daysGameRunning) {
    this.gameStartYear = '1979';
    this.gameStartMonth = '1';
    this.gameStartDay = '1';

    /**
     * Todo: calculate this based on when we actually launch the game
     * Each real day is 1 week in-game time
     * @type {number}
     */
    this.daysGameRunning = daysGameRunning > 0 ? daysGameRunning : 1;

    let _this = this;

    /**
     * Get the current in-game date
     * @returns {Date}
     */
    this.currentGameDate = function() {
        let currentDate = new Date(_this.gameStartYear, _this.gameStartMonth, _this.gameStartDay);
        currentDate.setDate(currentDate.getDate() + (7 * _this.daysGameRunning));
        return currentDate;
    }
}

/**
 * Based on how long the game has been running for
 */
GameDate.prototype.getNumberOfYearsSince = function(dateToCheck) {
    let currentDate = this.currentGameDate();
    let diff = currentDate.getFullYear() - dateToCheck.getFullYear();
    if (dateToCheck.getMonth() > currentDate.getMonth()) diff--;
    else {
        if (dateToCheck.getMonth() == currentDate.getMonth()) {
            if (dateToCheck.getDay() > currentDate.getDay()) diff--;
        }
    }
    return diff;
};