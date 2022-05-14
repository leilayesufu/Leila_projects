alert("hiii, press okay--Leils")
var audi=["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"]
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
         sound(buttonInnerHtml)
         animation(buttonInnerHtml)
        }
        )
}

 
document.addEventListener("keypress",function(event){
    sound(event.key)
    animation(event.key)
})


function sound(key){

    switch (key) {
        case "w":
           let adi = new Audio("sounds/crash.mp3")
                      adi.play()
            break;
       case "a":
           let kickb = new Audio("sounds/kick-bass.mp3")
               kickb.play()
               break;
       case "s":
           let snare = new Audio("sounds/snare.mp3")
                   snare.play()
                    break;
       case "d":
           let tom1 = new Audio("sounds/tom-1.mp3")
                        tom1.play()
                        break;
       case "j":
           let tom2 = new Audio("sounds/tom-2.mp3")
                           tom2.play()
                            break;
       case "k":
               let tom3 = new Audio("sounds/tom-3.mp3")
                       tom3.play()
                       break;
       case "l":
           let tom4 = new Audio("sounds/tom-4.mp3")
                   tom4.play()
                   break;
        default:
            console.log(buttonInnerHtml)
            break;
    }  
}
function animation(currentkey){
    var abutton= document.querySelector("."+currentkey)
    // abutton.setAttribute("class","pressed")
    abutton.classList.add("pressed");
    setTimeout(function(){
        abutton.classList.remove("pressed")
    }, 100)
}