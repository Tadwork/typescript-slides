'use strict';
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localCompare(y.name);
    });
    return result;
}
sortByName(S);
//# sourceMappingURL=sort.js.map