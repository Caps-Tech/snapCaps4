var g_canvas;
var _coiffe;
var g_export=false;

function init(){
    init_web_font();
    document.getElementById("myCanvas").style.backgroundColor = 'rgba(158, 167, 184, 0.2)';
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    drawCaps(ctx,_COIFFE_JERO_BLIN);


    /*ctx = new C2S(1000,1000);
    g_export=true;
    drawCaps(ctx,_COIFFE_JERO_BLIN);*/
    //draw_tiger(ctx);
}


function fabric_red_rect(){
    // create a wrapper around native canvas element (with id="c")
    var canvas = new fabric.Canvas('myCanvas');
    // create a rectangle object
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20
    });
    // "add" rectangle onto canvas
    canvas.add(rect);
}

function drawCaps(ctx,struct_produit) {
    initDash();
    var format = struct_produit.format;
    init_coiffe_geometry(Z,format);
    var coiffe = get_caps_params();

    //calcul les 4 points du dev   
    var p_dev = calcul_4_points_dev(coiffe);

    // Create gradient
    var grd = ctx.createLinearGradient(p_dev.P1.x, p_dev.P1.y, p_dev.P4.x, p_dev.P4.y+40);
    grd.addColorStop(0, "#ffff99");
    grd.addColorStop(0.5, "#ffff38");
    grd.addColorStop(1, "white");

    //trace le dev
    draw_dev(ctx,p_dev,coiffe,grd);

    //draw a line
    drawSymetricLineAvant(ctx, coiffe.alphaDev, coiffe.R1, coiffe.hauteurCoiffeGene);
    drawSymetricLineGauche(ctx, coiffe.alphaDev, coiffe.R1, coiffe.hauteurCoiffeGene);
    drawSymetricLineArriere(ctx, coiffe.alphaDev, coiffe.R1, coiffe.hauteurCoiffeGene);
    

    var hauteurMarqueDroit = coiffe.hauteurCoiffeGene - (_H_DECOUPE_CLASS_OPEN + _LARGEUR_CLASS_OPEN)*Z;
     for (var key in struct_produit.cliche_1) {
        var vue = struct_produit.cliche_1[key];
        var angle;
        if(Object.keys(vue).length===0) continue;
        var position = key;
        if(position==="avant") angle =  coiffe.alphaDev* 1/ 4;
        if(position==="gauche") angle =  coiffe.alphaDev* 2/ 4;
        if(position==="arriere") angle =  coiffe.alphaDev* 3/ 4;
        if(position==="droite") angle =  coiffe.alphaDev* 4/ 4;
        if(position==="type") continue;
        var txt = vue.txt;
        var ref = vue.ref;
        var dec_alpha = vue.dec_alpha;
        var rotation = vue.rotation/180*Math.PI;
        var hauteur;
        if(ref==="bdj")
            hauteur=vue.hauteur*Z;
        if(ref==="top")
            hauteur= coiffe.hauteurCoiffeGene - vue.hauteur*Z;
        var font_size = vue.taille;
        var font = vue.police;
        var fillStyle = "black";
        var fill_color = vue.fill_color;
        drawMarqueJupe(angle-dec_alpha, ctx, txt, font,font_size, fill_color, coiffe.alphaDev, hauteur, coiffe.R1, coiffe.hauteurCoiffeGene);
    }

    //LES LOGOS ET LISERETS/////
    //(struct_produit.cliche_2).forEach((value,index,self) => {
    for (var key in struct_produit.cliche_2) {
        var vue = struct_produit.cliche_2[key];
        if(Object.keys(vue).length===0) continue;
        var b_liseret=false;
        var logo,epaisseur,type,type_liseret,url,w=0,h=0,angle,fill_color,stroke_color;
        var position = key;
        if(position==="avant") angle =  coiffe.alphaDev* 1/ 4;
        if(position==="gauche") angle =  coiffe.alphaDev* 2/ 4;
        if(position==="arriere") angle =  coiffe.alphaDev* 3/ 4;
        if(position==="droite") angle =  coiffe.alphaDev* 4/ 4;
        if(vue.type==="logo")
        {
            url = vue.url;
            w = vue.w*Z;
            h = vue.h*Z;
        }
        if(vue.type==="liseret")
        { //analyze liseret
            b_liseret=true;
            type_liseret = vue.type_liseret;
            epaisseur = vue.epaisseur*Z;
            fill_color = vue.fill_color||"";
            stroke_color = vue.stroke_color|"";
        }

        var ref = vue.ref;
        var dec_alpha = vue.dec_alpha;
        var rotation = vue.rotation/180*Math.PI;
        var hauteur;
        if(ref==="bdj")
            hauteur=vue.hauteur*Z;
        if(ref==="top")
            hauteur= coiffe.hauteurCoiffeGene - vue.hauteur*Z;
        
        if(b_liseret){
            var hauteur_liseret = coiffe.hauteurCoiffeGene - hauteur;
            draw_bandeau(ctx,coiffe,hauteur_liseret,epaisseur,fill_color);

        }else{
            draw_image(ctx,coiffe,angle,hauteur,url,w,h);
        }
    };
    
    var Ppointille1 = [CONST_X, CONST_Y + _H_DECOUPE_CLASS_OPEN*Z];
    var Ppointille2 = [CONST_X, CONST_Y + (_H_DECOUPE_CLASS_OPEN + _LARGEUR_CLASS_OPEN)*Z];
    //OF
    drawArcDash(ctx, get_ori().x, get_ori().y, coiffe.alphaDev, coiffe.R1 + 12*Z, Ppointille1, "blue");
    drawArcDash(ctx, get_ori().x, get_ori().y, coiffe.alphaDev, coiffe.R1 + 45*Z, Ppointille2, "blue");
    draw_cannelures(ctx,coiffe,Z);
}
