// var arr = [
//     {
//         user:'aman',
//         age: 27,
//         city: 'Surat'
//     },{
//         user:'chaman',
//         age: 23,
//         city: 'Mumbai'
//     },
//     {
//         user:'Naman',
//         age: 24,
//         city: 'Pune'
//     },
//     {
//         user:'Baman',
//         age: 21,
//         city: 'Delhi'
//     }
// ]

// // console.log(arr[2].user);
// // console.log(arr[2].age);
// // console.log(arr[2].city);
// var sum = 0;
// arr.forEach(function(elem){
//     // console.log(elem.user);
//     // console.log(elem.city);
//     // console.log(elem.age);
//     sum += elem.age

// })

// console.log((sum)/arr.length);


// // //  Sum of elements of array:
// // var arrr = [10,20,30,40,50]
// // var sum = 0
// // arrr.forEach(function(elements){
// //     sum += elements
// // })

// // console.log(sum);



// backend se data in form of .json , it looks similar to array of objects:
// we are learning about how to show backend se aya data into frontend
const users = [
  {
    fullname: "Emma Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Passionate about creating intuitive and beautiful digital experiences for web and mobile products.",
    tags: ["design", "ui", "ux", "figma"]
  },
  {
    fullname: "Michael Chen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Full Stack Developer",
    description: "Builds scalable web applications using modern JavaScript frameworks and cloud technologies.",
    tags: ["javascript", "nodejs", "react", "backend"]
  },
  {
    fullname: "Sophia Martinez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    profession: "Digital Marketer",
    description: "Helps brands grow online through data-driven marketing strategies and content campaigns.",
    tags: ["marketing", "seo", "branding", "content"]
  },
  {
    fullname: "David Williams",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Product Manager",
    description: "Leads product strategy and development by aligning user needs with business goals.",
    tags: ["product", "strategy", "agile", "management"]
  },
  {
    fullname: "Aisha Khan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Scientist",
    description: "Specializes in machine learning models and data analysis to extract insights from large datasets.",
    tags: ["python", "machine-learning", "data", "ai"]
  }
];

var sum = ''
users.forEach(function(elem){
    sum = sum + `        <div class="card">
             <img src="${elem.image}" alt="">
             <h3>${elem.fullname}</h3>
             <h4>${elem.profession}</h4>
             <p>${elem.description}</p>
        </div>`
    
})

var main = document.querySelector('main')

main.innerHTML = sum


// STEPS:
// 1.Make an Array of objects and name it users.
// 2.Make a card in html.
// 3. users pe lagao for each and print hello n times.
// 4. make a variable sum and give it a value '' (empty string).
// 5. add on hello in sum and print it outside loop.
// 6. add on card (html code) in sum and print it too.
// 7. select parent (main) and put in its sum innerHTML.
// 8. replace sample data with real data of array of objects.