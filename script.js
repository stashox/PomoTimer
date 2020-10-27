let contador;
var t_minutos = document.getElementById("timer_minutos");
var t_segundos = document.getElementById("timer_segundos");
var tempo = document.getElementById('tempo')


function startContador(){ 
    clearInterval(contador) == true;
    let m = t_minutos.innerHTML.toString();
    let s = t_segundos.innerHTML.toString();
    contador = setInterval(function() {
        t_minutos.innerHTML = (m.toString().length >= 2) ? (m) : ('0' + m);  //pq não consigo usar m no lugar desse t_minutos.innerHTML??
        t_segundos.innerHTML = (s.toString().length >= 2) ? (s) : ('0' + s);
        if (s > 0) {s -= 1 } 
        else if (s == 0 && m > 0) { s = 59; m -= 1;}
        else if (s == 0 & m == 0) {[notificacao()]; [sound()]; [pararContador()]; [startBreak()]; timerr = 'PomoTimer!'}
        else {m = tempo.value}
        timerr = `${t_minutos.innerHTML}:${t_segundos.innerHTML}`
        timerAba(timerr);                                                                     
        }, 1000);
    desabilitaBotao("btncomeçar");
}

function startBreak(){
    var pausa = document.getElementById('pp')
    if (pausa.value < 1 || pausa.value % 1 != 0) {
        alert('Número inválido');
        window.location.reload()
    };
    t_minutos.innerHTML = ((pausa.value) > 9) ? ('' + (pausa.value)) : ('0' + (pausa.value));
    t_segundos.innerHTML = '00';
    clearInterval(contador) == true;
    let m = t_minutos.innerHTML;
    let s = t_segundos.innerHTML;
    contador = setInterval(function() {
        t_minutos.innerHTML = (m.toString().length >= 2) ? (m) : ('0' + m);  //pq não consigo usar m no lugar desse t_minutos.innerHTML??
        t_segundos.innerHTML = (s.toString().length >= 2) ? (s) : ('0' + s);
        if (s > 0) {s -= 1 } 
        else if (s == 0 && m > 0) { s = 59; m -= 1;}
        else if (s == 0 & m == 0) {[notificacao()]; [sound()]; [pararContador()]; [startContador()]; timerr = 'PomoTimer!'}
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
    t_minutos.innerHTML = ((tempo.value) > 9) ? ('' + (tempo.value)) : ('0' + (tempo.value));
    t_segundos.innerHTML = '00';
    desabilitaBotao(pomodoriBtn);
    habilitaBotao(startBtn);
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