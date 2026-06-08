console.log("Hello world!!!"); 
document.getElementById('name').innerText='hi,hello';

document.getElementById('changeTextButton').onclick = function(){
    document.getElementById('name').innerText='bolo bolo';
    document.getElementById('name').style.backgroundColor='green';
    document.getElementById('name').style.color='white';
}