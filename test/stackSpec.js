define(['stack'], function(Stack) {

    describe('push', function() {
        it('works for pushing an element', function() {
            var stack = new struct.Stack();
            stack.push("testing");
            expect(stack.length).toEqual(1);
        });
    });

    describe('count', function() {
        it('works for counting the number of items in an empty stack', function() {
            var stack1 = new struct.Stack();
            expect(stack1.size()).toEqual(0);
        });

        it('works for counting the number of items in an unempty stack', function() {
            var stack = new struct.Stack();
            stack.push("el 1");
            stack.push("el 2");
            expect(stack.size()).toEqual(2);
        });
    });

});
