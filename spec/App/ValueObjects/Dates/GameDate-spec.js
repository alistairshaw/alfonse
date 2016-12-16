require('babel-core/register');

import GameDate from '../../../../App/ValueObjects/Dates/GameDate';

describe("to calculate a date difference when the game has been running for 12 days (26th March 1979)", function(){
    let gameDate = new GameDate(12);
    describe("the current age when the date of birth is 1960-03-01", function(){
        it("should be 18", function(){
            expect(gameDate.getNumberOfYearsSince(new Date(1960, 3, 1))).toBe(18);
        });
    });

    describe("the current age when the date of birth is 1939-03-01", function(){
        it("should be 39", function(){
            expect(gameDate.getNumberOfYearsSince(new Date(1939, 3, 1))).toBe(39);
        });
    });

    describe("the current age when the date of birth is 1939-03-27", function(){
        it("should be 40", function(){
            expect(gameDate.getNumberOfYearsSince(new Date(1939, 3, 27))).toBe(40);
        });
    });

    describe("the current age when the date of birth is 1929-01-13", function(){
        it("should be 50", function(){
            expect(gameDate.getNumberOfYearsSince(new Date(1929, 1, 13))).toBe(50);
        });
    });
});