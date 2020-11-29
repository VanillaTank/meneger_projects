function $(el) {
    return document.querySelector(el);
}

window.addEventListener("DOMContentLoaded", () => {
    const progectList = document.querySelector('.progectList');

    function getProgectList() {
        progects.forEach(item => {
            progectList.innerHTML += `<li class="progectList-item" id="${item.id}">${item.name}</li>`
        })
    }
    getProgectList(); //получаем список всех проектов

    function getInfo(id) {  //дает инфу о проекте
        if(progects[id-1].id == id) {
            $('#titleProject').innerHTML = progects[id-1].name;
            $('#descriptionProject').innerHTML = progects[id-1].description;
            $('#dateProject').innerHTML = progects[id-1].date;
        }
        if(id in tasks) {
            $('#tasksProgect').innerHTML = "";
            for (i=0; i < tasks[id].length; i++) {
                $('#tasksProgect').innerHTML += `<li>${tasks[id][i].text}</li>` 
            }
        }else {
            $('#tasksProgect').innerHTML = `<li>Список задач пуст</li>`
        }
    }

    for (i = 0; i < progects.length; i++) {   //вешаем на каждый проект обработчик клика
        progectList.childNodes[i].addEventListener('click', () => {
            let elem = event.target;
            let id = Number(elem.id);
            getInfo(id);
        })
    }
})

