allStudents = [
    {
        id: 1,
        name: 'amr',
        age: 20,
        address: 'address for amr',
        isLeader: true,
        skills: [
            'chess',
            'cook',
            'read'
        ]
    },
    {
        id: 2,
        name: 'amr',
        age: 20,
        address: 'address for amr',
        isLeader: true,
        skills: [
            'chess',
            'cook',
            'read'
        ]
    },
    {
        id: 3,
        name: 'amr',
        age: 20,
        address: 'address for amr',
        isLeader: true,
        skills: [
            'chess',
            'cook',
            'read'
        ]
    },
    {
        id: 4,
        name: 'amr',
        age: 20,
        address: 'address for amr',
        isLeader: true,
        skills: [
            'chess',
            'cook',
            'read'
        ]
    },
]

function style() {
    document.getElementById("fullName").style.border = "solid 5px blue";
    let name = document.getElementById("fullName").value
    if (name.length < 3) {
        document.getElementById("nameValidation").style.display = 'block'
        document.getElementById("fullName").style.backgroundColor = 'gray'
    } else {
        document.getElementById("nameValidation").style.display = 'none'
    }
}

function styleRemove() {
    document.getElementById("fullName").style.border = "1px solid #ced4da";
    let name = document.getElementById("fullName").value
    if (name.length < 3) {
        let valid = document.getElementById("nameValidation")
        valid.style.display = 'block'

    } else {
        document.getElementById("nameValidation").style.display = 'none'
    }
}

document.getElementById("fullName").addEventListener("focus", style);
document.getElementById("fullName").addEventListener("blur", styleRemove);

// email
document.getElementById("email").addEventListener("focus", function () {
    document.getElementById("email").style.border = "solid 5px blue";
});

document.getElementById("email").addEventListener("blur", function () {
    document.getElementById("email").style.border = "1px solid #ced4da";
});

// password
document.getElementById("password").addEventListener("focus", function () {
    let password = document.getElementById("password").value
    if (password.length < 1) {
        document.getElementById("passwordValidation").style.display = 'block'
        document.getElementById("password").style.backgroundColor = 'gray'
    } else {
        document.getElementById("passwordValidation").style.display = 'none'
    }
});
document.getElementById("password").addEventListener("blur", function () {
    let password = document.getElementById("password").value
    if (password.length < 1) {
        document.getElementById("passwordValidation").style.display = 'block'
        document.getElementById("password").style.backgroundColor = 'gray'
    } else {
        document.getElementById("passwordValidation").style.display = 'none'
        document.getElementById("password").style.backgroundColor = 'white'
    }
});

// password confirmed
document.getElementById("repeatPassword").addEventListener("focus", function () {
    let password = document.getElementById("password").value
    let repeatPassword = document.getElementById("repeatPassword").value
    if (password !== repeatPassword || password.length !== repeatPassword.length) {
        document.getElementById("passwordRepeatValidation").style.display = 'block'
        document.getElementById("repeatPassword").style.backgroundColor = 'gray'
    } else {
        document.getElementById("passwordRepeatValidation").style.display = 'none'
        document.getElementById("repeatPassword").style.backgroundColor = 'white'
    }
});

document.getElementById("repeatPassword").addEventListener("blur", function () {
    let password = document.getElementById("password").value
    let repeatPassword = document.getElementById("repeatPassword").value
    if (password !== repeatPassword || password.length !== repeatPassword.length || repeatPassword.length === 0) {
        document.getElementById("passwordRepeatValidation").style.display = 'block'
        document.getElementById("repeatPassword").style.backgroundColor = 'gray'

    } else {
        document.getElementById("passwordRepeatValidation").style.display = 'none'
        document.getElementById("repeatPassword").style.backgroundColor = 'white'
    }
});

function appendImage() {
    const img = document.createElement("img");
    img.style = 'margin-bottom: 10px'
    img.src = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
    const src = document.getElementById("appendImage");
    src.appendChild(img);
    alert(src.childNodes.length)
}

function insertImage() {
    const img = document.createElement("img");
    img.src = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
    const src = document.getElementById("appendImage");
    src.insertBefore(img, src.children[src.childNodes.length]);
}

// save in local storage

function save() {
    let check = document.getElementById('terms')
    let name = document.getElementById("fullName").value
    let password = document.getElementById("password").value
    if (check.checked) {
        localStorage.setItem('name', name)
        localStorage.setItem('password', password)
        console.log('on')
    } else {
        localStorage.clear()
        console.log('clear')
    }
}


function showStudents() {
    let text = '';
    let skills = '';
    for (const student of allStudents) {
        // text += "name : " + student.name + "<br>";
        // skills += "skills : " + student.skills + "<br>";
        text += "Name: " + student.name + "<br> Skills: " + student.skills + "<br><br>";
    }
    document.getElementById("data").innerHTML = text
}

function getData() {
    const inputValue = document.getElementById("inputID").value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users/" + inputValue);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseText;
            console.log(response)
            const data = JSON.parse(response);
            const dataAfterParse = data.data;
            console.log(dataAfterParse.data)
            document.getElementById("div1").innerHTML = "User id: " + dataAfterParse.id + "<br> ID: " + dataAfterParse.id + "<br> Email: " + dataAfterParse.email + "<br> Frist Name: " + dataAfterParse.first_name + "<br> Last Name: " + dataAfterParse.last_name + "<br><img src=" + dataAfterParse.avatar + " +/ alt=''>";
        }
    }
    xhr.send();
}

// get user in select box
function getUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.responseText;
            console.log('response')
            console.log(response)
            const dataAfterParse = JSON.parse(response);
            console.log('dataAfterParse.data')
            console.log(dataAfterParse.data)
            let array = dataAfterParse.data;
            let text = '';
            array.forEach(dataAfterParse => {
                text += "<option value="+ dataAfterParse.id + ">" + dataAfterParse.first_name + "</option>";
            })
            document.getElementById("options").innerHTML = text
        }
    }
    xhr.send();
}

/**
 *
 * @param event
 */
function getById(event) {
    console.log(event.value)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users/" + event.value);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.responseText;
            console.log(response)
            const data = JSON.parse(response);
            const dataAfterParse = data.data;
            console.log(dataAfterParse.data)
            document.getElementById("div1").innerHTML = "User id: " + dataAfterParse.id + "<br> ID: " + dataAfterParse.id + "<br> Email: " + dataAfterParse.email + "<br> Frist Name: " + dataAfterParse.first_name + "<br> Last Name: " + dataAfterParse.last_name + "<br><img src=" + dataAfterParse.avatar + " / alt=''>";
        }
    }
    xhr.send();
}



