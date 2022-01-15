const endPoint = 6;
let qidx = 0;

function goNextQ(){
  goNext(++qidx);
}

function goNext(qidx){
  if(qidx === 5){
    move_result();
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qidx].q;
  qidx++;
  console.log(qidx);
  nextImg(qidx);
  nextText();

  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qidx+1)+ '%';
}

function nextImg(qidx){
  var imgDiv = document.querySelector('#Q_Img');
  var imgURL = '../static/img/Q' + qidx + ".png";

  imgDiv.innerHTML = "<img src = " +imgURL+" alt = "+qidx+ " class = 'Q_Img img-fluid'></img>";
}

function nextText(){
  var textBox = document.querySelector('.answer');
  textBox.innerHTML = "<input type='text' name='answer' class='col-lg-6 col-md-8 col-sm-10 col-12 my-3 mx-auto'></input>"
}