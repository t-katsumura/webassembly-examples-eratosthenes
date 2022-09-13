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

if (document.title.includes("AssemblyScript")) {
    get_filesize("build/prime.wasm");
} else if (document.title.includes("Rust")) {
    get_filesize("pkg/prime_bg.wasm");
} else if (document.title.includes("Java JWebAssembly")) {
    get_filesize("pkg/prime.wasm");
} else {
    get_filesize("prime.wasm");
}
