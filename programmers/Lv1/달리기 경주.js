// indexOf 메서드를 사용하면 indexOf의 성능 문제로 시간초과가 나오는 문제
// 해쉬 자료구조를 이용해서 푼다. (objetct의 key로 접근하는 bigO는 O(1))

function solution(players, callings) {
  const obj = {};
  // 1. array의 값을 객체 형태로 바꿈
  players.map((ele, index) => {
    obj[ele] = index;
    return obj;
  });

  // 2. 순서 바꾸기
  callings.forEach((element) => {
    let index = obj[element];
    const front = players[index - 1];

    // 불린 이름과 그 앞의 이름을 바꿔줌
    [players[index], players[index - 1]] = [players[index - 1], players[index]];

    // 객체에도 순위(인덱스)값 최신화
    obj[element] = obj[element] - 1;
    obj[front] = obj[front] + 1;
  });
  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
