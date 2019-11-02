function download_svg_file(txt){
	//var text = $('#exportArea').text();
        var name = prompt("taper le nom du fichier","export_snapcaps");
        if((name==="")||(name===undefined))
            return;
        var filename = name+".svg";
        download(filename, txt);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(text));//data:text/plain
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}