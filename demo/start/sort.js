'use strict';
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
var S = [{ name: 'Kathrin', age: 20 }];
var Class = (function () {
    function Class() {
    }
    return Class;
}());
sortByName(S);
//# sourceMappingURL=sort.js.map