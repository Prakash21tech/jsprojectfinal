function upDate(previewPic) {
    const imageContainer = document.getElementById("image");
     imageContainer.style.backgroundImage = "url('" + previewPic.src + "')";
     imageContainer.innerHTML = previewPic.alt
     document.getElementById("image").style.backgroundImage =
       "url('" + previewPic.src + "')";
     document.getElementById("image").innerHTML = previewPic.alt;
   }
   
   function unDo() {
    const imageContainer = document.getElementById("image");
     imageContainer.style.backgroundImage = "url('')";
     imageContainer.innerHTML = "Hover over an image below to display here.";
     document.getElementById("image").style.backgroundImage = "url('')";
     document.getElementById("image").innerHTML = "Hover over an image below to display here.";
   }
   
   const previewImages = document.querySelectorAll(".preview");
   
   previewImages.forEach((image, index) => {
     image.setAttribute("tabindex", index + 1);
   
     image.addEventListener("mouseover", () => upDate(image));
     image.addEventListener("mouseout", unDo);
     image.addEventListener("focus", () => upDate(image));
     image.addEventListener("blur", unDo);
   });
     
   console.log("Tabindex attribute added to images");