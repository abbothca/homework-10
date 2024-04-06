"use strict";

//Приклади роботи функції
console.log("02 Aug 1985 - 03 Aug 1985 - seconds :\n\n", durationBetweenDates("02 Aug 1985", "03 Aug 1985", "seconds")); // поверне '86400 seconds'
console.log("31 Jan 2022 - 03 Feb 2021 - days :\n\n", durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days")); // поверне '362 days'
console.log(" - - :\n\n", durationBetweenDates());
//обробки помилок
console.log("21.11.2024 - 03 Feb 2021 - days :\n\n", durationBetweenDates("21.11.2024", "03 Feb 2021", "days"));
console.log("31 Jan 2022 - 03 Feb 2021 - years :\n\n", durationBetweenDates("31 Jan 2022", "03 Feb 2021", "years"));
console.log("undefined - undefined - seconds:\n\n", durationBetweenDates(undefined, undefined, "seconds"));
console.log("{foo: bar} - undefined - seconds :\n\n", durationBetweenDates({ foo: "bar" }, undefined, "seconds"));

//за замовчуванням (поточна дата, UNIX epoch, секунди)
function durationBetweenDates(startDate = new Date(0), endDate = new Date(), type = "seconds") {
    //шукаємо різницю у часі між датами (буде у мілісекундах)
    const difference = (new Date(endDate)).getTime() - (new Date(startDate)).getTime();
    //якщо вдалося обчислити різницю у часі
    if (!isNaN(difference)) {
        //обчислюємо модуль різниці між двома датами - оскільки нам не відомо, яка подія відбулась раніше
        const timeBetweenTwoDate = Math.abs(difference);
        //залежно від третього параметра виберемо формулу для розрахунку часу
        switch (type) {
            case "seconds": return `${(timeBetweenTwoDate / 1000)} ${type}`;
            case "minutes": return `${timeBetweenTwoDate / (60 * 1000)} ${type}`;
            case "hours": return `${timeBetweenTwoDate / (60 * 60 * 1000)} ${type}`;
            case "days": return `${timeBetweenTwoDate / (24 * 60 * 60 * 1000)} ${type}`;
            default:
                //якщо третій параметр вказано невірно
                return `Sorry, it's not the correct parameter for time units [${type}]`;
        }
    }
    else
        //якщо котрась з дат введена не коректно і не пройшла умова if
        return `Sorry, it's not the correct format of the date [${startDate}] or [${endDate}]`;
}