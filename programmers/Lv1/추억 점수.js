function solution(name, yearning, photo) {
  var answer = [];
  const map = new Map();

  name.forEach((ele, index) => {
    map.set(ele, yearning[index]);
  });

  for (i of photo) {
    let score = 0;
    for (j of i) {
      if (map.has(j)) {
        score += map.get(j);
      }
    }
    answer.push(score);
  }
  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
