
  const url = 'https://superheroapi.com/api.php/4520919148002635/100/image';

const fetchJoke = async () => {

 return await fetch(url)
    .then((response) =>  response.json())
    .then((data) =>  data.url)
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}
console.log(fetchJoke());
const creatImage = async(imag)=> {const image =document.getElementById('imag')
  image.setAttribute('src', `${imag}`)
return  image;
} 
window.onload =  creatImage(fetchJoke())

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported