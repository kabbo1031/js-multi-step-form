let step = 0;
const steps = document.querySelectorAll('.step');

function show(){
  steps.forEach((s,i)=>{
    s.classList.toggle('active', i === step);
  });
}

function next(){
  if(step < steps.length - 1){
    step++;
    show();
  }
}

function prev(){
  if(step > 0){
    step--;
    show();
  }
}

show();
