const myObject = {
    
    myMethod(items) {
        console.log(this); // "myObject"
        const callback = () => {
            console.log(this); // "myObject"
        };
        items.forEach(callback);
    },
};

myObject.myMethod([1, 2, 3]);