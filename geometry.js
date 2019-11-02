/***********************************
coiffe : tableau contenant les caractérisitiques de la coiffe
z : zoom
************************************/
function calcul_dim_coiffe(coiffe,z){
    var conicite_rad = coiffe.conicite * Math.PI / 180;
    coiffe.hauteurCoiffeGene = coiffe.hauteur / Math.cos(conicite_rad);
    coiffe.diamBase = 2 * Math.tan(conicite_rad) * coiffe.hauteur + coiffe.diamTete;
    coiffe.alphaDev = (coiffe.diamBase - coiffe.diamTete) / coiffe.hauteur * Math.PI / Math.cos(conicite_rad);
    coiffe.R1 = Math.PI * coiffe.diamTete / coiffe.alphaDev;
}

function init_coiffe_geometry(z,coiffe_selection){
    _coiffe = coiffe_selection;
    _coiffe.hauteur = coiffe_selection.hauteur*z;
    _coiffe.diamTete = coiffe_selection.diamTete*z;
    _coiffe.conicite = coiffe_selection.conicite;
    calcul_dim_coiffe(_coiffe,z);
}



function calcul_4_points_dev_bandeau(bandeau){
    var p_dev = points_dev;
    p_dev.P1 = pos(bandeau.R1, bandeau.alphaDev, CONST_X, CONST_Y+bandeau.hauteur);
    p_dev.P2 = {x:CONST_X, y:CONST_Y+ bandeau.hauteur};
    p_dev.P3 = {x:CONST_X, y:(CONST_Y + bandeau.hauteur + bandeau.largeur_bandeau)};
    p_dev.P4 = pos(bandeau.R1 + bandeau.largeur_bandeau, bandeau.alphaDev, p_dev.P3.x, p_dev.P3.y);
    return p_dev;
}


function calcul_4_points_dev(coiffe){
    var p_dev = points_dev;
    p_dev.P1 = pos(coiffe.R1, coiffe.alphaDev, CONST_X, CONST_Y);
    p_dev.P2 = {x:CONST_X, y:CONST_Y};
    p_dev.P3 = {x:CONST_X, y:(CONST_Y + coiffe.hauteurCoiffeGene)};
    p_dev.P4 = pos(coiffe.R1 + coiffe.hauteurCoiffeGene, coiffe.alphaDev, p_dev.P3.x, p_dev.P3.y);
    return p_dev;
}

function pos(R, alphaDev, x, y) {
    var corde = 2 * R * Math.sin(alphaDev / 2);
    var dy = Math.sin(alphaDev / 2) * corde;
    var dx = Math.cos(alphaDev / 2) * corde;
    return {x:x + dx, y:y - dy};
}

function get_caps_params(){
    return _coiffe;
}

function get_ori(){
    return{
        x:_ORI_X,
        y:CONST_Y - parseInt(get_caps_params().R1)
    };
}