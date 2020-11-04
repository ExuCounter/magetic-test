const sidebarOpenButton = document.querySelector('.sidebar-heading__open-btn');
const sidebarCloseButton = document.querySelector('.sidebar-heading__close-btn')
const sidebar = document.querySelector('.sidebar');

// Open Menu
sidebarOpenButton.addEventListener('click', (event)=>{
    sidebar.classList.remove('sidebar_mini');
})

// Close Menu
sidebarCloseButton.addEventListener('click', (event)=>{
    sidebar.classList.add('sidebar_mini');
})
