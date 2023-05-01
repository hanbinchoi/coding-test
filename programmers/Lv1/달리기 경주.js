// indexOf 메서드를 사용하면 indexOf의 성능 문제로 시간초과가 나오는 문제
// 해쉬 자료구조를 이용해서 푼다. (objetct의 key로 접근하는 bigO는 O(1))

function solution(players, callings) {
  const map = new Map();
  // 1. array의 값을 해시 형태로 바꿈
  players.forEach((ele, index) => {
    map.set(ele, index);
  });
  // 2. 순서 바꾸기
  callings.forEach((element) => {
    let index = map.get(element);
    const front = players[index - 1];

    // 불린 이름과 그 앞의 이름을 바꿔줌
    [players[index], players[index - 1]] = [players[index - 1], players[index]];

    // 해시에도 순위(인덱스)값 최신화
    map.set(element, index - 1);
    map.set(front, index);
  });
  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
