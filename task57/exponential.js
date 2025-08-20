// Version 1: Use built-in Math.pow (works for any real exponent)
function powerFromPrompt() {
  const base = Number(window.prompt("Enter the base (e.g., 2.5):"));
  const exp  = Number(window.prompt("Enter the exponent (e.g., 3):"));

  if (Number.isNaN(base) || Number.isNaN(exp)) {
    console.log("❌ Invalid input. Please enter numeric values.");
    return null;
  }

  const result = Math.pow(base, exp); // or: base ** exp
  console.log(`${base} ^ ${exp} = ${result}`);
  return result;
}

// Call it:
powerFromPrompt();
