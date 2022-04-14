	function aktiv(ttt){
		let text = document.getElementById("text")
		text.value += ttt.value
	}
	function raqam(bbbbb,ttt){
		let text = document.getElementById("text")
		text.value += bbbbb
		
	}
	function amal(rrr){
		let text = document.getElementById("text")
		text.value += rrr.value
		
	}
	function hisobla(){
		let text = document.getElementById("text")
		let javob = eval(text.value)
		text.value = javob
	}
	function tozalash(){
		document.getElementById("text").value = ''
	}