// let n = 5;
// let string = "";
// for ( let i = 1; i <= n; i++ )
// {
//     for ( let j = 0; j <= n; j++ )
//     {
//         string += '*'
//     }
// }


//Example 4
function example4(rows) {
  for (let i = rows; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

// Example 5
function example5(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
  }
  for (let i = rows - 1; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
  }
}

// Example 6
function example6(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
  for (let i = rows - 1; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// Example 7
function example7(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "*".repeat(rows);
    console.log(stars);
  }
}

// Example 8
function example8(rows) {
  for (let i = 1; i <= rows; i++) {
    if (i === 1) {
      let stars = "*".repeat(rows);
      console.log(stars);
    } else {
      let stars = "*".repeat(1);
      console.log(stars);
    }
  }
}
