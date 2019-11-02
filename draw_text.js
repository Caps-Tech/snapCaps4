function drawText(ctx,x, y, text) {
    ctx.fillText(text, x, y);
};

function centreMarque(fontStyle, angle) {
//centrage de la marque
var hText = calculFontHeiht(fontStyle);
var centrageMarque = hText / 2;
var dxM1 = centrageMarque * Math.cos(angle);
var dyM1 = centrageMarque * Math.sin(angle);
 return [dxM1, dyM1];
}

function drawMarqueJupe(angle, ctx, text, font,font_size, fillStyle, alphaDev, hauteurMarque, R1, hauteurCoiffeGene) {
var fontStyle = font_size + "  "+ font;
var dM = centreMarque(fontStyle, angle);



drawMarqueJupeDetail(angle, ctx, text, font,font_size,fillStyle, alphaDev, hauteurMarque, R1, hauteurCoiffeGene, dM[0], dM[1]);
}

function drawMarqueJupeDetail(angle, ctx, text, font,font_size, fillStyle, alphaDev, hauteurMarque, R1, hauteurCoiffeGene, dxM1, dyM1) {
    //calcul text width
    //ctx.font = font;
    //load_google_font(font);
    console.log("   asking to load "+font);

    WebFont.load({
        google: {
            families: ['Open Sans', 'Open Sans:bold','EB Garamond','Roboto','Pacifico','Playfair Display','Crimson Text']
        },
        active: function(arg) {
            ctx.font = font_size + " "+ font;;//font;
            ctx.fontStyle = font_size + " "+ font;
            ctx.fillStyle = fillStyle;
            var wText = ctx.measureText(text).width;
            var N2 = pos(R1 + hauteurCoiffeGene - hauteurMarque, angle, CONST_X, CONST_Y + hauteurCoiffeGene - hauteurMarque);
            ctx.textBaseline = 'middle';
            rotateText(ctx, N2.x , N2.y , -Math.PI / 2 - angle, text);
            if(g_export){
                var export_svg = ctx.getSerializedSvg(true);
                download_svg_file(export_svg);
            }
            console.log("font loaded " +font);
        }
    });
/*
    ctx.fontStyle = font_size + " "+ font;
    ctx.fillStyle = fillStyle;
    var wText = ctx.measureText(text).width;
    var N2 = pos(R1 + hauteurCoiffeGene - hauteurMarque, angle, CONST_X, CONST_Y + hauteurCoiffeGene - hauteurMarque);
    ctx.textBaseline = 'middle';
    rotateText(ctx, N2.x , N2.y , -Math.PI / 2 - angle, text);*/
}

function calculFontHeiht(fontStyle) {
    var result;
    var fontDraw = document.createElement("canvas");
    var ctx = fontDraw.getContext('2d');
    ctx.fillRect(0, 0, fontDraw.width, fontDraw.height);
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'white';
    ctx.font = fontStyle;
    ctx.fillText('gM', 0, 0);
    var pixels = ctx.getImageData(0, 0, fontDraw.width, fontDraw.height).data;
    var start = -1;
    var end = -1;
    for (var row = 0; row < fontDraw.height; row++)
    {
        for (var column = 0; column < fontDraw.width; column++)
        {
            var index = (row * fontDraw.width + column) * 4;
            if (pixels[index] === 0) {
            if (column === fontDraw.width - 1 && start !== -1) {
                end = row;
                row = fontDraw.height;
                break;
            }
            continue;
            }
            else
            {
                if (start === -1)
                {
                start = row;
                }
                break;
            }
        }
    }
    result = end - start;
    return result;
}

function rotateText(ctx, x, y, angle, text) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.translate(-x, -y);
    drawText(ctx,x, y, text);
    ctx.restore();
 }