function solution(wallpaper) {
  var map = [];
  wallpaper.forEach((element) => {
    map.push(element.split(""));
  });
  const x = [];
  const y = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === "#") {
        x.push(i);
        y.push(j);
      }
    }
  }
  return [
    Math.min(...x),
    Math.min(...y),
    Math.max(...x) + 1,
    Math.max(...y) + 1,
  ];
}
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
