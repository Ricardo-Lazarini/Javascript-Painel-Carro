// Todas as variaveis globais devem ser declaradas aqui.
var start = document.getElementById('start');
var cima = document.getElementById('cima');
var baixo = document.getElementById('baixo');
var marcha = document.querySelector('#marcha');
var pontContagiro = document.getElementById('ponteiroContagiro');
var painelCentral = document.querySelector('.painelCentral');
var telaEsquerda = document.querySelector('.esquerda');
var abrirFecharMenu = document.getElementById('abrirMenu');
var menu = document.querySelector('.menu');
var contagiro = document.querySelector('.contagiro');
var velocimetro = document.querySelector('.velocimetro');
var painelGasolina = document.querySelector('.painelGasolina');
var painelTemperatura = document.querySelector('.painelTemperatura'); 
var caminhonete = document.getElementById('caminhonete');
var logo = document.querySelector('.logo');
var logoAbertura = document.getElementById('logoAbertura');
var seta1 = document.getElementById('seta1');
var seta2 = document.getElementById('seta2');
var selecionar = document.getElementById('selecionar');
var gps = document.querySelector('.gps');
var descricao = document.querySelector('#descricao');

function CloseMenu(){
	menu.style.display = 'none'
}

// lista de itens que existem dentro do painel/ Usar para fecha-los ou abri-los
var itensConfiguracao = [contagiro,velocimetro,painelTemperatura,painelGasolina,painelCentral,logo,
logoAbertura,seta1,seta2]


// Funcoes


// Funcao para ligar veiculo  
// Mostrar no contagiro a marcha, trocar cor do botao ligar  
// trocar nome do botao para ligado
// Exibir botoes fisicos da tela da esquerda
start.addEventListener('click', function() {
	start.classList = 'started';
	start.innerText = 'Ligado';
	start.style.color = 'green';
	marcha.style.display = 'block';
	painelCentral.style.display = 'block';	
	pontContagiro.style.transform = 'rotate(-145deg)';
	pontContagiro.style.transition = '1s';
	telaEsquerda.style.opacity = '0.9';
})


var gps2 = 'desativado';
// Abre o menu de configurações
var fecharMenu = 'desativado';
abrirFecharMenu.addEventListener('click', function() {
	if(fecharMenu == 'desativado'){
		menu.style.display = 'block';
		caminhonete.style.display = 'block';
		fecharMenu = 'ativado';
		for(var i = 0; i < 9; i++){
			itensConfiguracao[i].style.display = 'none';
			gps.style.display = 'none';
			velocimetro.style.marginTop = '90px';
			velocimetro.style.marginLeft = '630px';
		}
	}else{
		CloseMenu();
		fecharMenu = 'desativado';
		gps.style.display = 'none';
		velocimetro.style.marginTop = '90px';
		for(var bg = 0; bg < 9; bg++){
			itensConfiguracao[bg].style.display = 'block';
			velocimetro.style.marginLeft = '630px';
			descricao.style.display = 'none';
			}
		}

})




// variavel x global
var x = 0;

// Selecionar para cima
cima.addEventListener('click', event => {
	var op  = event.target; 
	if( op == 'baixo') {
		
	}else{
		if(x > 1){
			x -= 1
			var l = 'l' + x;
			var z = 'l' + ( parseInt(x) + 1 );
			var escolha = document.getElementById(l);
			escolha.style.backgroundColor = '#008B8B';
			escolha.style.color = 'white';
			var anterior = document.getElementById(z);
			anterior.style.backgroundColor = 'silver';
			anterior.style.borderBottom = 'solid 1px grey';
			anterior.style.height = '17px';
			anterior.style.color = '#008B8B';	
			console.log(x)
		}else{
			x = 1;
			console.log(x)
		}
	}
	
})


// Seleciona para baixo
baixo.addEventListener('click', event => {
	var op  = event.target; 
	if( op == 'baixo') {

	}else{
		if(x < 10){
		x += 1
		var l = 'l' + x;
		var a = 'l' + ( parseInt(x) - 1 );

		var escolha = document.getElementById(l);
		escolha.style.backgroundColor = 'tomato';
		escolha.style.color = 'white';
		var anterior = document.getElementById(a);
		anterior.style.backgroundColor = 'silver';
		anterior.style.borderBottom = 'solid 1px grey';
		anterior.style.height = '17px';
		anterior.style.color = '#008B8B';
		console.log(x)
		}else{
			x = 10;
			console.log(x)
		}

	}
	
})

