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
        function division(a,b) {
            let res =0;
            for(let i=1;i< a.length;i++){
                const elementvalue = a[i];
                
                let element = parseFloat(elementvalue);
                
                    res = b- element;
                    b=res;
            }
            return res;
        }
        var fstnumtext = sub[0];
        let fstnum= parseFloat(fstnumtext);
        let temp = fstnum;
        let finalres = division(sub,temp);
        math.innerText=finalres;
    }
    else if (mathvalue.indexOf('/') !=  -1){
        const div = mathvalue.split('/');
        function division(a,b) {
            let res =0;
            for(let i=1;i< a.length;i++){
                const elementvalue = a[i];
                
                let element = parseFloat(elementvalue);
                
                    res = b / element;
                    b=res;
            }
            return res;
        }
        let fstnumtext = div[0];
        let fstnum= parseFloat(fstnumtext);
        let temp = fstnum;
        let finalres = division(div,temp);
        math.innerText=finalres;
    }
})
