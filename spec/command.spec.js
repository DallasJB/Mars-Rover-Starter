const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {
//test 1
  test("throws error if command type is NOT passed into constructor as the first parameter", function() {
    let instantiateCommand = function() { new Command();};
    expect(instantiateCommand).toThrow(new Error('Command type required.'));
  });
//test 2
  test("constructor sets command type", function() {
    let statusCommand = new Command('STATUS_CHECK', 20);
    expect(statusCommand.commandType).toEqual('STATUS_CHECK');
  });
//test 3
  test("constructor sets a value passed in as a 2nd argument", function() {
    let moveCommand = new Command('MOVE', 20);
    expect(moveCommand.value).toEqual(20);
  })

});