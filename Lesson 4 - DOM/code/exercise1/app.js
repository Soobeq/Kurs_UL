window.addEventListener('DOMContentLoaded', function () {
     //When the page structure is loaded...
    var even = document.getElementById('evennumber');
    var odd = document.getElementById('oddnumber');
    var sub = document.getElementById('submit');
    
  sub.addEventListener('click', function() {
    var oddV = odd.value; 
    var evenV = even.value;
 
    if (oddV%2 == 1) { 
        odd.classList.remove('invalid');
        odd.classList.add('valid');
    } else {
        odd.classList.remove('valid');
        odd.classList.add('invalid');
    }
    if (evenV%2 == 0) { 
        even.classList.remove('invalid');
        even.classList.add('valid');
    } else {
        even.classList.remove('valid');
        even.classList.add('invalid');
    }
    });
 });

//