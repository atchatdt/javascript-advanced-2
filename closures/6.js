var name = 'Peter';
var Hocsinh = {
    name: 'John',
    printName: function(){
        console.log(this.name);
    }
};
 
let printHocsinhName = Hocsinh.printName;
 
printHocsinhName.bind(Hocsinh)();
 
