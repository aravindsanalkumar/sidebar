let closeBtn = document.querySelector('.close-btn');
let toggleBtn = document.querySelector('.sidebar-toggle');
let sidebar = document.querySelector('.sidebar');

// toggleBtn.addEventListener('click',function(){
//    if(sidebar.classList.contains('show-sidebar')){
//     sidebar.classList.remove('show-sidebar');
//    }
//    else{
//     sidebar.classList.add('show-sidebar');
//    }
// });


closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
});

toggleBtn.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar');
});