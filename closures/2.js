function ObjId(){
    var id = 1;
    return {
        getId: function(){
           return id;
        },
        setId: function(_id){
           id = _id;
        }
    }
}
 
var myObject = ObjId();
console.log(myObject)
console.log(myObject.getId());  // => 1
myObject.setId(10);
console.log(myObject.getId());  // => 10