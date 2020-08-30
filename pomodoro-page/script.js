
var contador;
var t_minutos = document.getElementById("timer_minutos");
var t_segundos = document.getElementById("timer_segundos");
var tempo = document.getElementById('tempo')
document.getElementById("botao4").disabled = true;
document.getElementById("botao3").disabled = true;
document.getElementById("botao2").disabled = true;
function fecharbreak() {
    var pausa = document.getElementById('pp')
    if (pausa.value < 1 || pausa.value % 1 != 0) {
        alert('Número inválido');
        window.location.reload()
    }
    t_minutos.innerHTML = ((pausa.value) > 9) ? ('' + (pausa.value)) : ('0' + (pausa.value));
    t_segundos.innerHTML = '00';
    document.getElementById("pomodorii").disabled = true;
}
function fechar() {
    if (tempo.value < 1 || tempo.value % 1 != 0) {
        alert('Número inválido');
        window.location.reload()
    }
    t_minutos.innerHTML = ((tempo.value) > 9) ? ('' + (tempo.value)) : ('0' + (tempo.value)); 
    t_segundos.innerHTML = '00';
    document.getElementById("botao3").disabled = true;
    document.getElementById("botao").disabled = false;
    document.getElementById("pomodorii").disabled = true;
}
function notificacao() {
    if (window.Notification&&Notification.permission!=="denied") {
        Notification.requestPermission(function(status) {
            let n = new Notification('Pomodoro!', {body:'Tempo esgotado!'})
    })
    }
}
function iniciarContador() {
    if (tempo.value < 1 || tempo.value % 1 != 0) {
        alert('Número inválido');
        window.location.reload()
    } else {
        t_minutos.innerHTML = ((tempo.value - 1) > 9) ? ('' + (tempo.value - 1)) : ('0' + (tempo.value - 1));
        t_segundos.innerHTML = '59';
        var m = tempo.value - 1;
        var s = 59;
        contador = setInterval(function() {
            t_minutos.innerHTML = (m  > 9) ? ('' + m) : ('0' + m);
            t_segundos.innerHTML = (s > 9) ? ('' + s) : ('0' + s);
            if (s > 0) {s -= 1 } 
            else if (s == 0 && m > 0) { s = 59; m -= 1; }
            else if (s == 0 & m == 0) {[notificacao()]; [sound()]; [pararContador()]; [fecharbreak()] ; document.getElementById("botao4").disabled = true; document.getElementById("btncomeçar").disabled= false;}
            else {m = tempo.value}
            }, 1000);
            document.getElementById("botao2").disabled = false;
            document.getElementById("botao").disabled = true;
            document.getElementById("botao4").disabled = true;
            document.getElementById("btncomeçar").disabled= true;
        }
    }
function pararContador(){
    clearInterval(contador) == true;
    document.getElementById("botao3").disabled = false;
    document.getElementById("botao2").disabled = true;
    document.getElementById("botao4").disabled = false;
    document.getElementById("pomodorii").disabled = false;
    document.getElementById("btncomeçar").disabled= false;
}
function voltarContador(){
    clearInterval(contador) == false;
    document.getElementById("botao3").disabled = true;
    document.getElementById("botao2").disabled = false;
    document.getElementById("botao4").disabled = true;
    var m = t_minutos.innerHTML.slice(-2);
    var s = t_segundos.innerHTML.slice(-2);
    contador = setInterval(function() {
        t_minutos.innerHTML = (m > 9) ? ('' + m) : ('' + m);
        t_segundos.innerHTML = (s > 9) ? ('' + s) : ('0' + s);
        if (s > 0) {s -= 1 } 
        else if (s == 0 && m > 0) { s = 59; m -= 1; }
        else if (s == 0 & m == 0) {[notificacao()]; [sound()]; [pararContador()]; [fechar()] ; document.getElementById("botao4").disabled = true;}
        else {m.slice(-1) = tempo.value}
        }, 1000);
    document.getElementById("btncomeçar").disabled= true;
}
function desabilitaBotao(){
    document.getElementById("botao").disabled = true;
}
function zerar() {
    document.getElementById("botao3").disabled = true;
    document.getElementById("botao").disabled = false;
    t_minutos.innerHTML = ((tempo.value) > 9) ? ('' + (tempo.value)) : ('0' + (tempo.value));
    t_segundos.innerHTML = '00'
    if (t_minutos == 0 && t_segundos == 0) {
        document.getElementById("botao3").disabled = true;
    }
}
function sound() {
    const som = document.getElementById('som')
    som.play()
}