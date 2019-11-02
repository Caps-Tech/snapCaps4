function draw_dev(ctx,p_dev,coiffe,color){
    ctx.beginPath();
    ctx.fillStyle = color;
    //ctx.strokeStyle = color;
    ctx.moveTo(p_dev.P1.x, p_dev.P1.y);
    ctx.arc(get_ori().x, get_ori().y, coiffe.R1, 0.5 * Math.PI - coiffe.alphaDev, 0.5 * Math.PI, 0);
    ctx.lineTo(p_dev.P3.x, p_dev.P3.y);
    ctx.arc(get_ori().x, get_ori().y, coiffe.R1 + coiffe.hauteurCoiffeGene, 0.5 * Math.PI, 0.5 * Math.PI - coiffe.alphaDev, 1);
    ctx.closePath();
    //ctx.stroke();
    ctx.fill();

}

function draw_bandeau(ctx,coiffe,hauteur,largeur_bandeau,color){
    hauteur -=largeur_bandeau;//la hauteur se fait à partir du bas du bandeau ou liseret
    var bandeau={
        R1:coiffe.R1+hauteur,
        hauteur:hauteur,
        alphaDev:coiffe.alphaDev,
        hauteurCoiffeGene:(largeur_bandeau),
        largeur_bandeau:largeur_bandeau
    };

    
    var bandeau_points = calcul_4_points_dev_bandeau(bandeau);
    draw_dev(ctx,bandeau_points,bandeau,color);
}

function draw_cannelure(ctx,arg){
    var r = arg.r;
    var cx = arg.cx;
    var cy = arg.cy;
    var h_cannelure = arg.h_cannelure;
    //var a_deg = arg.a_deg;
    var a_rad= arg.a_rad;

    var dx = r*Math.cos(a_rad);
    var dy = r*Math.sin(a_rad);
    var dhy = h_cannelure*Math.cos(a_rad);
    var dhx = h_cannelure*Math.sin(a_rad);    
    var cax = cx + dx;
    var cay = cy - dy;

    var cbx = cx - dx;
    var cby = cy + dy;

    var ccx = cax + dhx;
    var ccy = cay + dhy;
    var cdx = ccx + 2*dx;
    var cdy = ccy - 2*dy;


    ctx.moveTo(cbx,cby);
    ctx.arc(cx, cy, r, -Math.PI-a_rad, 0-a_rad);
    ctx.lineTo(ccx,ccy);
    ctx.arc(cx+dhx, cy+dhy, r, -a_rad, Math.PI-a_rad);
    ctx.lineTo(cbx,cby);
    ctx.stroke();
}

function drawLiseret(ctx, orix, oriy, angle, R, point, color) {
    var typeLine = [];
    drawArc(ctx, orix, oriy, angle, R, point, typeLine, color);
}

function drawArcDash(ctx, orix, oriy, angle, R, point, color) {
    var typeLine = [5];
    drawArc(ctx, orix, oriy, angle, R, point, typeLine, color);
}

function drawArcLine(ctx, orix, oriy, angle, R, point, color) {
    var typeLine = [];
    drawArc(ctx, orix, oriy, angle, R, point, typeLine, color);
}

function drawArc(ctx, orix, oriy, angle, R, point, typeLine, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(point[0], point[1]);
    ctx.setLineDash(typeLine);
    ctx.arc(orix, oriy, R, 0.5 * Math.PI, 0.5 * Math.PI - angle, 1);
    ctx.stroke();
}
function drawSymetricLine(angle, ctx, R1, hauteurCoiffeGene, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    var typeLine = [5, 15];
    //calcul L according P2
    var L1 = pos(R1 - 30, angle, CONST_X, CONST_Y - 30);
    var L2 = pos(R1 + hauteurCoiffeGene + 30, angle, CONST_X, CONST_Y + hauteurCoiffeGene + 30);

    ctx.setLineDash(typeLine);
    ctx.moveTo(L1.x, L1.y);
    ctx.lineTo(L2.x, L2.y);
    ctx.stroke();
}