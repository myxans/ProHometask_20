let znak = '-';

function funcWithMath() {
  const num = Array.from(arguments);
  console.log(num);
  if ('+' === znak) {
    function setMath() {
      let sum = 0;
      for (i = 0; i < num.length; i++) {
        sum += num[i];
      }
      return sum;
    }
    return `${num.join(" + ")} = ${setMath()}`;

  } else if ('-' === znak) {
    function setMath() {
      let diff = num[0] * 2;
      for (i = 0; i < num.length; i++) {
        diff -= num[i];
      }
      return diff;
    }

    return `${num.join(" - ")} = ${setMath()}`;

  } else if ('*' === znak) {
    function setMath() {
      let mult = 1;
      for (i = 0; i < num.length; i++) {
        mult *= num[i];
      }
      return mult;
    }
    return `${num.join(" * ")} = ${setMath()}`;
  }
    
  else if ('/' === znak) {
    function setMath() {
      let div = num[0] ** 2;
      for (i = 0; i < num.length; i++) {
        div /= num[i];
      }
      return div;
    }
    return `${num.join(" / ")} = ${setMath()}`;
  }

}

let res = funcWithMath(20, 2, 3);
console.log(res);




let whatDo = setNumbers(10, 2, 3);

function setNumbers() {
    const num = Array.from(arguments);
    console.log(num);
    return function whatDo(znak) {
        if('+' === znak) {
            function count() {
                let sum = 0;
                for (i = 0; i < num.length; i++) {
                    sum += num[i];
                    }
                    return sum;
            }
          return `${num.join(" + ")} = ${count()}`;
          
        } else if('-' === znak) {
            function count() {
                let diff = num[0] * 2;
                for (i = 0; i < num.length; i++) {
                    diff -= num[i];
                    }
                    return diff;
            }
          return `${num.join(" - ")} = ${count()}`;
          
        } else if('*' === znak) {
            function count() {
                let mult = 1;
                for (i = 0; i < num.length; i++) {
                    mult *= num[i];
                    }
                    return mult;
            }
          return `${num.join(" * ")} = ${count()}`;
          
        } else if('/' === znak) {
            function count() {
                let div = num[0] ** 2;
                for (i = 0; i < num.length; i++) {
                    div /= num[i];
                    }
                    return div;
            }
            return `${num.join(" / ")} = ${count()}`;
        }
    }
}

console.log(whatDo('-'));