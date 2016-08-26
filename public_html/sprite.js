function Sprite(x,y,largura,altura){
	//parametros
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	//metodos
	this.desenha = function(xCanvas,yCanvas){
		contexto.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);

	}

}


   var bg = new Sprite(0, 0, 900, 550),
  spriteBoneco = new Sprite(0,0,100,100);