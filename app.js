const
show_value = document.querySelector('#show_value'),
bottom = document.querySelector('.bottom');

let num = '';
const operators = ['+', '-', '*', '/', '%', '.'];

bottom.addEventListener('click', (e) => {
    let target = e.target;
    if (target.nodeName === 'BUTTON') {
        let ti = target.innerHTML;

        if (ti === 'AC') {
            num = '';
            show_value.value = '0';
        }
        else if (ti === 'back') {
            num = num.slice(0, -1);
            show_value.value = num || '0';
        }
        else if (ti === '=') {
            try {
                let sum = eval(num);
                show_value.value = sum;
                num = sum.toString();
            } catch (err) {
                show_value.value = 'خطا';
                num = '';
            }
        }
        else {
            let lastChar = num.slice(-1);

            // جلوگیری از شروع با عملگر یا دوتا عملگر پشت‌سر هم
            if ((num === '' && operators.includes(ti)) ||
                (operators.includes(ti) && operators.includes(lastChar))) {
                return;
            }

            num += ti;
            show_value.value = num;
        }
    }
});
