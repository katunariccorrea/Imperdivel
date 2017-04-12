	function validaNome(nome){
	if (!(nome.indexOf("1") == -1)
	 || !(nome.indexOf("2") == -1)
	 || !(nome.indexOf("3") == -1)
	 || !(nome.indexOf("4") == -1)
	 || !(nome.indexOf("5") == -1)
	 || !(nome.indexOf("6") == -1)
	 || !(nome.indexOf("7") == -1)
	 || !(nome.indexOf("8") == -1)
	 || !(nome.indexOf("9") == -1)
	 || !(nome.indexOf("0") == -1)
	 || (nome.length < 1))
	{
		document.getElementById("nomeImg").src = "../imagens/errado.svg";
		document.getElementById("nomeImg").innerHTML = "erro";
		return false;
	}
	else {
		document.getElementById("nomeImg").src = "../imagens/certo.svg";
		document.getElementById("nomeImg").innerHTML = "";
		return true;
	}
}

function validaEmail(email){
	if ((email.indexOf("@") == -1) || (email.indexOf(".") == -1)){
//		alert("E-mail Invalido");
		document.getElementById("emailImg").src = "../imagens/errado.svg";
		document.getElementById("emailImg").innerHTML = "erro";
		return false;
	}
	else {
	document.getElementById("emailImg").src = "../imagens/certo.svg";
	document.getElementById("emailImg").innerHTML = "";
	return true;
	}
}


function validaCPF(cpf){
	if ( (cpf.indexOf(".") == 3)  
	&& (cpf.indexOf(".",4) == 7)
	&& (cpf.indexOf("-") == 11)
	&& (!isNaN(cpf.substring(0,3)))
	&& (!isNaN(cpf.substring(4,7)))
	&& (!isNaN(cpf.substring(8,11)))
	&& (!isNaN(cpf.substring(12)))
	&& (cpf.length == 14)
	) {
	document.getElementById("cpfImg").src = "../imagens/certo.svg";
	document.getElementById("cpfImg").innerHTML = "";
	return true;
	}
	else{
//		alert("CPF Invalido");
		document.getElementById("cpfImg").src = "../imagens/errado.svg";
		document.getElementById("cpfImg").innerHTML = "erro";
		return false;
	}

}

function incPista(){
	var valor = parseInt(document.getElementById("pista").value);
	if (valor < 50){
		document.getElementById("pista").value = valor + 1;
		total();
	}
	else
		alert("Excedeu o limite de ingressos por compra");
}
function incCam(){
	var valor = parseInt(document.getElementById("camarote").value);
	if (valor < 50){
		document.getElementById("camarote").value = valor + 1;
	total();	
	}	
	else
		alert("Excedeu o limite de ingressos por compra");
}

function incMesa(){
	var valor = parseInt(document.getElementById("mesanino").value);
	if (valor < 50){
		document.getElementById("mesanino").value = valor + 1;
	total();	
	}	
	else
		alert("Excedeu o limite de ingressos por compra");
}

function decPista(){
	var valor = parseInt(document.getElementById("pista").value);
	if (valor > 0){
		document.getElementById("pista").value = valor - 1;
	total();
}	
	else
		alert("Numero de ingressos invalido");
}
function decCam(){
	var valor = parseInt(document.getElementById("camarote").value);
	if (valor > 0){
		document.getElementById("camarote").value = valor - 1;
	total();
	}	
	else
		alert("Numero de ingressos invalido");
}

function decMesa(){
	var valor = parseInt(document.getElementById("mesanino").value);
	if (valor > 0){
		document.getElementById("mesanino").value = valor - 1;
	total();
	}	
	else
		alert("Numero de ingressos invalido");
		
}
function completaFone(fone) {
	if ((fone.length == 2) && (!isNaN(fone)) ) {
		document.getElementById("telefone").value = "(" + fone + ") ";
	}
	if ((fone.length == 9) && (!isNaN(fone.substring(4)))) {
		document.getElementById("telefone").value = fone + "-";
	}
	if (fone.length > 15) {
		document.getElementById("telefone").value = fone.substring(0,15);	
	}
		
}

function validaFone(fone) {
	if ((fone.length == 14) && (fone != "")) {
		document.getElementById("foneImg").src = "../imagens/certo.svg";
		document.getElementById("foneImg").innerHTML = "";
		return true;
	}
	else {
		document.getElementById("foneImg").src = "../imagens/errado.svg";
		document.getElementById("foneImg").innerHTML = "erro";
		return false;
	}
}

