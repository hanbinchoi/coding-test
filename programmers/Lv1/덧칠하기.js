function solution(n, m, section) {
  var answer = 0;
  let arr = new Array(n + 1).fill(0);
  section.forEach((element) => {
    arr[element] = 1;
  });
  let start = section[0];
  while (start <= arr.length) {
    if (arr[start] === 1) {
      arr.fill(0, start, start + m);
      start += m;
      answer++;
    } else {
      start += 1;
    }
  }

  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
