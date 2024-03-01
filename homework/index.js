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
