const calcularTempoRestante = (dataFutura) => {
    const agora=new Date().getTime()
    const diferençaDeDatas = dataFutura - agora;

    const segundosDeUmMinuto = 60*1000;
    const segundosDeUmaHora = 60*segundosDeUmMinuto;
    const segundosDoDia = 24*segundosDeUmaHora;

    const dias = Math.floor(diferençaDeDatas/segundosDoDia);
    const horas = Math.floor((diferençaDeDatas % segundosDoDia) / segundosDeUmaHora);
    const minutos = Math.floor((diferençaDeDatas % segundosDeUmaHora) / segundosDeUmMinuto);
    const segundos = Math.floor((diferençaDeDatas % segundosDeUmMinuto) / 1000);

    return {
        dias,
        horas,
        minutos,
        segundos
    }
}


const atualizarTemporizador = () =>{
    const dataFutura = new Date('2024-10-17T23:59:59').getTime();
    const tempoRestante= calcularTempoRestante(dataFutura);

    document.getElementById('dias').innerText = `Dias ${tempoRestante.dias}`;
    document.getElementById('horas').innerText = `Horas ${tempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${tempoRestante.minutos}`;
    document.getElementById('segundos').innerText = `Segundos ${tempoRestante.segundos}`;
}

const intercalo = setInterval(atualizarTemporizador,1000)
