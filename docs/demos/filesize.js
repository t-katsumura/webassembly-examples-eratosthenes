function get_filesize(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            size = parseInt(xhr.getResponseHeader("Content-Length"));
            document.getElementById("filesize").textContent =
                "prime.wasm is : " + size.toLocaleString() + " bytes";
        }
    };
    xhr.send();
}

fetch("prime.wasm", { method: "HEAD" })
    .then((resp) => {
        if (resp.headers.get("Content-Type") == "application/wasm") {
            get_filesize("prime.wasm");
        }
    })
    .catch((err) => { });

// for assembly script
fetch("build/prime.wasm", { method: "HEAD" })
    .then((resp) => {
        if (resp.headers.get("Content-Type") == "application/wasm") {
            get_filesize("build/prime.wasm");
        }
    })
    .catch((err) => { });

// for rust
fetch("pkg/prime_bg.wasm", { method: "HEAD" })
    .then((resp) => {
        if (resp.headers.get("Content-Type") == "application/wasm") {
            get_filesize("pkg/prime_bg.wasm");
        }
    })
    .catch((err) => { });
