const US = { "01-01": "New Year's Day",
"01-20": "Martin Luther King Jr. Day",
"02-17": "Washington's Birthday",
"05-26": "Memorial Day",
"07-04": "Independence Day",
"09-01": "Labor Day",
"10-13": "Columbus Day",
"11-11": "Veterans Day",
"11-27": "Thanksgiving",
"12-25": "Christmas Day"};
const IS = {"01-01": "Nýársdagur",
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
"12-31": "Gamlársdagur"};

const usToIs= function(String){
    let expres= /\d{2}\/\d{2}\/\d{4}$/;
    if (expres.test(String)){
        dataDate = String.split("/");
        day = dataDate[0]+'-'+dataDate[1]
        date = dataDate[1]+'/'+dataDate[0] +'/'+dataDate[2];
        if (IS[day]){
           return console.log(date + ' ('+IS[day]+')' );
        }
        else{return console.log(date); }
    }
    return console.log('This is not a valid expression');
}

usToIs("12/31/2015");
usToIs("04/20/2015");
usToIs("06/08/2015");