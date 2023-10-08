let btn = document.querySelectorAll('.btn');
let input = document.getElementById("in-out");

let string = "";

Array.from(btn).forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'RESET'){
            string = '';
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})