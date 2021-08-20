function runProgram(input) {
   let str = input.trim().split("\n");
   let str1 = str[0].trim();
   let str2 = str[1].trim();
  //  console.log(str1);
  //  console.log(str2);
   
  }
  if (process.env.USERNAME === "Mowgli") {
    runProgram(`anagram
    nag a ram`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  