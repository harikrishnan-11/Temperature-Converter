const boxes = document.querySelectorAll(".box");

boxes.forEach(box=>{
    box.addEventListener('click',()=>{
    
    //remove active from all the boxes
    boxes.forEach(item => {
        item.classList.remove("active")
    });

// add active which one is select.

box.classList.add("active")

    })
})

document.querySelectorAll('.box').forEach(card=>{
    card.addEventListener("click",()=>{
        card.querySelector("input").focus();
    })
})


function fera(){

    let cels = Number(document.getElementById("input").value)

    let fahrenheit = (cels * 9/5 )+32;
    document.getElementById("output").value = fahrenheit.toFixed(3);


}

document.getElementById("input").addEventListener("input",fera);