function total() {
	const DESCONTO1 = 0.1;
	const DESCONTO2 = 0.15;
	var quantPista = parseInt(document.getElementById("pista").value);
	var quantCam = parseInt(document.getElementById("camarote").value);
	var quantMesa = parseInt(document.getElementById("mesanino").value);
	var quantIngr = parseInt(quantPista + quantCam + quantMesa);
	var subTotal = (quantPista * vlrIngrPista.value) + (quantCam * vlrIngrCam.value) + (quantMesa * vlrIngrMesa.value);
	document.getElementById("subtotal").value = "R$ " + subTotal;
	var desc = 0;
	if (quantIngr < 10) {
		document.getElementById("desconto").value = "R$ " + desc;
		document.getElementById("desconto").value;
		var Total = subTotal;
		document.getElementById("total").value = "R$ " + Total;	
	}
	if ((quantIngr >= 10) && (quantIngr < 20)) {
		document.getElementById("desconto").value = "R$ " + DESCONTO1 * subTotal;
		desc = document.getElementById("desconto").value;
		var Total = subTotal - (DESCONTO1 * subTotal);
		document.getElementById("total").value = "R$ " + Total;	
			}	
	if (quantIngr >= 20) {
		document.getElementById("desconto").value = "R$ " + DESCONTO2 * subTotal;
		desc = document.getElementById("desconto").value;
		var Total = subTotal - (DESCONTO2 * subTotal);
		document.getElementById("total").value = "R$ " + Total;	
	}	
	document.getElementById("totalIngr").value = quantIngr;
	
}

function completaCred(cred) {
	if ((cred.length == 4) && (!isNaN(cred)) ) {
		document.getElementById("cartaoCred").value = cred + " ";
	}
	if ((cred.length == 9) && (!isNaN(cred.substring(4))) ) {
		document.getElementById("cartaoCred").value = cred + " ";
	}
	if ((cred.length == 14) && (!isNaN(cred.substring(9))) ) {
		document.getElementById("cartaoCred").value = cred + " ";
	}
	if ((cred.length >= 19) && (!isNaN(cred.substring(18))) )  {
		document.getElementById("cartaoCred").value = cred.substring(0,19);	
		document.getElementById("credImg").src = "../imagens/certo.svg";
	}
	else {
		document.getElementById("credImg").src = "../imagens/errado.svg";
	}
	}

function completaCod(cod) {
	if ((isNaN(cod)) || (cod.length > 3) || (cod.length < 3) ) {
		document.getElementById("codsegImg").src = "../imagens/errado.svg";	
		}
		else{ 
		document.getElementById("codsegImg").src = "../imagens/certo.svg";
		}
}

function validaData() {
	var anoR = new Date();
	var mesR = new Date();
	if ((anoV.value == (anoR.getFullYear())) && (mesV.value < (mesR.getMonth()))) {
		document.getElementById("validadeImg").src = "../imagens/errado.svg";	
	//		alert("Cartao Vencido");
		}
	if (anoV.value < (anoR.getFullYear())) {
		document.getElementById("validadeImg").src = "../imagens/errado.svg";	
//		alert("Cartao Vencido");	
	}
	if ((anoV.value >= (anoR.getFullYear())) && (mesV.value >= (mesR.getMonth())) ) {
		document.getElementById("validadeImg").src = "../imagens/certo.svg";
//		alert("tudo certo");
	}
	if (anoV.value > (anoR.getFullYear())) {
		document.getElementById("validadeImg").src = "../imagens/certo.svg";
//		alert("tudo certo");
	}
}

function ingresso() { 
	if (nomeBanda.value == 100) {
	document.getElementById("vlrIngrPista").value = 100;
	document.getElementById("vlrIngrCam").value = 110;
	document.getElementById("vlrIngrMesa").value = 120;
	}
	if (nomeBanda.value == 120) {
	document.getElementById("vlrIngrPista").value = 120;
	document.getElementById("vlrIngrCam").value = 130;
	document.getElementById("vlrIngrMesa").value = 140;
	}
	if (nomeBanda.value == 150) {
	document.getElementById("vlrIngrPista").value = 150;
	document.getElementById("vlrIngrCam").value = 160;
	document.getElementById("vlrIngrMesa").value = 180;
	}
}
//BOTÕES SOMA
//Pista
function alteraSomaPistaOver(){
		var caminho = document.getElementById("somaPista").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaPista").src = "../imagens/SOMA-ONMOUSEOVER.svg"
	
	}
	
function alteraSomaPistaOut(){
		var caminho = document.getElementById("somaPista").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaPista").src = "../imagens/SOMA-NORMAL.svg"
	}

