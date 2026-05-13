const bgm = document.getElementById("bgm");
const btn = document.getElementById("startBtn");
const intro = document.getElementById("introAnimation");
const spinSound = document.getElementById("spinSound"); // ← ここが重要！


// ⭐ ページ読み込み時に回転音を鳴らす
window.addEventListener("load", () => {
    spinSound.volume = 1;
    spinSound.play();
});


// ⭐ アニメーション終了後にボタンを表示
intro.addEventListener("animationend", () => {
    btn.style.display = "block";
});


// ⭐ ボタンを押したら BGM 再生
btn.addEventListener("click", () => {
    bgm.volume = 1;
    bgm.play();
});
