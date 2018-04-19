// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let prox = document.getElementById("proximo");
let ant = document.getElementById("anterior");

prox.addEventListener("click", galery(1));
ant.addEventListener("click", galery(-1));

ind = 0;

function galery(value)
{
	if(value === 1)
	{
		ind = (ind + value);
		if(ind > todasAsImagens.length)
			ind = ind - todasAsImagens.length;
	}
	if(value === -1)
	{
		ind = (ind - value)
		if(ind < 0)
			ind = ind + todasAsImagens.length;
	}

	document.getElementById('slide').src = servidorDasImagens+todasAsImagens[ind];
}