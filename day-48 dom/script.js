var body = document.body
var h1 = document.querySelector('h1')

body.addEventListener('keydown',function(dets){ //keydown means koi v key press karung toh function will run, keypresss me kam details milti h , so we used keydown
    // console.log("Hey");
    // console.log(dets);
    // console.log(dets.code); // keycode
    // console.log(dets.key); // key
    h1.innerHTML=dets.code
    
})