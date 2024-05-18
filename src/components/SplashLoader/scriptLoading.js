
if(document.readyState === "complete") {
  // Fully loaded!
  console.log("loaded");
  let loader = document.getElementById("loader");
  setTimeout(()=>{
    loader.classList.remove("show");
  loader.classList.add("close");
  },3000);
  
}
else if(document.readyState === "interactive") {
  // DOM ready! Images, frames, and other subresources are still downloading.
}
else {
  // Loading still in progress.
  // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.

  window.addEventListener("DOMContentLoaded", () => {
      // DOM ready! Images, frames, and other subresources are still downloading.
  });

  window.addEventListener("load", () => {
      // Fully loaded!
      console.log("loaded");
      let loader = document.getElementById("loader");
      setTimeout(()=>{
        loader.classList.remove("show");
      loader.classList.add("close");
      },3000);
    });
    
}
