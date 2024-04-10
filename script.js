function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fAno = document.getElementById("idade");
  let res = document.getElementById("res");

  if (fAno.value.length <= 3 || fAno.value > ano) {
    fAno.style.border = '1px solid red'
} else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - fAno.value;
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    fAno.style.border = '1px solid green'

    if (fsex[0].checked) {
      genero = "Masculino";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "menino5.webp");
      } else if (idade >= 11 && idade < 19) {
        img.setAttribute("src", "menino15.webp");
      } else if (idade >= 21 && idade < 39) {
        img.setAttribute("src", "homem20.webp");
        //
      } else if (idade >= 40 && idade < 59) {
        img.setAttribute("src", "homem40.webp");
      } else {
        img.setAttribute("src", "homem60.webp");
      }
    } else if (fsex[1].checked) {
      genero = "Feminino";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "menina5.webp");
      } else if (idade >= 11 && idade < 20) {
        img.setAttribute("src", "menina15.webp");
      } else if (idade >= 20 && idade < 39) {
        img.setAttribute("src", "mulher20.webp");
      } else if (idade >= 40 && idade < 59) {
        img.setAttribute("src", "mulher40.webp");
      } else {
        img.setAttribute("src", "mulher60.webp");
    }
  }
  res.innerHTML = `<p>Detectamos o genero ${genero} com ${idade} anos.</p>`;
  res.appendChild(img);
}
}
