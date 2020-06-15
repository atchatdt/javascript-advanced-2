const a = {
    stringField: 'Joe',
    nestedField: {
        field: 'Nested'
    },
    functionField: () => 'aReturn'
};

const b = Object.assign({}, a);

b.stringField = 'Bob';
b.nestedField.field = 'Changed';
b.functionField = () => 'bReturn';

console.log(
    a.stringField,
    a.nestedField.field,
    a.functionField()
);
console.log(
    b.stringField,
    b.nestedField.field,
    b.functionField()
);