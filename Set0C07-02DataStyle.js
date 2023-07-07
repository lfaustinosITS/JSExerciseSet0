const usToIs = function (String) {
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
    let expres = /^(0[1-9]|1[0-3])\/(0[1-9]|[1-2][0-9]|3[01])\/\d{4}$/;
    if (expres.test(String)) {
        dataDate = String.split("/");
        day = dataDate[0] + '-' + dataDate[1]
        date = dataDate[1] + '/' + dataDate[0] + '/' + dataDate[2];
        if (IS[day]) {
            return date + ' (' + IS[day] + ')';
        }
        else { return date; }
    }
    throw new Error("This is not a valid date");
}

console.log(usToIs("12/31/2015"));
console.log(usToIs("04/20/2023"));
console.log(usToIs("06/08/2015"));
console.log(usToIs("10/12/2022"));
console.log(usToIs("13/08/2015"));
console.log(usToIs("06/32/2015"));