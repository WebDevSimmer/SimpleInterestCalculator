function simple_interest(){
  var p,t,r,si,ci;
 
  p = document.getElementById("first").value;
  t = document.getElementById("second").value;
  r = document.getElementById("third").value;
 
  if( p == "" || p <= 0)
    {
        alert("Enter a positive number");
      document.getElementById("first").focus();
     return;
    }
        
  si = parseInt((p*t*r)/100);
  amount = p*Math.pow((1+r/100),t);
  ci = amount-p;
 
  var dateNow = new Date();
  var date = new Date();
  var yearNow = parseInt(date.getFullYear() + parseInt(t));
  
  
  
  
 document.getElementById("result").innerHTML = "If you deposit $" + "<span class='highlight'>" + p + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + r + "%</span>." + "<br> You will earn an simple interest of $" + "<span class='highlight'>" + si + "</span>" + "<br> You will earn an compound interest of $" + "<span class='highlight'>" + ci + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
 } 



function SliderValue()
{
    var slider = document.getElementById("third");
    var output = document.getElementById("rate_val");
    output.innerHTML = slider.value+"%"; 
    
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}