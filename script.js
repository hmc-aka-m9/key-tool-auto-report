function generateKey() {
  let numbers = "";
  for (let i = 0; i < 8; i++) {
    numbers += Math.floor(Math.random() * 10); // sinh số 0-9
  }
  return "hmctricker_" + numbers;
}

function getKey() {
  const now = Date.now();
  const saved = JSON.parse(localStorage.getItem("randomKeyData"));

  if (saved && now - saved.time < 3600 * 1000) {
    return saved.key; // còn trong 1h thì giữ key cũ
  } else {
    const newKey = generateKey();
    localStorage.setItem("randomKeyData", JSON.stringify({ key: newKey, time: now }));
    return newKey;
  }
}

// Hiển thị key
document.getElementById("key").textContent = getKey();

// Nếu muốn auto đổi key sau đúng 1 giờ, thêm đoạn này:
setInterval(() => {
  document.getElementById("key").textContent = getKey();
}, 60 * 60 * 1000); // 1 giờ
