const profile = {
    name: 'kuro',
    age: 0,
    job: undefined
}

// Các giá trị: undefined, null, NaN, '', "", false, 0
console.log(profile.age || 18)
console.log(profile.job || 'IT')

// null, undefine
console.log(profile.age ?? 18)
console.log(profile.job ?? 'IT')