
//creating function dispaly for calling numbers in input feild work start//

var result = document.getElementById("result")

function display(number){

    result.value  +=number;

}

//creating function dispaly for calling numbers in input feild work end// 


 

// work start for clear scren creating function clrs//

function clrs(){

    result.value = "";
}

// work end for clear scren creating function clrs//

// work start for delete number one by one creating function del//

var slice = document.getElementById("slice")
function dle(){

   result.value = result.value.slice(0,-1);
}

// work end for delete number one by one creating function del//


// work start for calculate numbers creating function calculate//

function calculate(){
    var final_num = result.value;

    var final_result = eval(final_num);

    result.value = final_result;
}

// work end for calculate number  creating function calculate//
