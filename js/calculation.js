function display(btnId, inputValue){  
    const display1= document.getElementById('display-field');
    const previousValue= display1.innerText;
document.getElementById(btnId);
const display2= document.getElementById('display-field');
const displayItem = display2.innerText=inputValue;
const newValue = previousValue + displayItem;
display1.innerText=newValue;
}
document.getElementById('btnNo1').addEventListener
('click',function(){
    display('btnNo1', '1');
});
document.getElementById('btnNo4').addEventListener
('click',function(){
    display('btnNo4', '4');
});
document.getElementById('btnNo2').addEventListener
('click',function(){
    display('btnNo2', '2');
});
document.getElementById('btnNo3').addEventListener
('click',function(){
    display('btnNo3', '3');
});
document.getElementById('btnNo5').addEventListener
('click',function(){
    display('btnNo5', '5');
});
document.getElementById('btnNo6').addEventListener
('click',function(){
    display('btnNo6', '6');
});
document.getElementById('btnNo7').addEventListener
('click',function(){
    display('btnNo7', '7');
});
document.getElementById('btnNo8').addEventListener
('click',function(){
    display('btnNo8', '8');
});
document.getElementById('btnNo9').addEventListener
('click',function(){
    display('btnNo9', '9');
});
document.getElementById('btnNo0').addEventListener
('click',function(){
    display('btnNo0', '0');
});
document.getElementById('btNo.').addEventListener
('click',function(){
    display('btNo.', '.');
});
document.getElementById('btNo-').addEventListener
('click',function(){
    display('btNo-', '-');
});
document.getElementById('btNo+').addEventListener
('click',function(){
    display('btNo+','+');
});
document.getElementById('btNoX').addEventListener
('click',function(){
    display('btNoX', 'X');
});
document.getElementById('btNo/').addEventListener
('click',function(){
    display('btNo/', '/');
});
document.getElementById('btnNoC').addEventListener
('click',function(){
    const clear = document.getElementById('display-field');
    clear.innerText='';
});

document.getElementById('btNo=').addEventListener
('click',function(){
    const math = document.getElementById('display-field');
    const mathvalue= math.innerText;  
    if (mathvalue.indexOf('+') !=  -1){
        const plus = mathvalue.split('+');
        let total=0;
        for(const element of plus){
            let elementValue = parseFloat(element);
            total = elementValue + total;
        }
        math.innerText=total;
    }
    else if (mathvalue.indexOf('X') !=  -1){
        const multi = mathvalue.split('X');
        let total= 1;
        for(const element of multi){
            let elementValue = parseFloat(element);
            total = elementValue * total;
        }
        math.innerText=total;
    }

    else if (mathvalue.indexOf('-') !=  -1){
        const sub = mathvalue.split('-');
        function substraction(a,b){
            let c= a-b;
            return c;
        }
        let total1= [0];
        let temp = [0];
        let res =[0];
        for(const element1 of sub){
            let elementValue1 = parseFloat(element1);
            // total1 =  (elementValue)-(total1) ;
            temp[0] = elementValue1;
            temp[1] = res;
            let a  = temp[0];
            let b  = parseFloat(temp[1]);
            res=  (a) - (b);
            // if( temp[0]=temp[1]){
            if(element1 < sub.length){
            // total1 = substraction(b,a);
            res = substraction(b,a);
            math.innerText = res;
            // total1 = substraction(b,a);
            }
            else{
                total1 = substraction(b,a);
                math.innerText = total1;
            }
                // math.innerText = total1;
            // }
            
            // res =parseFloat(total1);
            // res = substraction(total1,temp);
            // total1= res;
        }
        // math.innerText = res;
    }

    else if (mathvalue.indexOf('/') !=  -1){
        const division = mathvalue.split('/');
        function a (b,c){
            let total2 = b/c;
            math.innerText=total2;
        }
        let total= 1;
        for(const element of division){
            let elementValue = parseFloat(element);
            if(elementValue != total){
            a(total,elementValue);
            }
            else if (elementValue == total){
                total = elementValue / total;
                math.innerText=total;
            }  
            total = elementValue / total;
        }
    }
    // else if (mathvalue.indexOf('-') !=  -1){
    //     const plus = mathvalue.split('-');
    //     var a = plus[0];
    //     var b = plus[1];
    //     var num1 = parseFloat(a);
    //     var num2 = parseFloat(b);
    //     var total = num1 - num2;
    //     math.innerText=total;
    // }
    // else if (mathvalue.indexOf('/') !=  -1){
    //     const plus = mathvalue.split('/');
    //     var a = plus[0];
    //     var b = plus[1];
    //     var num1 = parseFloat(a);
    //     var num2 = parseFloat(b);
    //     var total = num1 / num2;
    //     math.innerText=total;
    // }
})
