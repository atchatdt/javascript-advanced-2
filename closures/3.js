var user = {
    tournament:"The Masters",
    data: [
         {name:"T. Woods", age:37},
         {name:"P. Mickelson", age:43}
     ],
 
     clickHandler: function () {
        this.data.forEach (function (person) {
            console.log (person.name + " is playing at " + this.tournament);
        }.bind(this));
        
        console.log(this.tournament)
        console.log(this.data)
    }
}
 
user.clickHandler();