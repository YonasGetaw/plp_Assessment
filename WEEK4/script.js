<script>
  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("table tbody");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop default form submit

      // Grab input values
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value.trim();
      const phone = form.phone.value.trim();

      // Basic validation
      if (!name || !email || !password) {
        alert("Please fill in all required fields.");
        return;
      }

      // Email simple regex check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Create a new row
      const newRow = document.createElement("tr");

      // Create cells
      const nameCell = document.createElement("td");
      nameCell.textContent = name;

      const emailCell = document.createElement("td");
      emailCell.textContent = email;

      const phoneCell = document.createElement("td");
      phoneCell.textContent = phone || "N/A";

      // Append cells to row
      newRow.appendChild(nameCell);
      newRow.appendChild(emailCell);
      newRow.appendChild(phoneCell);

      // Append row to table
      tableBody.appendChild(newRow);

      // Reset form fields
      form.reset();

      alert("Registration successful! Welcome aboard.");
    });
  });
</script>
