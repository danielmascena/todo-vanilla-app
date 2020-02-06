window.getTodos = () => {

    const ENDPOINT_URL = 'http://localhost:3000/todos/1';

    const xhr = new XMLHttpRequest();

    xhr.open("GET", ENDPOINT_URL, true);

    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState == 4) {
            document.getElementById('todos').textContent = xhr.response;
        }
    }
    xhr.send(null);
}