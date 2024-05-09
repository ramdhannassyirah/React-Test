function reverse(s) {
  return s.split("").reverse().join("");
}
console.log(reverse("NEGIE1"));

function longsetWord(sentence) {
  let words = sentence.split(" ");
  let longest = words.reduce((a, b) => (a.length > b.length ? a : b));
  return `${longest}: ${longest.length} character`;
}

console.log(longsetWord("Saya sangat senang mengerjakan soal algoritma"));
