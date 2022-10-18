

const button = document.getElementById("get-data");

const getData = () => {
    fetch(`https://akademia108.pl/api/ajax/get-post.php`, {
        mode: `cors`,
        method: `GET`,
    })
    .then(response => response.json())
    .then((data) => {
        let userId = data.userId;
        let id = data.id;
        let importedBody = data.body;
        let title = data.title;

        
        let idDescribe = document.createElement('p');
        let userIdDescribe = document.createElement('p');
        let titleDescribe = document.createElement('p');
        let importedBodyDescribe = document.createElement('p');
        let hr = document.createElement('hr');

        idDescribe.innerText = `ID: ${id}`;
        userIdDescribe.innerText = `User ID: ${userId}`;
        titleDescribe.innerText = `Title: ${title}`;
        importedBodyDescribe.innerText = `Body: ${importedBody}`;

        document.body.appendChild(idDescribe);
        document.body.appendChild(userIdDescribe);
        document.body.appendChild(titleDescribe);
        document.body.appendChild(importedBodyDescribe);
        document.body.appendChild(hr);
    })
    .catch((error) => {
        console.error(error);
    })
}

button.addEventListener("click", getData)
