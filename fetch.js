const ENDPOINT_URL = "http://localhost:3000/";

export default {
    getTodos() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open("GET", ENDPOINT_URL + "todos/", true);

            xhr.onload = function () {
                resolve(xhr.responseText);
            };
            xhr.onerror = function () {
                reject({
                    status: xhr.status
                })
            }
            xhr.send(null);
        });
    },
    setTodo(title) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/todos/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            "id": 0,
            "title": title,
            "done": false
        }));
    }
}