function applyAll(funcName) {
    var args = Array.prototype.slice.call(arguments, 1);
    return funcName.apply(null, args);
}
