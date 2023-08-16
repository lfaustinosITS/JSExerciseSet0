"use strict"

const usToIs = function (month, day, year) {
    const US = {
        "01-01": "New Year's Day",
        "01-20": "Martin Luther King Jr. Day",
        "02-17": "Washington's Birthday",
        "05-26": "Memorial Day",
        "07-04": "Independence Day",
        "09-01": "Labor Day",
        "10-13": "Columbus Day",
        "11-11": "Veterans Day",
        "11-27": "Thanksgiving",
        "12-25": "Christmas Day"
    };
    const IS = {
        "01-01": "Nýársdagur",
        "04-17": "Skírdagur",
        "04-18": "Föstudagurinn langi",
        "04-20": "Páskadagur",
        "04-21": "Annar í páskum",
        "04-24": "Sumardagurinn fyrsti",
        "05-01": "Verkalýðsdagurinn",
        "05-29": "Kristi himmelsfärdsdagur",
        "06-08": "Hvítasunnudagur",
        "06-09": "Annar í hvítasunnu",
        "06-17": "Þjóðhátíðardagur",
        "08-04": "Frídagur verslunarmanna",
        "12-24": "Aðfangadagur",
        "12-25": "Jóladagur",
        "12-26": "Annar í jólum",
        "12-31": "Gamlársdagur"
    };
    if (typeof month == 'string') {

        const expres = /^(0[1-9]|1[0-3])\/(0[1-9]|[1-2][0-9]|3[01])\/(\d{4})$/;
        if (expres.test(month)) {
            const dataDate = expres.exec(month);
            day = dataDate[2];
            month = dataDate[1];
            year = dataDate[3];
        }
        else { throw new Error("This is not a valid date"); }
    }
    const monthRegex = /^(0?[1-9]|1[0-2])$/;
    const dayRegex = /^(0?[1-9]|1[0-9]|2[0-9]|3[01])$/;
    const yearRegex = /^(\d{4})$/;

    if (monthRegex.test(month) && dayRegex.test(day) && yearRegex.test(year)) {

        const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

        if (IS[`${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`]) {
            return `${formattedDate} (${IS[`${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`]})`;
        } else {
            return formattedDate;
        }
    } else if (!monthRegex.test(month)) {
        throw new Error("This is not a valid month");
    } else if (!dayRegex.test(day)) {
        throw new Error("This is not a valid day");
    } else if (!yearRegex.test(year)) {
        throw new Error("This is not a valid year");
    }
    console.log('here')
    throw new Error("This is not a valid date");
}
// Example:
console.log(usToIs("12/31/2015"));// 31/12/2015 (Gamlársdagur)
console.log(usToIs("04/20/2023"));// 20/04/2023 (Páskadagur)
console.log(usToIs(4, 20, 2023));// 20/04/2023 (Páskadagur)
console.log(usToIs(6, 8, 2015));// 08/06/2015 (Hvítasunnudagur)
console.log(usToIs("10/12/2022"));// 12/10/2022
console.log(usToIs(13, 8, 2015));// Uncaught Error Error: This is not a valid month
console.log(usToIs("06/32/2015"));// Uncaught Error Error: This is not a valid date
console.log(usToIs(6, 32, 2015));// Uncaught Error Error: This is not a valid day