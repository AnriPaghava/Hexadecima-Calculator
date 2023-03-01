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

function sub(input_array)
{
    var a=input_array[0],b=input_array[1],result;
    var borrow=false,flag=false;
    
    if(a.length<b.length)
        flag=true;
    
    var i,j;
    var final_result="";
    for(i=a.length-1, j=b.length-1; i>=0 && j>=0; i--, j--)
    {
        if(flag)
        {
            var x=parseInt(getValue1(b[j]));
            var y=parseInt(getValue1(a[i]));
        }     
        else
        {
            var x=parseInt(getValue1(a[i]));
            var y=parseInt(getValue1(b[j]));
        }
        if(x>15 || y>15)
        {  
            document.getElementById("input_tape").value='ERROR';
            return;
        }
        if(borrow)
        {
            x=x-1;
        }
        if(x>=y)
        {
            borrow=false;
            result=x-y;
            result=check(result);
        }
        else
        {
            borrow=true;
            x=x+16;
            result=x-y;
            result=check(result);
        }
        var temp=final_result;
        final_result=result+temp;
    }
    while(i>=0)
    {
        var x=parseInt(getValue1(a[i]));
        if(borrow)
        {
            borrow=false;
            x=x-1;
        }
        result=x;
        result=check(result);
        alert('result : '+result);
        var temp=final_result;
        final_result=result+temp;
        i--;
    }
    while(j>=0)
    {
        var y=parseInt(getValue1(b[j]));
        if(borrow)
        {
            borrow=false;
            y=y-1;
        }
        result=y;
        result=check(result);
        var temp=final_result;
        final_result=result+temp;
        j--;
    }
    document.getElementById("input_tape").value=final_result;
}


