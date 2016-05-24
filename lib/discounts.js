'use strict'

module.exports = function (products, discounts) {
    function discountApplies(discount, products) {
        return products.find(product => product.name === discount.requirement.name)
    }

    function applyDiscount(discount, product) {
        product.cost = product.cost * discount.product.discount
    }

    function discountApplicationCompleted(discount, numberOfTimesToApply) {
        if (!discount.product.number)
            return false // no restriction, always apply

        return numberOfTimesToApply === discount.product.number
    }

    function applyDiscountToAll(discount, products) {
        let numberOfTimesToApply = 0

        products.some(product => {
            if (discount.product.name === product.name) {
                applyDiscount(discount, product)
                numberOfTimesToApply++
            }

            return (discountApplicationCompleted(discount, numberOfTimesToApply))
        })
    }

    discounts.forEach(discount => {
        if (discountApplies(discount, products))
            applyDiscountToAll(discount, products)
    })

    return products
}
