
document.addEventListener("DOMContentLoaded", function () {
    const w = document.getElementById('weight');
    const h = document.getElementById('height');
    const btn = document.getElementById('submit');
    const r = document.getElementById('res');

    btn.addEventListener('click', function () {
        if (h.value && w.value) {
            let result = (w.value / (h.value * h.value)).toFixed(2); // BMI formula and rounded to 2 decimal places

            let prog1 = document.createElement('div');
            prog1.classList.add('progress');
            prog1.style.width = '70%'

            let prog = document.createElement('div');

            if (result < 18.5) {
                prog.classList.add('progress-bar', 'bg-success');
                r.innerHTML = 'Your BMI is ' + result + ': You\'re Underweight';

            } else if (result >= 18.5 && result <= 24.9) {
                prog.classList.add('progress-bar', 'bg-primary');
                r.innerHTML = 'Your BMI is ' + result + ' : You\'re Perfect!!';

            } else if (result >= 25) {
                prog.classList.add('progress-bar', 'bg-danger');
                r.innerHTML = 'Your BMI is ' + result + ' : You\'re Overweight';

            }
            prog.setAttribute('role', 'progressbar');
            prog.style.width = result + '%';
            prog.style.marginLeft = '-5%';
            prog.setAttribute('aria-valuenow', result);
            prog.setAttribute('aria-valuemin', '0');
            prog.setAttribute('aria-valuemax', '80');

            prog1.appendChild(prog);
            r.appendChild(prog1);
        }
    });



    const convBtn=document.getElementById('convertID');
    const cval=document.getElementById('convText');
    const conR=document.getElementById('convRes');

    convBtn.addEventListener('click',function(){
        if(cval.value){
            let r=cval.value*0.3048;
            conR.innerHTML='Your height in meters='+r;
        }
    })
    
});
