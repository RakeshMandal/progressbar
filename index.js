const FillProgressBar = () =>{
    const element = document.getElementById('bar');
    let width = 10;
    let id = setInterval(fillBar, 100);
    function fillBar(){
        if(width>=100){
            clearInterval(id)
        }
        else{
            width++
            element.style.width = width + '%'
        }

    }
}