var grades = [{
        name: 'John',
        grade: 8,
        sex: 'M'
    },
    {
        name: 'Sarah',
        grade: 12,
        sex: 'F'
    },
    {
        name: 'Bob',
        grade: 16,
        sex: 'M'
    },
    {
        name: 'Johnny',
        grade: 2,
        sex: 'M'
    },
    {
        name: 'Ethan',
        grade: 4,
        sex: 'M'
    },
    {
        name: 'Paula',
        grade: 18,
        sex: 'F'
    },
    {
        name: 'Donald',
        grade: 5,
        sex: 'M'
    },
    {
        name: 'Jennifer',
        grade: 13,
        sex: 'F'
    },
    {
        name: 'Courtney',
        grade: 15,
        sex: 'F'
    },
    {
        name: 'Jane',
        grade: 9,
        sex: 'F'
    }
]

// Tìm thứ hạng trung bình của cả lớp 
let averageClass = grades.reduce((a, b) => a + b.grade, 0) / grades.length
console.log({
    averageClass
})

// Tìm thứ hạng trung bình của nam trong lớp
let findMale = grades.filter(x => x.sex == 'M')
let avarageClassMale = findMale.reduce((a, b) => a + b.grade, 0) / findMale.length
console.log({
    avarageClassMale
})