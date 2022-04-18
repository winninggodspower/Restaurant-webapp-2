$(document).ready(()=>{

    function setActiveDay(params) {
        let currentday = currentDay();
        let currentMenu = $(`a[data-target='${currentday}']`);
        
        //adding the active class to element
        currentMenu.parent().addClass('active')
        
        //clearing the menus
        colapseAllMenu();

        //adding current day menu
        const id = currentMenu.attr('data-target');
        addDayMenu(id)
    }
    setActiveDay()

    $('.page-item').click((e)=>{
        let el = $(e.target); //grapsing the target element
        let menuId = el.attr('data-target'); //grapsing the id

        
        // collapsing all menus
        colapseAllMenu();

        // showing only the clicked menu
        let menu = $(menuId);
        addDayMenu(menu)
    })


    
})

const day = {
    0:'#Sun',
    1:'#Mon',
    2:'#Tue',
    3:'#Wed',
    4:'#Thurs',
    5:'#Fri',
    6:'#Sat',
}

function colapseAllMenu(params) {
    $(".menu-item").addClass("collapse");    
}

function addDayMenu(id) {
    $(id).removeClass('collapse');
    
}

function currentDay() {
    let date = new Date()
    let currentDayNumber = date.getDay();
    let currentDay = day[currentDayNumber];
    return currentDay;
}

