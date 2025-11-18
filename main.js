// --- 頁面載入時，檢查 localStorage 是否有生日資料 ---
window.addEventListener("DOMContentLoaded", function () {
    const savedDate = localStorage.getItem("dogBirthday");
    if (savedDate) {
        document.getElementById("birthdate").value = savedDate;
    }
});

// --- 計算按鈕 ---
document.getElementById("calc").addEventListener("click", function () {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("請選擇出生日期！");
        return;
    }

    // 儲存生日到 localStorage
    localStorage.setItem("dogBirthday", birthdate);

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


// --- 清除生日按鈕 ---
document.getElementById("clear").addEventListener("click", function () {
    localStorage.removeItem("dogBirthday");
    document.getElementById("birthdate").value = "";
    document.getElementById("result").classList.add("hidden");
    alert("已清除生日！");
});
