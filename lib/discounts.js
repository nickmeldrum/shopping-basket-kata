'use strict'

module.exports = function (products, discounts) {
    function discountApplies(discount, products) {
        return products.find(product => product.name === discount.requirement.name)
    }

    function applyDiscountToAll(discount, products) {
        let numberOfTimesToApply = 0

        function applyDiscount(product) {
            product.cost = product.cost * discount.product.discount
            numberOfTimesToApply++
        }

        function discountApplicationCompleted() {
            if (!discount.product.number)
                return false // no restriction, always apply

            return numberOfTimesToApply === discount.product.number
        }

        products.some(product => {
            if (discount.product.name === product.name)
                applyDiscount(product)

            return (discountApplicationCompleted())
        })
    }

    discounts.forEach(discount => {
        if (discountApplies(discount, products))
            applyDiscountToAll(discount, products)
    })

    return products
}
