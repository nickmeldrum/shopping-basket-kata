exports.getTotal = () => {
    return 0
}

exports.add = (item) => {
    if (!item || !item.cost)
        throw new Error('please add a real item with a cost')
}
