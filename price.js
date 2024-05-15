// Предположительное время выполнения: 30 мин
// Реальное время: 10 минут
const totalPrice = ({ price, discount, isInstallment, months }) => {
    // Your code here...
    let totalPrice = 0;
    if (isInstallment === true) {
        return totalPrice = (price - price * discount / 100) / months;
    }
    totalPrice = price - price * discount / 100;
    return totalPrice;
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
