
function Bubble() // Defining the function for Bubble Sort
{
    document.getElementById("Time_Worst").innerText = "O(N^2)"; 
    document.getElementById("Time_Average").innerText = "Θ(N^2)"; 
    document.getElementById("Time_Best").innerText = "Ω(N)";

    document.getElementById("Space_Worst").innerText = "O(1)"; 
    c_delay = 0; // Initializing the delay variable for visualization purposes (used to control animation speed)

    for (var i = 0; i < array_size - 1; i++) 
    {
        for (var j = 0; j < array_size - i - 1; j++) // The inner loop iterates over the unsorted part of the array (excluding the last sorted elements)
        {
            div_update(divs[j], div_sizes[j], "yellow"); // Visual update: color the current element yellow to indicate it's being compared

            if (div_sizes[j] > div_sizes[j + 1]) 
            {
                // Swap the two elements since they are out of order
                div_update(divs[j], div_sizes[j], "red"); 
                div_update(divs[j + 1], div_sizes[j + 1], "red"); 

               
                var temp = div_sizes[j]; 
                div_sizes[j] = div_sizes[j + 1]; 
                div_sizes[j + 1] = temp; 
                div_update(divs[j], div_sizes[j], "red"); 
                div_update(divs[j + 1], div_sizes[j + 1], "red"); 
            }
            div_update(divs[j], div_sizes[j], "blue");
        }

        // Marking the last sorted element in green, indicating it's in its correct position
        div_update(divs[j], div_sizes[j], "green");
    }

    // Mark the first element in green (since it's now in the correct position)
    div_update(divs[0], div_sizes[0], "green");

    enable_buttons(); 
}
