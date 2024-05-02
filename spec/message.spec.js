const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
    //test 4
    test("throws error if a name is NOT passed into the consturctor as the first parameter", function() {
        expect(function() {new Message();}).toThrow(new Error('Name required'));
    });
    //test 5
    test("constructor sets name", function() {
        let nameMessage = new Message('name_test', 'commands');
        expect(nameMessage.name).toEqual('name_test');
    });
    //test 6
    test("contains a commands array passed into the constructor as 2nd argument", function() {
        let newCommands = new Message('name_test', ['MODE_CHANGE', 'MOVE', 'STATUS_CHECK']);
        expect(newCommands.commands).toContain('MODE_CHANGE');
    });
});
