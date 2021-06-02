
document.querySelectorAll(".rick").forEach((btn) => {
    btn.addEventListener("click", () => {
      let defaultd = btn.id;
      let navegacion = {
        about: "About.html",
       
       
      };
      let web = navegacion[defaultd] || defaultd;
      
      getPestaña(web);
    });
  });
  
  
  const getPestaña = (pestaña) => {
    fetch(`component/${pestaña}`)
    .then(res=>res.text())
    .then(data=>document.querySelector("#contenido-table").innerHTML = data);
  };