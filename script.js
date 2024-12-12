const today = new Date();
console.log("Текущая дата:", today.toLocaleDateString('ru'));

console.log("Текущее время:", today.toLocaleTimeString('ru'));

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const hours = String(today.getHours()).padStart(2, '0');
const minutes = String(today.getMinutes()).padStart(2, '0');
const seconds = String(today.getSeconds()).padStart(2, '0');

console.log("Дата и время:", `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);

const start = new Date(2022, 0, 1);
const diffMs = today - start;
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
const diffMonths = Math.floor(diffDays / 30);
const diffYears = Math.floor(diffDays / 365);

console.log("Дней с 01.01.2022:", diffDays);
console.log("Часов с 01.01.2022:", diffHours);
console.log("Месяцев с 01.01.2022:", diffMonths);
console.log("Лет с 01.01.2022:", diffYears);
