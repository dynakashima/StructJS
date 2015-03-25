var struct = {};

struct.Stack = function () {
    var stack = [];
    
    stack.push = function(el) {
        if(el == null ){
            console.log("cannot pass in a null object");
        } else {
            stack[stack.size()] = el;
        }
    };

    stack.size = function() {
        return stack.length;
    };

    return stack;
};