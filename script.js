function findShot(s) {
  return Math.min.apply(
    null,
    s.split("").map((w) => w.length)
  );
}
console.log(findShot("bitcoin take over the world maybe who knows perhaps"));
