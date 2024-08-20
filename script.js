function start() {
    const reading = Number(document.getElementById("input").value);
    let result1 = document.querySelector("#result");
  
    if (isNaN(reading) || reading < 1) {
      result1.innerHTML = "Please enter a valid number";
      return;
    }
  
    let rate = 0;
  
    if (reading <= 100) {
      rate = 0; // Free for the first 100 units
    } else if (reading <= 200) {
      rate = (reading - 100) * 2.35; // 2.35 Rs/unit from 101 to 200
    } else if (reading <= 400) {
      rate = (100 * 2.35) + (reading - 200) * 4.7; // 4.7 Rs/unit from 201 to 400
    } else if (reading <= 500) {
      rate = (100 * 2.35) + (200 * 4.7) + (reading - 400) * 6.3; // 6.3 Rs/unit from 401 to 500
    } else {
      // Case for readings above 500 units
      rate = (100 * 0) + (300 * 4.7) + (100 * 6.3);
      
      if (reading <= 600) {
        rate += (reading - 500) * 8.4; // 8.4 Rs/unit from 501 to 600
      } else if (reading <= 800) {
        rate += (100 * 8.4) + (reading - 600) * 9.45; // 9.45 Rs/unit from 601 to 800
      } else if (reading <= 1000) {
        rate += (100 * 8.4) + (200 * 9.45) + (reading - 800) * 10.5; // 10.5 Rs/unit from 801 to 1000
      } else {
        rate += (100 * 8.4) + (200 * 9.45) + (200 * 10.5) + (reading - 1000) * 11.55; // 11.55 Rs/unit above 1000
      }
    }
  
    result1.innerHTML = `Your EB bill is ${rate.toFixed(2)} Rs`;
  }
  