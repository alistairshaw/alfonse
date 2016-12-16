'use strict';

import JsonRespond from '../../App/Helpers/JsonRespond';

module.exports = {
    index: function (req, res) {
        JsonRespond(null, res, {
            test: 2
        }, {})
    }
};