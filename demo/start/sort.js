'use strict';
function sortByName(a) {
    var result = a.slice();
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
var p = { name: 'Kathrin', age: 20 };
var S = [p];

var Class = (function () {
    function Class() {
    }
    return Class;
}());

function sort(cmp) {
    return [];
}

sortByName(S);
