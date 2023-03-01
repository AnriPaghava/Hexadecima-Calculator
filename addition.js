function check(result)
{
    var temp=result;
    switch (temp) 
    {
        case 10 : temp='A';break;
        case 11 : temp='B';break;
        case 12 : temp='C';break;
        case 13 : temp='D';break;
        case 14 : temp='E';break;
        case 15 : temp='F';break;
    }
    return temp;
}
            
function getValue1(val)
{
    var temp=val;
    switch(val)
    {
        case 'A' : temp='10';break;
        case 'B' : temp='11';break;
        case 'C' : temp='12';break;
        case 'D' : temp='13';break;
        case 'E' : temp='14';break;
        case 'F' : temp='15';break;
    }
    return temp;
}

function add(input_array)
{
    var a=input_array[0],b=input_array[1],result,carry=0;
    var i,j;
    var final_result="";
    for(i=a.length-1, j=b.length-1; i>=0 && j>=0; i--, j--)
    {
        var x=parseInt(getValue1(a[i]));
        var y=parseInt(getValue1(b[j]));            
        if(x>15 || y>15)
        {  
            document.getElementById("input_tape").value='ERROR';
            return;
        }
                    
        result=x+y+carry;
        //პასუხი;
        carry=Math.floor(result/16);
        //მონარჩენი;
        result=result%16;
        result=check(result);
                    
        var temp=final_result;
        final_result=result+temp;
        if(i===0 && j===0 && carry!==0)
        {
            final_result=carry+final_result;
           
        }
    }
    while(i>=0)
    {
        var x=parseInt(getValue1(a[i]));
        result=x+carry;
        carry=Math.floor(result/16);
     
        result=result%16;
        result=check(result);
       
        var temp=final_result;
        final_result=result+temp;
        if(i===0 && carry!==0)
        {
            final_result=carry+final_result;
        }
        i--;
    }
    while(j>=0)
    {
        var y=parseInt(getValue1(b[j]));
        result=y+carry;
        carry=Math.floor(result/16);
        result=result%16;
        result=check(result);
        var temp=final_result;
        final_result=result+temp;
        if(j===0 && carry!==0)
        {
            final_result=carry+final_result;
        }
        j--;
    }
    document.getElementById("input_tape").value=final_result;
    return final_result;
}



