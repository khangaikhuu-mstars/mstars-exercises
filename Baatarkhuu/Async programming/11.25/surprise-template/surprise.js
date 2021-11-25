const surpriseSection = document.getElementById("surprise");

function showSurprise() {
  surpriseSection.textContent = "🎉 Surprise! 🎉";
}
// 1.
// setTimeout(showSurprise, 1000;

// 2.
// setTimeout(showSurprise, Math.random() * 4000);

// 3.
// setTimeout(function () {
//   surpriseSection.textContent = "🎉 Surprise! 🎉";
// }, Math.random() * 4000);

// 4.
setTimeout(()=> {
  surpriseSection.textContent = "🎉 Surprise! 🎉";
}, Math.random() * 4000);
