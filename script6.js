

  const progress = document.querySelector('.progress');
  const percentText = document.querySelector('.percentage');

  let percent = 0;

  const interval = setInterval(() => {
    if (percent >= 100) {
      clearInterval(interval);
      percentText.textContent = "Completed!";
      return;
    }
    percent++;
    progress.style.width = percent + '%';
    percentText.textContent = percent + '%';
  }, 100);

// let count = 10;
// let tm = setInterval(function(){
//     if(count >= 0) {
//     console.log(count);
//     count--;
// }
//     else clearInterval (tm);
// }, 1000);

// let tm = setInterval(function(){
//     console.log("SET TIME OUT ");
// }, 3000);

// let tm = setTimeout(function(){
//     console.log("SET TIME OUT ");
// }, 5000);

// clearTimeout(tm);

// setTimeout(function(){
//     console.log("SET TIME OUT ");
// }, 5000);