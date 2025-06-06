 // -------------- Helper: detect and return a type string --------------
    function detectType(raw) {
      // 1) Trim whitespace first:
      let v = raw.trim();

      // 2) If user literally typed "undefined" or nothing at all:
      if (v === "undefined" || v === "") {
        return "undefined";
      }

      // 3) If user literally typed "null":
      if (v === "null") {
        return "null";
      }

      // 4) Boolean check (strings "true"/"false"):
      if (v === "true" || v === "false") {
        return "boolean";
      }

      // 5) Number check: try converting to Number(), then test isNaN():
      if (!isNaN(Number(v))) {
        return "number";
      }

      // 6) If none of the above, treat as string:
      return "string";
    }

    // -------------- Main Level 6 Function --------------
    function runLevel6() {
      // 1) Get the raw input
      let rawInput = document.getElementById("inputData").value;

      // 2) Use a while-loop to force user to enter something (not empty):
      while (rawInput.trim() === "") {
        rawInput = prompt("Please enter at least one value (cannot be blank):");
        if (rawInput === null) {
          // User clicked "Cancel" → bail out entirely
          document.getElementById("output").innerText = "Operation canceled.";
          return;
        }
      }

      // 3) Split into an array by comma:
      const items = rawInput.split(",");

      // 4) Initialize counters for each type:
      let numCount       = 0;
      let boolCount      = 0;
      let stringCount    = 0;
      let nullCount      = 0;
      let undefinedCount = 0;

      // 5) Build a list of results (we’ll accumulate lines into a single string):
      let resultLines = "";

      // 6) Loop through each raw item (using a for‑loop)
      for (let i = 0; i < items.length; i++) {
        let one = items[i];
        let t  = detectType(one); // get "number" / "boolean" / "string" / "null" / "undefined"

        // 7) Use a switch or if/else to increment the right counter:
        switch (t) {
          case "number":
            numCount++;
            break;
          case "boolean":
            boolCount++;
            break;
          case "null":
            nullCount++;
            break;
          case "undefined":
            undefinedCount++;
            break;
          default:
            // "string"
            stringCount++;
            break;
        }

        // 8) Build an output line for this item:
        resultLines +=
          "Value: " + one.trim() + " — Type: " + t.charAt(0).toUpperCase() + t.slice(1) + "\n";
      }

      // 9) After the loop, append a blank line and then the summary counts:
      resultLines += "\n" + "Summary:\n";
      resultLines += "  Numbers: "    + numCount       + "\n";
      resultLines += "  Booleans: "   + boolCount      + "\n";
      resultLines += "  Strings: "    + stringCount    + "\n";
      resultLines += "  Nulls: "      + nullCount      + "\n";
      resultLines += "  Undefineds: " + undefinedCount + "\n";

      // 10) Finally, put that entire block into the page:
      document.getElementById("output").innerText = resultLines;
    }