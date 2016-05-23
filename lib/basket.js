exports.getTotal = () => {
    return 0
}

exports.add = (item) => {
    if (item === undefined || item === null)
        throw new Error('please add a real item')
}
