const wordsData = [
    { word: "JOGET", hint: "Agar disukai masyarakat, calon presiden harus" },
    { word: "PENCITRAAN", hint: "Karyawan yang akan mencapai batas usia kerja, maka harus" },
    { word: "KOPDES", hint: "Toko yang berpotensi membantu survivor di alam liar adalah" },
    { word: "SESKAB", hint: "Orang yang paling dicintai Presiden Indonesia sekarang" },
    { word: "TRAVELLING", hint: "Apa yang dilakukan Presiden Indonesia saat terjadi karhutla" },
];

let currentWordObj = {};
let scrambledWord = "";

const scrambledWordElement = document.getElementById("scrambled-word");
const hintTextElement = document.getElementById("hint-text");
const gameForm = document.getElementById("game-form");
const userInput = document.getElementById("user-input");
const messageElement = document.getElementById("message");
const nextBtn = document.getElementById("next-btn");

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsData.length);
    currentWordObj = wordsData[randomIndex];
    
    // Mengacak huruf
    let letters = currentWordObj.word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    scrambledWord = letters.join("");

    // Menampilkan ke HTML
    scrambledWordElement.textContent = scrambledWord;
    hintTextElement.textContent = currentWordObj.hint;
    
    // Reset status form
    userInput.value = "";
    messageElement.textContent = "";
    messageElement.className = "";
    nextBtn.classList.add("hidden");
    userInput.disabled = false;
}

gameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userGuess = userInput.value.trim().toUpperCase();

    if (userGuess === currentWordObj.word) {
        messageElement.textContent = "🎉 Benar! Selamat!";
        messageElement.className = "correct";
        nextBtn.classList.remove("hidden");
        userInput.disabled = true;
    } else {
        messageElement.textContent = "❌ Coba lagi, jawaban belum tepat.";
        messageElement.className = "wrong";
    }
});

nextBtn.addEventListener("click", getRandomWord);

// Jalankan game saat halaman dimuat
getRandomWord();