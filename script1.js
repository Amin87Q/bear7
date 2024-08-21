function setGender(gender) {
  // تنظیم جنسیت و نمایش بخش ورود نام
  document.getElementById('genderSelection').style.display = 'none';
  document.getElementById('nameInput').style.display = 'block';
}

function setName() {
  // گرفتن نام کاربر
  const name = document.getElementById('nameField').value;

  // بررسی اگر نام وارد نشده بود، پیام خطا بدهد
  if (name.trim() === '') {
      alert('Please enter your name!');
      return;
  }

  // نمایش نام کاربر
  document.getElementById('userName').textContent = name + ' (CEO)';

  // نمایش بخش‌های بازی و مخفی کردن فرم نام
  document.getElementById('nameInput').style.display = 'none';
  document.querySelector('.info').style.display = 'flex';
  document.getElementById('score').style.display = 'block';
  document.querySelector('.hamster').style.display = 'block';
  document.querySelector('.level').style.display = 'block';
}

function addCoins() {
  // تابع اضافه کردن سکه
  let scoreElement = document.getElementById('score');
  let currentScore = parseInt(scoreElement.textContent.split(' ')[1]) || 0;
  scoreElement.innerHTML = '<img src="coin.png" alt="Coin" class="coin-icon"> ' + (currentScore + 10);
}
