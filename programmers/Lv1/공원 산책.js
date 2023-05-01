function solution(park, routes) {
  var map = [];
  // 2차원 배열 형태로 변환
  park.forEach((element) => {
    map.push(element.split(""));
  });

  let prev;
  // 현재 위치 저장
  for (i in map) {
    for (j in map[i]) {
      if (map[i][j] === "S") {
        prev = [parseInt(i), parseInt(j)];
      }
    }
  }
  const dict = {
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
    N: [-1, 0],
  };
  routes.forEach((ele) => {
    const [dir, dis] = ele.split(" ");
    let cur = [...prev];
    let flag = true;

    for (let i = 0; i < dis; i++) {
      cur[0] += dict[dir][0];
      cur[1] += dict[dir][1];
      if (
        cur[0] > map.length - 1 ||
        cur[0] < 0 ||
        cur[1] > map[0].length - 1 ||
        cur[1] < 0
      ) {
        flag = false;
        break;
      }
      if (map[cur[0]][cur[1]] === "X") {
        flag = false;
        break;
      }
    }
    if (flag) {
      prev = [...cur];
    }
  });
  return prev;
}

console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
