/*function fontSelected(e){
    var select = e.target;
    if (select.selectedIndex > 0) { // web font
        var fontID = select.options[select.selectedIndex].value;
        if (!document.getElementById(fontID)) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.id = fontID;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'http://fonts.googleapis.com/css?family='+fontID;
            link.media = 'all';
            head.appendChild(link);
        }
        $(g_selected_obj).css({fontFamily:$('.font_combo option:selected').text()});
    }else{ // default browser font
        $(g_selected_obj).css({fontFamily:'Roboto'});
    }
}

function is_font_loaded(font){
    if (!document.getElementById(font)) 
        return false;
    else
        return true;
}*/
function init_web_font(){
    WebFontConfig = {
        loading: function() {console.log("font loading ...");},
        active: function() {console.log("font loaded");},
        inactive: function() {},
        fontloading: function(familyName, fvd) {},
        fontactive: function(familyName, fvd) {},
        fontinactive: function(familyName, fvd) {}
};
}

function format_google_font(font){
    //on remplace les espaces par des +
    var regex = / /gi;
    var txt1 = font.replace(regex,"+");
    return txt1;
}

function load_google_font(font){
    var fontID = format_google_font(font)
	if (!document.getElementById(fontID)) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.id = fontID;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'http://fonts.googleapis.com/css?family='+fontID;
            link.media = 'all';
            head.appendChild(link);
        }
}