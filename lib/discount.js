'use strict'

exports.discounts = [
    {
        requirement: { name: 'butter', number: 2 },
        product: { name: 'bread', discount: 0.5, number: 1 }
    },
    {
        requirement: { name: 'milk', number: 4 },
        product: { name: 'milk', discount: 0, number: 1 }
    }
]

exports.discount = function (products, discounts) {
    function discountApplies(discount, products) {
        if (!discount.requirement.number) discount.requirement.number = 1
        const matchingProducts = products.filter(product => product.name.toLowerCase() === discount.requirement.name.toLowerCase())
        return matchingProducts.length >= discount.requirement.number
    }

    function applyDiscountToAll(discount, products) {
        let numberOfTimesToApply = 0

        function applyDiscount(product) {
            product.cost = product.cost * discount.product.discount
            numberOfTimesToApply++
        }

        function discountApplicationCompleted() {
            if (!discount.product.number) return false // no restriction, always apply
            return numberOfTimesToApply === discount.product.number
        }

        products.some(product => {
            if (discount.product.name.toLowerCase() === product.name.toLowerCase())
                applyDiscount(product)

            return discountApplicationCompleted()
        })
    }
    
    discounts.filter(discount => discountApplies(discount, products))
        .forEach(discount => applyDiscountToAll(discount, products))

    return products
}
