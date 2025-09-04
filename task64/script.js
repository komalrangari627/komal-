 // 1. Generate 50 students with random ages
    let students = [];
    for (let i = 1; i <= 50; i++) {
      let age = Math.floor(Math.random() * 10) + 15; // random age 15–24
      students.push({ id: i, name: "Student " + i, age: age });
    }

    // Function to display students in a table
    function displayStudents(data) {
      let html = "<table><tr><th>ID</th><th>Name</th><th>Age</th></tr>";
      data.forEach(s => {
        html += `<tr><td>${s.id}</td><td>${s.name}</td><td>${s.age}</td></tr>`;
      });
      html += "</table>";
      document.getElementById("output").innerHTML = html;
    }

    // 2. Sort by age ascending
    function sortAscending() {
      let sorted = [...students].sort((a, b) => a.age - b.age);
      displayStudents(sorted);
    }

    // 3. Sort by age descending
    function sortDescending() {
      let sorted = [...students].sort((a, b) => b.age - a.age);
      displayStudents(sorted);
    }

    // 4. Calculate average age
    function calculateAverage() {
      let total = students.reduce((sum, s) => sum + s.age, 0);
      let avg = (total / students.length).toFixed(2);
      document.getElementById("average").innerText = "📊 Average Age: " + avg;
    }

    // Initial display (unsorted)
    displayStudents(students);