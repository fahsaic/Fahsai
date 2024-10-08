const correctAnswer = "เป็น";
const submitAnswerButton = document.getElementById('submitAnswer');
const answerInput = document.getElementById('answerInput');
const resultMessage = document.getElementById('resultMessage');

submitAnswerButton.addEventListener('click', function() {
    const userAnswer = answerInput.value.trim(); // เก็บคำตอบของผู้ใช้ และตัดช่องว่าง

    if (userAnswer === correctAnswer) {
        resultMessage.textContent = "เก่งมาก คิดถูกแล้ว!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "ตอบผิด ต้องตอบว่า 'เป็น'";
        resultMessage.style.color = "red";
    }

    answerInput.value = ''; // ล้างช่องกรอกคำตอบหลังจากกดส่งคำตอบ
});
