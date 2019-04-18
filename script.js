let money, time;

function start() {
     money = +prompt("Ваш бюджет на месяц?", '');
     time = prompt("Введите дату в формате YYYY-MM-DD", '');


    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
 start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for(let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = prompt('Во сколько обойдется?', '');

            if( (typeof(a))=== 'string'
                && (typeof(a)) != null
                && (typeof(b)) != null
                && a != ''
                && b != ''
                && a.length < 10) {
                console.log("Done!");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert('Ежедневный расход: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка.")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка.")
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка.")
        } else {
            console.log("Произошла ощибка.")
        }
    },
    chooseOptExpenses: function () {
        for(let i = 0; i < 3; i++) {
            let a = prompt('Статья необязательных расходов в этом месяце', '');
            let x = i + 1;

            if( (typeof(a))=== 'string'
                && (typeof(a)) != null
                && a != ''
                && a.length < 10) {
                console.log("Done!");
                appData.optionalExpenses[x] = a;
            } else {
                i = i - 1;
            }

        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Ваш доход с депозитв за месяц: "+ (appData.monthIncome).toFixed(2));
        }
    },

    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', '');
        if( (typeof(items))=== 'string'
            && (typeof(items)) != null
            && items != '')
        {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?(Перечислите через запятую)', ''));
            appData.income.sort();
            appData.income.forEach(function (elem, i, income){
                alert('Способы доп. заработка'+':'+ i + ' - ' + elem);
            }
            )
            console.log("Done!");
        } else {
            appData.chooseIncome();
        }
    }

};

appData.chooseIncome();


