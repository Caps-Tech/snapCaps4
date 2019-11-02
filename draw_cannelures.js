var NBR_CANN = 20;

function draw_cannelures(ctx,coiffe,Z){
    //cannelure verticale
    const struct_cannelure = {
        r:8,
        cx:_ORI_X,
        cy: parseInt(CONST_Y + _DIST_CANN*Z),
        h_cannelure : _H_CANNELURE*Z,
        a_rad:0
    };



    var b_rad = coiffe.alphaDev / NBR_CANN;
    var dist_cann = coiffe.R1 + _DIST_CANN*Z;
    var b = struct_cannelure;

    ctx.beginPath();
    ctx.setLineDash([]);

    draw_cannelure(ctx,b);
    var x = struct_cannelure.cx;
    var y = struct_cannelure.cy;
    for(var i=1;i<=NBR_CANN;i++){
        b.a_rad = b_rad*i;
        var p = pos(dist_cann,b.a_rad,x,y);
        b.cx = p.x;
        b.cy = p.y;
        
        //console.log("i:"+i+" "+parseInt(b.cx)+" "+parseInt(b.cy));
        draw_cannelure(ctx,b);
    } 
    ctx.stroke();
    ctx.closePath();
}