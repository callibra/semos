var nizaGradovi = [{grad:"Atina", populacija:1100000},{grad:"Ankara", populacija:1455000},{grad:"Berlin", populacija:2600000},{grad:"Skopje", populacija:650000},{grad:"Solun", populacija:850000},{grad:"London", populacija:10500000},{grad:"Moskva", populacija:12500000}]

var selectGradovi = nizaGradovi.filter(function (nizaGradovi) {
    if (nizaGradovi.populacija >= 999999 && nizaGradovi.grad [0] ==="A") {
      return true;
    }
  });  
       console.log(selectGradovi);

///////////////////////////////////////////////////////////////////////////////////////////////////

