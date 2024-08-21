function saveProfile() {
    const nameInput = document.getElementById('nameInput').value;
    const profilePicInput = document.getElementById('profilePicInput').files[0];

    // چک کردن اینکه نام وارد شده خالی نباشد
    if (!nameInput.trim()) {
        alert('Please enter your name.');
        return;
    }

    // ذخیره نام در localStorage
    localStorage.setItem('userName', nameInput);

    // اگر کاربر تصویر پروفایل انتخاب کرده باشد
    if (profilePicInput) {
        const reader = new FileReader();
        reader.onload = function(event) {
            localStorage.setItem('profilePic', event.target.result);
            // هدایت به صفحه بازی یا انجام عملیات دیگر
            window.location.href = 'game.html'; // تغییر مسیر به صفحه بازی
        };
        reader.readAsDataURL(profilePicInput);
    } else {
        // اگر تصویری انتخاب نشده باشد، فقط نام را ذخیره می‌کند
        window.location.href = 'game.html'; // تغییر مسیر به صفحه بازی
    }
}
