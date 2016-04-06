'use strict';
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
var list = [
    { name: "Kathrin", age: 20 }
];
sortByName(list);
//# sourceMappingURL=sort-result.js.map