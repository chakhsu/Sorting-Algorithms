class AlgoFrame {

    constructor(g2d, title, canvasWidth, canvasHeight) {
        this.g2d = g2d;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    getCanvasWidth() {
        return this.canvasWidth;
    }

    getCanvasHeight() {
        return this.canvasHeight;
    }

    repaint() {
        // 具体绘制
        this.g2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight+20);

        var w = this.canvasWidth / this.data.N();

        for (var i = 0; i < this.data.N(); i++) {
            if (i < this.data.orderedIndex) {
                AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Red);
            } else {
                AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Grey);
            }
            if (i === this.data.currentCompareIndex) {
                AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.LightBlue);
            }
            if (i === this.data.currentMinIndex) {
                AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Indigo);
            }
            AlgoVisHelper.fillRectangle(this.g2d, i * w, this.canvasHeight - this.data.get(i) + 20, w - 1, this.data.get(i));
            AlgoVisHelper.setText(this.g2d, this.data.get(i), i * w, this.canvasHeight - this.data.get(i) + 15);
        }
    }

    render(data) {
        this.data = data;
        this.repaint();
    }
}