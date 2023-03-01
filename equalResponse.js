document.writeln("<script type='text/javascript' src='addition.js'></script>");
document.writeln("<script type='text/javascript' src='subtraction.js'></script>");
document.writeln("<script type='text/javascript' src='multiply.js'></script>");


function getInputTape(input_tape)
{
    var input_array;
    if(input_tape.includes('+'))
    {
        input_array=input_tape.split('+');
        add(input_array);
    }
    else if(input_tape.includes('/'))
    {
        input_array=input_tape.split('/');
        var a=parseInt(input_array[0],16);
        var b=parseInt(input_array[1],16);
        var res=a/b;
        document.getElementById("input_tape").value=parseInt(res,10).toString(16);
    }
    else if(input_tape.includes('-'))
    {
        input_array=input_tape.split('-');
        sub(input_array);
    }
    else if(input_tape.includes('*'))
    {
        input_array=input_tape.split('*');
        multiplication(input_array);
    }
}