// Lista de itens ativos

var abs2 = 'desativado';
var qxq2 = 'desativado'
var redu2 = 'desativado'
var assistente2 = 'desativado'
var controletracao2 = 'desativado'
var cor = 'azul';
selecionar.addEventListener('click', function() {
	if(x == 1 ){
			CloseMenu()
			gps.style.display = 'block';
			velocimetro.style.display = 'block';
			velocimetro.style.marginTop = '50px';
			velocimetro.style.marginLeft = '650px';
			gps2 = 'ativado';

	}else if(x == 2){
		if(abs2 == 'desativado'){
			const abs = document.getElementById('abs');
			abs.style.display = 'block';
			abs.style.marginTop = '-32px'
			abs.style.marginLeft = '62px'
			const smabs =document.getElementById('smabs');
			smabs.innerText = ' Ativado';
			abs2 = 'ativado';	
		}else{
			const abs = document.getElementById('abs');
			abs.style.display = 'none';	
			const smabs =document.getElementById('smabs');
			smabs.innerText = '';
			abs2 = 'desativado';	
			}	
	}else if(x == 3){
		if(qxq2 == 'desativado'){
			const qxq = document.getElementById('qxq');
			qxq.style.display = 'block';
			qxq.style.marginTop = '-32px'
			qxq.style.marginLeft = '112px'
			const smqxq = document.getElementById('smqxq');
			smqxq.innerText = 'Ativado';
			qxq2 = 'ativado';
		}else{
			const qxq = document.getElementById('qxq');
			qxq.style.display = 'none';
			const smqxq = document.getElementById('smqxq');
			smqxq.innerText = '';
			qxq2 = 'desativado'
		}
	}else if(x == 4){
		if(redu2 == 'desativado'){
			const redu = document.getElementById('reduzida');
			reduzida.style.display = 'block';
			reduzida.style.marginTop = '-36px'
			reduzida.style.marginLeft = '162px'
			const smredu = document.getElementById('smredu');
			smredu.innerText = ' Ativado';
			redu2 = 'ativado';
		}else{
			const redu = document.getElementById('reduzida');
			reduzida.style.display = 'none';
			const smredu = document.getElementById('smredu');
			smredu.innerText = '';
			redu2 = 'desativado';
		}
		
	}else if(x == 5){
		if(assistente2 == 'desativado'){
			const assistente = document.getElementById('assistente');
			assistente.style.display = 'block';
			assistente.style.marginTop = '-36px'
			assistente.style.marginLeft = '222px'
			const smassi = document.getElementById('smassi');
			smassi.innerText = ' Ativado';
			assistente2 = 'ativado';
		}else{
			const assistente = document.getElementById('assistente');
			assistente.style.display = 'none';
			const smassi = document.getElementById('smassi');
			smassi.innerText = '';
			assistente2 = 'desativado';
		}	
	}else if(x == 6){
		if(controletracao2 == 'desativado'){
			const controletracao = document.getElementById('controletracao');
			controletracao.style.display = 'block';
			controletracao.style.marginTop = '-36px'
			controletracao.style.marginLeft = '282px'
			const cont = document.getElementById('cont');
			cont.innerText = '  Ativado';
			controletracao2 = 'ativado';
		}else{
			const controletracao = document.getElementById('controletracao');
			controletracao.style.display = 'none';
			const cont = document.getElementById('cont');
			cont.innerText = '';
			controletracao2 = 'desativado';
		}
	}else if(x == 7){
		const caminhonete = document.getElementById('caminhonete');
		caminhonete.style.display = 'none';
		const descricao = document.getElementById('descricao');
		descricao.style.display = 'block';
		const pneu = document.getElementById('pneu');
		pneu.style.display = 'block';
		const descli = document.querySelectorAll('.itensdesc')
		descli[0].innerText = 'Pneu frente lado direito 100-Psi';
		descli[1].innerText = 'Pneu frente lado esquerdo 90-Psi';
		descli[2].innerText = 'Pneu traseiro lado dieito 74-Psi';
		descli[3].innerText = 'Pneu traseiro lado esquerdo 91-Psi';

		const oleo = document.getElementById('oleo');
		oleo.style.display = 'none';
		const turbina = document.getElementById('turbina');
		turbina.style.display = 'none';
		const item = document.getElementById('item');
		item.innerText = 'Pressão dos pneus';
	}else if(x == 8){
		const caminhonete = document.getElementById('caminhonete');
		caminhonete.style.display = 'none';
		const descricao = document.getElementById('descricao');
		descricao.style.display = 'block';
		const oleo = document.getElementById('oleo');
		oleo.style.display = 'block';
		const descli = document.querySelectorAll('.itensdesc')
		descli[0].innerText = '150°-C';
		descli[1].innerText = '';
		descli[2].innerText = '';
		descli[3].innerText = '';
		const pneu = document.getElementById('pneu');
		pneu.style.display = 'none';
		const turbina = document.getElementById('turbina');
		turbina.style.display = 'none';
		const item = document.getElementById('item');
		item.innerText = 'Temperatura do oleo';

	}else if(x == 9){
		const caminhonete = document.getElementById('caminhonete');
		caminhonete.style.display = 'none';
		const descricao = document.getElementById('descricao');
		descricao.style.display = 'block';
		const turbina = document.getElementById('turbina');
		turbina.style.display = 'block';
		const descli = document.querySelectorAll('.itensdesc')
		descli[0].innerText = '0.5 - Kgf/cm²';
		descli[1].innerText = '';
		descli[2].innerText = '';
		descli[3].innerText = '';
		const pneu = document.getElementById('pneu');
		pneu.style.display = 'none';
		const oleo = document.getElementById('oleo');
		oleo.style.display = 'none';
		const item = document.getElementById('item');
		item.innerText = 'Pressão da turbina';

	}else if(x == 10){
			CloseMenu();
			for(var i = 0; i < 9; i++){
			itensConfiguracao[i].style.display = 'block';
			const l10 = document.getElementById('l10');
			l10.style.backgroundColor = 'silver';
			l10.style.color = '#008B8B';	
			x = 0;
			const descricao = document.getElementById('descricao');
			descricao.style.display = 'none';
			if(cor == 'azul'){
				const painelfull = document.querySelector('.painel');
				painelfull.style.backgroundImage = 'linear-gradient(#008080, #48D1CC, #008080)'; 
				painelfull.style.borderRight = 'solid 10px #0A1B2A'
				painelfull.style.borderLeft = 'solid 10px #0A1B2A'
				const painelCentral = document.querySelector('.painelCentral');
				painelCentral.style.backgroundImage = 'linear-gradient(#0B4C5F, #48D1CC, #0B4C5F)';
				cor = 'verde';
			}else{
				const painelfull = document.querySelector('.painel');
				painelfull.style.backgroundImage = 'linear-gradient(#00008B, #4682B4, #00008B)'; 
				painelfull.style.borderRight = 'solid 10px #CD5C5C';
				painelfull.style.borderLeft = 'solid 10px #CD5C5C';
				const painelCentral = document.querySelector('.painelCentral');
				painelCentral.style.backgroundImage = 'linear-gradient(#0000FF, #87CEEB, #0000FF)';
				cor = 'azul';
			} 
		}

	}

// Botao para fechar GPS 






}
) // End function selecionar






















// const start = document.querySelector('#start');
// start.addEventListener('click', function() {
// 	start.innerText = 'Ligado';
// 	start.style.color = "green";
// 	start.classList = 'started';
// })

// var menu = document.querySelector('.menu');

// const selecionar = document.querySelector('#');
// selecionar.addEventListener('click', function() {
// 	const velocimetro = document.querySelector('.');
// 	velocimetro.classList = 'fecharVelocimetro'; 
// 	const ponteiro = document.querySelector('.ponteiro');
// 	ponteiro.style.display = 'none';
// 	menu.style.display = 'block';
// })



// const fecharMenu = document.querySelector('#fecharMenu');
// fecharMenu.addEventListener('click', function() {
// 	menu.style.display = 'none';
// 	const velocimetro = document.querySelector('.fecharVelocimetro');
// 	velocimetro.classList = '';
// 	const ponteiro = document.querySelector('.ponteiro');
// 	ponteiro.style.display = 'block';
// })