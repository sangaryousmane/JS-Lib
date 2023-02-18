const copy_text=document.getElementById('Inputs')


function copy_me(){
// select text 
copy_text.select();
copy_text.setSelectionRange(0, 99999); // For mobile device


// Copy the text inside the text field
navigator.clipboard.writeText(copy_text.value);

// Alert the copied text
alert("Copied the text: "+ copy_text.value)
}