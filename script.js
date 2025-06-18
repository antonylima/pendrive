function uploadFiles() {
    let files = document.getElementById("fileInput").files;
    let formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]);
    }

    fetch("upload.php", { method: "POST", body: formData })
        .then(response => response.text())
        .then(data => {
            if(formData){ 
            alert("Arquivos enviados com sucesso!");
            }
        })
}

function listFiles() {
    fetch("list.php")
        .then(response => response.json())
        .then(files => {
            let fileList = document.getElementById("fileList");
            fileList.innerHTML = "";
            files.forEach(file => {
                fileList.innerHTML += `<p>${file} <button onclick="downloadFile('${file}')">Baixar</button></p>`;
            });
        });
        document.querySelector("#lista").style.display = "block";
}

function downloadFile(fileName) {
    window.location.href = `download.php?file=${fileName}`;
}
