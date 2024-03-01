const getGithubData = (p) => {
    return fetch(p);
}


const dataTodo = getGithubData('https://jsonplaceholder.typicode.com/todos');

dataTodo
    .then( (response) => {return response.json()})
    .then((result) => {
        const containerForRepo = document.querySelector('#info');
        result.forEach((elem) => {
            const repElem = document.createElement('li');
            repElem.textContent = 'UserId: ' + elem.userId + ' ID: ' + elem.id + ' Title: ' + elem.title + ' | Completed: ' + elem.completed;
            containerForRepo.append(repElem);
        });
    })


// можно и так
// const getGithubData = (p) => {
//     return fetch(p);
// }

// const dataTodo = getGithubData('https://jsonplaceholder.typicode.com/todos');

// dataTodo
//     .then( (response) => {return response.json()})
//     .then((result) => {result.forEach((elem) => showList(elem))});

// const showList = (todo) => {
//     const containerForRepo = document.querySelector('#info');
//     const repElem = document.createElement('li');
//     repElem.textContent = 'UserId: ' + todo.userId + ' ID: ' + todo.id + ' Title: ' + todo.title + ' | Completed: ' + todo.completed;
//     containerForRepo.appendChild(repElem);
// };
