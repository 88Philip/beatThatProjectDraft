//Defining gameModes to switch to
var gameModeDiceRoll = "gameModeDiceRoll";
var gameModeDiceRollOrderChoosing = "gameModeDiceRollOrderChoosing";
//Start off with DiceRoll mode to roll dice on submit push
var gameMode = gameModeDiceRoll;

var p1Rolls = [];
var p2Rolls = [];

var p1Choice = ``;
var p2Choice = ``;

var rollValue = function () {
  math.floor(Math.random * 6) + 1;
  console.log(rollValue);
};

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};
