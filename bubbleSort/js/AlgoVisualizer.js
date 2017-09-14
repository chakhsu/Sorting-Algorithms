class AlgoVisualizer {
    constructor(g2d, sceneWidth, sceneHeight, N) {

        // 动画的执行速度[毫秒]
        this.DELAY = 10;

        this.g2d = g2d;

        // 初始化数据
        this.data = new BubbleSortData(N, sceneHeight);

        // 动画整个存储
        this.data_list = new Array();

        // 初始化视图
        this.frame = new AlgoFrame(g2d, "Bubble Sort Visualization", sceneWidth, sceneHeight);
        this.run();
    }

    // 生成数据逻辑
    run() {
        this.setData(0, -1);

        for (var i = 0; i < this.data.N(); i++) {
            for (var j = 0; j < this.data.N() - i - 1; j++) {
                // 由小到大
                this.setData(this.data.N() - i - 1, j);
                if (this.data.get(j) > this.data.get(j+1)) {
                    this.data.swap(j, j+1);
                    this.setData(this.data.N() - i - 1, j);
                }
            }
            this.setData(this.data.N() - i - 1, j);
        }
        this.setData(this.data.N(), -1);
        // 渲染数据
        this.render();
    }

    setData(orderedIndex, currentCompareIndex) {
        var data = new BubbleSortData();
        data.orderedIndex = orderedIndex;
        data.currentCompareIndex = currentCompareIndex;
        data.numbers = this.data.numbers.slice();
        this.data_list[this.data_list.length] = data;
    }

    render() {
        var i = 0;
        setInterval(() => {
            if (i < this.data_list.length) {
                this.frame.render(this.data_list[i]);
                i++;
            }
        }, this.DELAY);
    }
}