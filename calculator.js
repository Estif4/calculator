 let count = 0;
    let array = [''];
    let count2;
    let count3 = 1;
    let count4 = 2;
    let count5 = 1;
    count6 = 0;
 
    function calculator(val) {
     
      let location = document.querySelector('.output');
       
        
        if(val==='('&&count5===0){
          val='*(';
       location.value+=val;
          count5=1;
          count2=1;
          
          


        }
    else if(count === 0) {
            if (val !== '=' && val !== 'del' && val !== 'X' && val !== '+' && val !== '*' && val !== '-' && val !== '/'&&val !== '('&&val !== ')' )  {
                if (location.value.length >= 14) {
                    alert('Maximum characters reached');
                }
                if (count2 === 0) {
                    location.value = '';
                }
                count2 = 1;
                array.push(val);
                location.value += val;
            } else if (val === '+' || val === '-' || val === '*' || val === '/'||val==="("||val===')' ){
                array.push(val);
                location.value += val;
                count2 = 1;
            } else if (val === '=' && location.value !== '') {
                if (count4 === 0) {
                    array.push(')');
                }
                let final = eval(document.querySelector('.output').value);
                if (final === Infinity) {
                    alert('Cannot divide by zero');
                    document.querySelector('.output').value = 'undefined';
                } else {
                    document.querySelector('.output').value = final;
                }
                array.push(final);
                count2 = 0;
            } else if (val === 'del') {
                array.length=0;
                document.querySelector('.output').value = array.join('');
            } else if (val === 'X') {
                array.pop();
                document.querySelector('.output').value = array.join('');
            }
        } else {

        }
    }