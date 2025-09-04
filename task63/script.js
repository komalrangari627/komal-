 let table = null;
    let rowCount = 0;
    const maxRows = 5; // maximum rows allowed

    document.getElementById("actionBtn").addEventListener("click", () => {
      let container = document.getElementById("tableContainer");

      // 1st click: create table
      if (!table) {
        table = document.createElement("table");

        // add header row
        let header = table.insertRow();
        let cell1 = header.insertCell();
        let cell2 = header.insertCell();
        cell1.innerText = "ID";
        cell2.innerText = "Name";

        container.appendChild(table);
        rowCount = 0; // reset counter
      } 
      // add rows until maxRows
      else if (rowCount < maxRows) {
        rowCount++;
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerText = rowCount;
        cell2.innerText = "Row " + rowCount;
      } 
      // show alert after maxRows
      else {
        alert("Table size: No more data");
      }
    });