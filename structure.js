var CONST_X = 100;
var CONST_Y = 150;
var Z=4.08;
const _ORI_X = 100;
const _H_CANNELURE = 35;
const _LARGEUR_CLASS_OPEN = 33;
const _H_DECOUPE_CLASS_OPEN = 10;

const COIFFE = {
    hauteur:122,
    diamTete:34,
    conicite:4.36,
    R1:0,
    diamBase:0,
    alphaDev:0,
    hauteurCoiffeGene:0
};


const _FORMAT_MATHU = {
    hauteur:190,
    diamTete:41,
    conicite:5.86,
    R1:0,
    diamBase:0,
    alphaDev:0,
    hauteurCoiffeGene:0
};
const _MARQUES_MATHU = {
    type:"txt",
    avant:{txt:"MATHUSALEM 5.86",hauteur:23,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"sans serif",taille:"40px"},
    gauche:{txt:"t\u00eate 41",hauteur:33,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"sans serif",taille:"40px"},
    arriere:{txt:"HAUTEUR 190",hauteur:23,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"Times",taille:"40px"},
    droite:{txt:"CHAMPAGNE",hauteur:_H_DECOUPE_CLASS_OPEN + _LARGEUR_CLASS_OPEN,ref:"top",rotation:-90,dec_x:0,dec_alpha:0.01,police:"sans serif",taille:"20px"},
    contour:""
};
const _LOGO_MATHU = {
    avant:"",
    gauche:{type:"logo",url:"grunePunkt.png",epaisseur:0.1,hauteur:23,ref:"bdj",rotation:0,dec_x:0,dec_alpha:0},
    arriere:"",
    droite:"",
    contour:{type:"liseret",type_liseret:"simple",epaisseur:0.1,hauteur:23,ref:"bdj",rotation:0,dec_x:0,dec_alpha:0}
};
const _COIFFE_MATHU_STANDARD = {
    format:_FORMAT_MATHU,
    cliche_1:_MARQUES_MATHU,
    cliche_2:_LOGO_MATHU
};
//////////////////////////////////////////
const _FORMAT_JERO = {
    hauteur:160,
    diamTete:37.5,
    conicite:4.936,
    R1:0,
    diamBase:0,
    alphaDev:0,
    hauteurCoiffeGene:0
};

const _MARQUES_JERO = {
    type:"txt",
    avant:{txt:"H.BLIN",hauteur:35,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"Playfair Display",taille:"90px",fill_color:"#000080"},
    gauche:{txt:"t\u00eate 37,5",hauteur:33,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"Pacifico",taille:"40px",fill_color:"#000080"},
    arriere:{txt:"HAUTEUR 160",hauteur:33,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"Roboto",taille:"40px",fill_color:"#000080"},
    droite:{txt:"CHAMPAGNE",hauteur:_H_DECOUPE_CLASS_OPEN + _LARGEUR_CLASS_OPEN,ref:"top",rotation:-90,dec_x:0,dec_alpha:0.01,police:"Roboto",taille:"20px",fill_color:"#000080"},
    contour:""
};

const _LOGO_JERO = {
    avant:{type:"logo",url:"logo_HB.png",epaisseur:0.1,hauteur:8,ref:"bdj",rotation:0,dec_x:0,dec_alpha:0,w:35,h:20},
    gauche:{type:"logo",url:"grunePunkt.png",epaisseur:0.1,hauteur:23,ref:"bdj",rotation:0,dec_x:0,dec_alpha:0,w:10,h:10},
    arriere:"",
    droite:"",
    contour:{type:"liseret",type_liseret:"simple",epaisseur:28,hauteur:5,ref:"bdj",rotation:0,dec_x:0,dec_alpha:0,fill_color:"#000080"}
};

const _COIFFE_JERO_STANDARD = {
    format:_FORMAT_JERO,
    cliche_1:_MARQUES_JERO,
    cliche_2:_LOGO_JERO
};
////////////////////////////////////////////

const _FORMAT_JERO_BLIN = {
    hauteur:160,
    diamTete:37.5,
    conicite:4.936,
    R1:0,
    diamBase:0,
    alphaDev:0,
    hauteurCoiffeGene:0
};

const _MARQUES_JERO_BLIN = {
    type:"txt",
    avant:{txt:"H.BLIN",hauteur:35,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"Pacifico",taille:"90px",fill_color:"#000080"},
    /*gauche:{txt:"t\u00eate 37,5",hauteur:33,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"Pacifico",taille:"40px",fill_color:"#000080"},
    arriere:{txt:"HAUTEUR 160",hauteur:33,ref:"bdj",rotation:-90,dec_x:0,dec_alpha:0,police:"Roboto",taille:"40px",fill_color:"#000080"},
    droite:{txt:"CHAMPAGNE",hauteur:_H_DECOUPE_CLASS_OPEN + _LARGEUR_CLASS_OPEN,ref:"top",rotation:-90,dec_x:0,dec_alpha:0.01,police:"Roboto",taille:"20px",fill_color:"#000080"},*/
    contour:""
};

const _LOGO_JERO_BLIN = {
    avant:{type:"logo",url:"logo_HB.png",epaisseur:0.1,hauteur:8,ref:"bdj",rotation:0,dec_x:0,dec_alpha:0,w:35,h:20},
    //gauche:{type:"logo",url:"grunePunkt.png",epaisseur:0.1,hauteur:23,ref:"bdj",rotation:0,dec_x:0,dec_alpha:0,w:10,h:10},
    arriere:"",
    droite:"",
    contour:{type:"liseret",type_liseret:"simple",epaisseur:28,hauteur:5,ref:"bdj",rotation:0,dec_x:0,dec_alpha:0,fill_color:"#000080"}
};

const _COIFFE_JERO_BLIN = {
    format:_FORMAT_JERO_BLIN,
    cliche_1:_MARQUES_JERO_BLIN,
    cliche_2:_LOGO_JERO_BLIN
};
////////////////////////////////////////////



var _DIST_CANN = 8;

const _CANNELURE = {
    r:8,
    cx:parseInt(CONST_X),
    cy: parseInt(CONST_Y + _DIST_CANN),
    h_cannelure : 150,
    a_rad:0
};

var points_dev = {
    P1:{
        x:0,
        y:0
    },
    P2:{
        x:0,
        y:0
    },
    P3:{
        x:0,
        y:0
    },
    P4:{
        x:0,
        y:0
    }
};
