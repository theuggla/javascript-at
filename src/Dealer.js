/**
 * Module for Dealer.
 * @augments CardPlayer
 *
 * @author Molly Arhammar
 * @version 1.0.0
 */

'use strict';

const Card = require('../src/Card.js');
const CardPlayer = require('../src/CardPlayer.js');

function Dealer(name = 'a Dealer') {
    CardPlayer.call(this, name);

    Object.defineProperties(this, {
        inPlay: {
            get: function() {
                return this.points < 21;
            },
            enumerable: false,
            configurable: false
        },
    });
}

Dealer.prototype = Object.create(CardPlayer.prototype);

Object.defineProperties(Dealer.prototype, {
    constructor: {
        value: Dealer
    },
    requestCard: {
        value: function() {
            return this.inPlay;
        }
    },
    toString: {
        value: function () {
            let output = this.name + ': ';
            this.hand.forEach(function (card) {
                output += card.toString() + ' ';
            });
            output += '(' + this.points + ')';
            if (this.points > 21) {
                output += ' BUSTED!';
            }
            return output;
        }
    }
});

module.exports = Dealer;
