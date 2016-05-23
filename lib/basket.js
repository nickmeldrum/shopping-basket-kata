exports.getTotal = () => {
    return 0
}

// from http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
}

exports.add = (item) => {
    if (!item || !item.cost || !isNumeric(item.cost))
        throw new Error('please add a real item with a cost')

    if (!item.name)
        throw new Error('please add an item with a name')
}
