function reverseString(s) {
    try {
        s = s.split('').reverse().join('')
    } catch (error) {
        console.error(error.message)
    }

    console.log(s)
}

reverseString('hello') // olleh
reverseString(1234) // s.split is not a function