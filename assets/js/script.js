function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let date = currentDate.toLocaleDateString("zh-cn", dateOptions);
  document.getElementById("header_date").innerHTML = date;
}

function greet() {
  let currentTime = new Date();
  let greet = Math.floor(currentTime.getHours() / 6);
  switch (greet) {
    case 0:
      document.getElementById("header_greet").innerHTML = "晚上好！";
      break;
    case 1:
      document.getElementById("header_greet").innerHTML = "早上好！";
      break;
    case 2:
      document.getElementById("header_greet").innerHTML = "下午好！";
      break;
    case 3:
      document.getElementById("header_greet").innerHTML = "傍晚好！";
      break;
  }
}

function loadFunctions() {
  date();  
  greet();
}


