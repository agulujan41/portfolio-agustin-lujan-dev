document.addEventListener('readystatechange', function(e) {
    if(document.readyState === "loading"){
     console.log("content is loading")
    }
    else if(document.readyState === "interactive"){ 
     console.log("dom content loaded but resources like image or script has not been loaded yet.")
    }
    else{
        let loader = document.getElementById("loader");
        setTimeout(() => {
          loader.classList.add("hidden");
        }, 4000);
    }
   });