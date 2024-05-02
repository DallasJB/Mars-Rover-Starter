const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

//test 7
test("constructor set position and defualt values for mode and generatorWatts", function() {
  let testPosition = new Rover(12345);
  expect(testPosition.position).toEqual(12345, 'NORMAL', 110);
});
//test 8
test("response returned by receiveMessage contains name of message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.message).toEqual('Test message');
});
//test 9
test("response returned by receivedMessage includes two results if two commands are sent in the message", function() {
  let commands = [new Command('MODE_CHANGE'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results.length).toEqual(2);
});
//test 10
test("responds correctly to status check command", function() {
  let commands = [new Command('STATUS_CHECK')];
  let message = new Message('status check test', commands);
  let rover = new Rover(99382);
  let response = rover.receiveMessage(message);
  expect(response.results[0].roverStatus.mode).toEqual(rover.mode);
});
//test 11
test("responds correctly to mode change command", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MODE_CHANGE', 'NORMAL')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results[0].completed).toEqual(true);
  expect(response.results[1].completed).toEqual(true);
});
//test 12
test("responds with false completed value when attempting  to move in LOW_POWER mode", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results[1].completed).toEqual(false);
  expect(rover.position).toEqual(98382);
});
//test 13
test("responds with position for move commands", function() {
  let commands = [new Command('MODE_CHANGE', 'NORMAL'), new Command('MOVE', 123456)];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results[1].completed).toEqual(true);
  expect(rover.position).toEqual(123456);
});

});
