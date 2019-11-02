function initDash() {
    CanvasRenderingContext2D.prototype.dashedLine = function (x1, y1, x2, y2, dashLen) {
        if (dashLen == undefined)
            dashLen = 2;
        this.moveTo(x1, y1);

        var dX = x2 - x1;
        var dY = y2 - y1;
        var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
        var dashX = dX / dashes;
        var dashY = dY / dashes;

        var q = 0;
        while (q++ < dashes) {
            x1 += dashX;
            y1 += dashY;
            this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
        }
        this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2);
    };

    CanvasRenderingContext2D.prototype.dashedArc = function (x0, y0, x1, y1, R, angle, dashLen) {
        if (dashLen == undefined)
            dashLen = 2;
        this.moveTo(x1, y1);
        var P2 = pos(R, angle, x1, y1);
        var dashes = Math.floor(R * angle / dashLen);
        var q = 0;
        while (q++ < dashes) {
            var P = pos(R, angle / dashes, x1, y1);
            x1 = P[0];
            y1 = P[1];
            if (q % 2 == 0)
                this.moveTo(x1, y1);
            else
                this.arc(x0, y0, R, 0.5 * Math.PI, 0.5 * Math.PI - angle / dashes, 1);
        }
        this[q % 2 == 0 ? 'moveTo' : 'lineTo'](P2[0], P2[1]);
    };
}