let contador;
var t_minutos = document.getElementById("timer_minutos");
var t_segundos = document.getElementById("timer_segundos");
var tempo = document.getElementById('tempo');
var ciclo = 0;
let meta = document.querySelector('#ciclos');;

function startContador(){
    clearInterval(contador) == true;
    let m = t_minutos.innerHTML;
    let s = t_segundos.innerHTML;
    contador = setInterval(function() {
        t_minutos.innerHTML = (m.toString().length >= 2) ? (m) : ('0' + m);  //pq não consigo usar m no lugar desse t_minutos.innerHTML??
        t_segundos.innerHTML = (s.toString().length >= 2) ? (s) : ('0' + s);
        if (s > 0) {s -= 1 } 
        else if (s == 0 && m > 0) { s = 59; m -= 1;}
        else if (s == 0 & m == 0) {[notificacao()]; [sound()]; ciclo++; console.log(ciclo); [inserirBreak()]; timerr = 'PomoTimer!';}
        else {m = tempo.value}
        if (ciclo == (meta.value)){
            var longpausa = document.querySelector('#lp');
            console.log(longpausa.value)
            t_minutos.innerHTML = (longpausa.value.toString().length >= 2) ? (longpausa.value) : ('0' + longpausa.value);
            t_segundos.innerHTML = '00';
            ciclo = 0;
            startBreak();
        }; 
        timerr = `${t_minutos.innerHTML}:${t_segundos.innerHTML}`
        timerAba(timerr);                                                                   
        }, 1000);
    desabilitaBotao("btncomeçar");
}

function startBreak(){
    clearInterval(contador) == true;
    let m = t_minutos.innerHTML;
    let s = t_segundos.innerHTML;
    contador = setInterval(function() {
        t_minutos.innerHTML = (m.toString().length >= 2) ? (m) : ('0' + m);
        t_segundos.innerHTML = (s.toString().length >= 2) ? (s) : ('0' + s);
        if (s > 0) {s -= 1 } 
        else if (s == 0 && m > 0) { s = 59; m -= 1;}
        else if (s == 0 & m == 0) {[notificacao()]; [sound()]; [inserirTempo()]; timerr = 'PomoTimer!';}
        else {m = tempo.value}  
        timerr = `${t_minutos.innerHTML}:${t_segundos.innerHTML}`
        timerAba(timerr);                                                                     
        }, 1000);
    desabilitaBotao("btncomeçar");
}

function timerAba(timerr){
    document.querySelector('#aba').innerHTML = timerr;
}

function inserirTempo(){
    if (tempo.value < 1 || tempo.value % 1 != 0) {
        alert('Número inválido');
        window.location.reload()
    }
    t_minutos.innerHTML = (tempo.value.toString().length >= 2) ? (tempo.value) : ('0' + tempo.value);
    t_segundos.innerHTML = '00';
    startContador();
}

function inserirBreak(){
    if (ciclo != (meta.value)) {
        var pausa = document.getElementById('pp')
        var longpausa = document.querySelector('#lp');
        if (pausa.value < 1 || pausa.value % 1 != 0 || longpausa.value < 1 || longpausa.value % 1 != 0) {
            alert('Número inválido');
            window.location.reload()
        };
        t_minutos.innerHTML = (pausa.value.toString().length >= 2) ? (pausa.value) : ('0' + pausa.value);
        t_segundos.innerHTML = '00';
        startBreak();
    }
}

function notificacao(){
    if (window.Notification&&Notification.permission!=="denied") {
        Notification.requestPermission(function(status) {
            let n = new Notification('Pomodoro!', {body:'Tempo esgotado!'})
    });
    };
}

function pararContador(){
    clearInterval(contador) == true;
    habilitaBotao("inserirTempoBtn");
    habilitaBotao("btncomeçar");
}

function desabilitaBotao(x){  //dúvida: como que faço pra dar mais de um id para esse parametro?
    document.getElementById(x).disabled = true;
}

function habilitaBotao(y){
    document.getElementById(y).disabled = false;
}

function zerar(){
    clearInterval(contador) == true;
    t_minutos.innerHTML = ((tempo.value) > 9) ? ('' + (tempo.value)) : ('0' + (tempo.value));
    t_segundos.innerHTML = '00';
    timerr = 'PomoTimer!'
    timerAba(timerr);
    habilitaBotao("btncomeçar");
}

function sound(){
    const som = document.getElementById('som')
    som.play()
}