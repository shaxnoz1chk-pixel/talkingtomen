document.addEventListener("DOMContentLoaded", () => {
  const telegramUsername = "your_telegram_username";
  const message = [
    "Assalomu alaykum!",
    "",
    "Men \"Erkaklar bilan gaplashish bo'yicha to'liq qo'llanma\" (PDF, 499 000 so'm) ni sotib olmoqchiman.",
    "Iltimos, to'lov usullari va qo'llanmani qanday olishim haqida ma'lumot bering.",
    "Rahmat!"
  ].join("\n");

  const telegramUrl = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

  const buyBtn = document.getElementById("telegram-buy-btn");
  if (buyBtn) {
    buyBtn.href = telegramUrl;
  }
});
