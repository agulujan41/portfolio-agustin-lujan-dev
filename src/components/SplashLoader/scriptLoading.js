document.addEventListener("readystatechange", function (e) {
  if (document.readyState === "loading") {
    console.log("content is loading");
  } else if (document.readyState === "interactive") {
    console.log(
      "dom content loaded but resources like image or script has not been loaded yet."
    );
  } else {
    console.log("loaded");
    let loader = document.getElementById("loader");
    setTimeout(() => {
      loader.classList.add("close");
    }, 3000);
  }
});

if(document.readyState === "complete") {
  // Fully loaded!
  console.log("loaded");
  let loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("close");
  }, 3000);
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
      setTimeout(() => {
        loader.classList.add("close");
      }, 3000);
    });
}
