// // classes , constructors and objects 

// class Kitaab {
//     constructor(name,price,author,color){
//         this.name = name;
//         this.price = price;
//         this.author = author;
//         this.color = color;
//     }

//     pannaPalto(){}
//     bookMarkLagao(){}
//     padhlo(){}

// }

// // class User {
// //     constructor(){
// //         this.username = "Aman";
// //         this.age = 21; 
// //         this.mail = "xyz@gmail.com";
// //     }
// //     khanaKhao(){}
// //     paniPiyo(){}
// // }

// let k1 = new Kitaab("Moral",1200,"Aman Yadav","White");
// let k2 = new Kitaab("The Appaertment",1500,"Aman","Grey");
// let k3 = new Kitaab("The Childhood",2500,"A","Black");



//prototypes:

class Human {
    constructor(){
        this.name = "aman";
        this.age = 21;
    }

    // saasLo() {
    //     console.log("Hi");
        
    // }
    // khanaKhao() {
    // console.log("Hello");
    // } instead do one thing is :-
}

Human.prototype.saasLo = function(){
    console.log("Hey");
};
Human.prototype.khanaKhao = function(){
    console.log("Hello");
};


let h1 = new Human();
let h2 = new Human();

