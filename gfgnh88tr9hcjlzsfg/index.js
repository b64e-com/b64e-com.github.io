var up = false
var up1 = false
var down = false
var down0 = false
var left = false
var right = false
var left0 = false
var right0 = false
var b = false
var a = false

let show = () => {
    let secretCode = prompt("shh, whats the magic word?")
    let url = "../"  + btoa(secretCode) + "/index.html"
    window.location.replace(url)
}
let check = () => {
    console.log(up)
    console.log(up1)
    console.log(down)
    console.log(down0)
    console.log(left)
    console.log(left0)
    console.log(right)
    console.log(right0)
    console.log(b)
    console.log(a)

    if (up && up1 && down && down0 && left && left0 && right && right0 && b && a){
        show()
    }else{
        
    }
}