function alteraSomaPistaClick(){
		var caminho = document.getElementById("somaPista").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaPista").src = "../imagens/SOMA-ONCLICK.svg"
	}
//Camarote	
function alteraSomaCamOver(){
		var caminho = document.getElementById("somaCam").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaCam").src = "../imagens/SOMA-ONMOUSEOVER.svg"
	
	}
	
function alteraSomaCamOut(){
		var caminho = document.getElementById("somaCam").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaCam").src = "../imagens/SOMA-NORMAL.svg"
	}

function alteraSomaCamClick(){
		var caminho = document.getElementById("somaCam").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaCam").src = "../imagens/SOMA-ONCLICK.svg"
	}
//	Mesanino
function alteraSomaMesaOver(){
		var caminho = document.getElementById("somaMesa").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaMesa").src = "../imagens/SOMA-ONMOUSEOVER.svg"
	
	}
	
function alteraSomaMesaOut(){
		var caminho = document.getElementById("somaMesa").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaMesa").src = "../imagens/SOMA-NORMAL.svg"
	}

function alteraSomaMesaClick(){
		var caminho = document.getElementById("somaMesa").src;
		var posicao = caminho.indexOf("SOMA-NORMAL.svg");
		document.getElementById("somaMesa").src = "../imagens/SOMA-ONCLICK.svg"
	}	
	
//BOTÕES SUBTRAÇÃO
//Pista
function alteraSubPistaOver(){
		var caminho = document.getElementById("subPista").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subPista").src = "../imagens/SUB-ONMOUSEOVER.svg"
	
	}
	
function alteraSubPistaOut(){
		var caminho = document.getElementById("subPista").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subPista").src = "../imagens/SUB-NORMAL.svg"
	}

function alteraSubPistaClick(){
		var caminho = document.getElementById("subPista").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subPista").src = "../imagens/SUB-ONCLICK.svg"
	}
//Camarote
function alteraSubCamOver(){
		var caminho = document.getElementById("subCam").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subCam").src = "../imagens/SUB-ONMOUSEOVER.svg"
	
	}
	
function alteraSubCamOut(){
		var caminho = document.getElementById("subCam").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subCam").src = "../imagens/SUB-NORMAL.svg"
	}

function alteraSubCamClick(){
		var caminho = document.getElementById("subCam").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subCam").src = "../imagens/SUB-ONCLICK.svg"
	}
//Mesanino
function alteraSubMesaOver(){
		var caminho = document.getElementById("subMesa").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subMesa").src = "../imagens/SUB-ONMOUSEOVER.svg"
	
	}
	
function alteraSubMesaOut(){
		var caminho = document.getElementById("subMesa").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subMesa").src = "../imagens/SUB-NORMAL.svg"
	}

function alteraSubMesaClick(){
		var caminho = document.getElementById("subMesa").src;
		var posicao = caminho.indexOf("SUB-NORMAL.svg");
		document.getElementById("subMesa").src = "../imagens/SUB-ONCLICK.svg"
	}

function limpa(elemento) {
		if ((elemento.value == "Digite aqui seu nome")
		|| (elemento.value == "Digite aqui seu telefone")
		|| (elemento.value == "Digite aqui seu e-mail")
		|| (elemento.value == "Digite aqui seu CPF") ) {
		elemento.value = "";
		}
	}
	
function alteraIngressosOver(){
		var caminho = document.getElementById("buttoningr").src;
		var posicao = caminho.indexOf("ingressos.svg");
		document.getElementById("buttoningr").src = "../imagens/ingressos_onmouseover.svg"
	}

function alteraIngressosOut(){
		var caminho = document.getElementById("buttoningr").src;
		var posicao = caminho.indexOf("ingressos.svg");
		document.getElementById("buttoningr").src = "../imagens/ingressos.svg"
	}

function alteraIngressosClick(){
		var caminho = document.getElementById("buttoningr").src;
		var posicao = caminho.indexOf("ingressos.svg");
		document.getElementById("buttoningr").src = "../imagens/ingressos_onclick.svg"
	}


// alterar cor de parágrafo

// function altera_cor(elemento) {
// 	elemento.sytle.color= "red"; }
// no html é só preciso colocar onclick(altera_cor) 
//não é necessário criar ID.

function enviar_compra(formulario) {
	if ((validaNome(document.getElementById("nome").value))
	&& (validaFone(document.getElementById("telefone").value))
	&& (validaEmail(document.getElementById("e-mail").value))
	&& (validaCPF(document.getElementById("cpf").value))
	) {
	formulario.submit();
	}
	
	}