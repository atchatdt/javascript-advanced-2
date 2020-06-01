var gameController = {
    scores: [10, 15, 20],
    avgScore: null,
    players: [
        {name: "Tommy", playerID: 987, age: 23},
        {name: "Pau", playerID: 87, age: 33}
    ]
};
 
var appController = {
    scores: [30, 40, 50],
    avgScore: null,
    computeAvg: function () {     
       var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
           return prev + cur;
       });
       this.avgScore = sumOfScores / this.scores.length;
   }
};

// Thay đổi context => mượn hàm tính trung bình cộng
// appController.computeAvg.apply(gameController);
appController.computeAvg.bind(gameController)()
console.log(gameController.avgScore);

appController.computeAvg()
console.log(appController.avgScore);


