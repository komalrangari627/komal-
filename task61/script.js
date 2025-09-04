 let e2 = document.getElementById("e2");
    let originalClasses = "size";

    function addBorder() {
      let hasBorder = e2.classList.contains("border");
      if (hasBorder) {
        // Reset back to original
        e2.className = originalClasses;
      } else {
        // Add border + increase size
        e2.className = originalClasses + " border big";
      }
    }

    document.getElementById("btn1").addEventListener("click", addBorder);