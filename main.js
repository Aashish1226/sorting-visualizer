
let inp_as = document.getElementById('a_size')
var array_size = inp_as.value;
let inp_gen = document.getElementById("a_generate")
let inp_aspeed = document.getElementById("a_speed")

let butts_algos = document.querySelectorAll(".algos button")  


let div_sizes=[];
let divs=[];  
let margin_size;
let cont=document.getElementById("array_container");
cont.style.flexDirection = "row"
inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array() {
    cont.innerHTML = ""; // Clear the existing content of the container element

    for(let i = 0; i < array_size; i++) {
        
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);

        // Set the margin size
        margin_size = 0.1;

        
        // Style the newly created div element
        divs[i].style = "margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%; display:flex; justify-content: center ; align-items: center; color:white; font-size:7px;";
}
}
function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size;

for(var i=0;i<butts_algos.length;i++){
        butts_algos[i].addEventListener("click",runalgo);
}
    

function disable_buttons() {
    // Loop through each button in the butts_algos array
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList.remove();

        // Add the 'butt_locked' class to indicate the button is disabled
        butts_algos[i].classList.add("butt_locked");

        // Set the button's disabled property to true to make it unclickable
        butts_algos[i].disabled = true;
    }

    inp_as.disabled = true;       // Disable the input element for array size
    inp_gen.disabled = true;      
    inp_aspeed.disabled = true;   
}







function runalgo()
{
    disable_buttons();
    

    this.classList.add("butt_selected");
    // this refers to the element that triggered the event, which in this case is the button that was clicked.


    switch(this.innerHTML)
    {

        // this.innerHTML retrieves the text content of the clicked button
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}

