 let container = document.getElementById("container");
    let createdPara = null; // keep reference

    // Create & append element
    document.getElementById("createBtn").addEventListener("click", () => {
      if (!createdPara) { // only create if not already present
        createdPara = document.createElement("p");
        createdPara.textContent = "✅ I was created and appended!";
        container.appendChild(createdPara);
      }
    });

    // Remove element
    document.getElementById("removeBtn").addEventListener("click", () => {
      if (createdPara) {
        createdPara.remove();
        createdPara = null; // reset reference
      }
    });