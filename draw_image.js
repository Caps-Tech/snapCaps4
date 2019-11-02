function draw_image(ctx,coiffe,angle,hauteurLogo,img_path,w,h){
    //var P5 = pos(coiffe.R1 + coiffe.hauteurCoiffeGene - hauteurLogo, angle, CONST_X, CONST_Y + coiffe.hauteurCoiffeGene - hauteurLogo);
    var img = new Image();
    img.onload = function () {

        var imgW = w||img.width;
        var imgH = h||img.height;
        hauteurLogo +=imgH;
        //ctx.drawImage(img, P5.x - imgW/2, P5.y -imgH/2, 10*Z, 10*Z);
        //if((w===0)||(h===0)){
            var N2 = pos(coiffe.R1 + coiffe.hauteurCoiffeGene - hauteurLogo, angle, CONST_X -imgW/2, CONST_Y + coiffe.hauteurCoiffeGene - hauteurLogo );
            //ctx.textBaseline = 'middle';
            rotateImg(ctx, N2.x , N2.y ,imgW,imgH, -angle, img);
            //rotateImg(ctx, x, y, w,h,rotation, img)
            //ctx.drawImage(img, P5.x - imgW/2*Math.cos(0.5*coiffe.alphaDev), P5.y -2*imgH*Math.sin(0.5*coiffe.alphaDev));
        //}
        //else
        //    ctx.drawImage(img, P5.x - w/2*Math.cos(0.5*coiffe.alphaDev), P5.y -4*h*Math.sin(0.5*coiffe.alphaDev), w, h);
        
        //ctx.restore();
    }
    img.src = img_path;
}

// scales the image by (float) scale < 1
// returns a canvas containing the scaled image.
function downScaleImage(img, scale) {
    var imgCV = document.createElement('canvas');
    imgCV.width = img.width;
    imgCV.height = img.height;
    var imgCtx = imgCV.getContext('2d');
    imgCtx.drawImage(img, 0, 0);
    return downScaleCanvas(imgCV, scale);
}

function rotateImg(ctx, x, y, w,h,rotation, img) {
    var colorized_img = img;//new Image();
    //colorized_img.src = change_img_color(img,w,h,"#ff6623");
    
    ctx.save();
    ctx.translate(x+w/2, y+h/2);
    ctx.rotate(rotation);
    ctx.translate(-x - w/2, -y - h/2);
    ctx.drawImage(colorized_img, x,y, w, h);
    ctx.restore();

    //colorize
    /*var c = document.getElementById("myCanvas");
    ctx.fillStyle = "#09f";
    ctx.fillRect(x, y, w, h);
    // set composite mode
    ctx.globalCompositeOperation = "destination-in";*/
 }

 function change_img_color(img,w,h,color) {
    var canvas_tmp = document.createElement("canvas"); // shared instance
    var ctx_tmp = canvas_tmp.getContext("2d");
    ctx_tmp.drawImage(img, 0,0, w, h);
    // set image pixel size and hex color
    //color = '33CC33';
    var alpha=1;
    canvas_tmp.width = w;
    canvas_tmp.height = h;

    ctx_tmp.clearRect(0, 0, w,h);
    ctx_tmp.drawImage(img, 0, 0,w,h);
    desaturate(ctx_tmp,w,h);
    colorize(ctx_tmp,w,h,color, alpha);
    return canvas_tmp.toDataURL("image/png");//, 1);
}

    function desaturate(context,w,h) {
        var imageData = context.getImageData(0, 0, w, h),
            pixels = imageData.data,
            i, l, r, g, b, a, average;

        for (i = 0, l = pixels.length; i < l; i += 4) {
            a = pixels[i + 3];
            if (a === 0) {
                continue;
            } // skip if pixel is transparent

            r = pixels[i];
            g = pixels[i + 1];
            b = pixels[i + 2];

            average = (r + g + b) / 3 >>> 0; // quick floor
            pixels[i] = pixels[i + 1] = pixels[i + 2] = average;
        }

        context.putImageData(imageData, 0, 0);
    }

    function colorize(context,w,h,color, alpha) {
        context.globalCompositeOperation = "source-atop";
        context.globalAlpha = alpha;
        context.fillStyle = color;
        context.fillRect(0, 0, w,h);
        // reset
        context.globalCompositeOperation = "source-over";
        context.globalAlpha = 1.0;
    }