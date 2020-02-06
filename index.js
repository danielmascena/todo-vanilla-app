import ajax from "./fetch";
import "./index.css";

const ENDPOINT_URL = "http://localhost:3000/";

window.getAllTodos = () => {
    fetch(ENDPOINT_URL + 'todos/')
        .then(response => response.json())
        .then(items => document.getElementById("todos").innerHTML = items.map(item => ListItem(item)).join(''))
        .catch(error => console.error('an error occours', error));
};

function ListItem({
    id,
    title,
    done
}) {

    return `
    <li>
        <span>ID: ${id}, title: ${title}</span><input type="checkbox" value=${done}>
    </li>
    `
}

window.setTodo = function (form) {
    console.log('title', form.title.value);
    const payload = {
        "id": 0,
        "title": form.title.value,
        "done": false
    };

    const data = new window.FormData();
    data.append("json", JSON.stringify(payload));
    fetch(ENDPOINT_URL + 'todos/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => console.log(response.json()))
        .then(data => window.alert(JSON.stringify(data)))
        .catch(error => console.error("post error", error));
};