function check(str, bracketsConfig) {
  // let status = true;
  let arr = str.split('');
  
  while (arr.length) {
    let elem = arr[0];
    let isOpened = false;
    let bracketId;
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (elem == bracketsConfig[i][0]) {
        isOpened = true;
        bracketId = i;
        break;
      }
    }
    if (!isOpened) {
      return false;
    }
    let closeBracketId;
    
    for (let i = 1; i < arr.length; i++) {
      let pairArr = [];
      for (let i = 0; i < bracketsConfig.length; i++) {
        pairArr.push([0, 0]);
      }

      if (arr[i] == bracketsConfig[bracketId][1] && (i % 2 != 0 || i == 1)) {
        for (let j = 1; j < i; j++) {
          for (let k = 0; k < bracketsConfig.length; k++) {
            if (arr[j] == bracketsConfig[k][0]) {
              pairArr[k][0]++;
            } else if (arr[j] == bracketsConfig[k][1]) {
              pairArr[k][1]++;
            }
          }
        }
        let isRight = true;
        for (let j = 0; j < bracketsConfig.length; j++) {
          if (!(pairArr[j][0] == pairArr[j][1] || (bracketsConfig[j][0] == bracketsConfig[j][1] && pairArr[j][0] % 2 == 0))) {
            isRight = false;
            break;
          }
        }
        if (isRight) {
          closeBracketId = i;
          break;
        }
      }
    }
    if (!closeBracketId) {
      return false;
    }
    arr.splice(closeBracketId, 1);
    arr.splice(0, 1);
  }
  return true;
}

console.log(check( '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())',  [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']] ));

module.exports = check;