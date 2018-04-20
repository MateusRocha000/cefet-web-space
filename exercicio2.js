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

document.getElementById("proximo").addEventListener("click", function(e) {galery(1)});
document.getElementById("anterior").addEventListener("click", function(e) {galery(-1)});

let ind = 0;

function galery(value)
{
	if(value === 1)
	{
		ind = (ind + value);
		if(ind > 4)
			ind = ind - todasAsImagens.length;
	}
	if(value === -1)
	{
		ind = (ind + value);
		if(ind < 0)
			ind = ind + todasAsImagens.length;
	}

	document.getElementById('slide').src = servidorDasImagens+todasAsImagens[ind];
}