document.getElementById("calc").addEventListener("click", function () {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("請選擇出生日期！");
        return;
    }

    const today = new Date();
    const bday = new Date(birthdate);

    let dogAgeYears = (today - bday) / (1000 * 60 * 60 * 24 * 365);

    if (dogAgeYears < 0) {
        alert("出生日期不能是未來！");
        return;
    }

    const dogAge = dogAgeYears.toFixed(1);

    // 依據文獻換算人類年齡
    let humanAge = 0;
    if (dogAgeYears <= 2) {
        humanAge = dogAgeYears * 12.5;
    } else {
        humanAge = 25 + (dogAgeYears - 2) * 4.6;
    }

    document.getElementById("dogAge").textContent = dogAge;
    document.getElementById("humanAge").textContent = humanAge.toFixed(1);

    document.getElementById("result").classList.remove("hidden");
});
