function isPositive(a) {
    switch (true) {
        case a > 0:
            return 'Yes'
        case a === 0:
            throw new Error('Zero Error.')
        default:
            throw new Error('Negative Error.')
    }
}

console.log(isPositive(1)) // Yes
console.log(isPositive(0)) // Zero Error
console.log(isPositive(-1)) // Negative Error