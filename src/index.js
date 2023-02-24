module.exports = function check(str, bracketsConfig) {
    const openBrackets = [];
    const bracketsPair = {};
    bracketsConfig.forEach(element => {
    bracketsPair[element[1]] = element[0];
    openBrackets.push(element[0])
    });
    
    const stack = [];                                     

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      if(currentSymbol === stack[stack.length - 1]) {
        stack.pop();
        if(stack.length === 0) return true;
      }
      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
        console.log(stack);
      } else {
        if (stack.length === 0) {
          return false;
        }
        console.log(stack);
        let topElement = stack[stack.length - 1];

        if (bracketsPair[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
}

