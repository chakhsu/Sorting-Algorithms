class AlgoVisualizer {
    constructor(g2d, sceneWidth, sceneHeight, N) {

        // 动画的执行速度[毫秒]
        this.DELAY = 10;

        this.g2d = g2d;

        // 初始化数据
        this.data = new InsertionSortData(N, sceneHeight);

        // 动画整个存储
        this.data_list = new Array();

        // 初始化视图
        this.frame = new AlgoFrame(g2d, "Insertion Sort Visualization", sceneWidth, sceneHeight);
        this.run();
    }

    // 生成数据逻辑
    run() {
        this.setData(0, -1, -1);

        for (var i = 1; i < this.data.N(); i++) {
            this.setData(i, -1);
            var j = i;
            var temp = this.data.get(i);
            while (j>0 && this.data.get(j-1) > temp){
                this.setData(i, j-1);
                this.data.swap(j, j-1);
                j--;
                this.setData(i, j-1);
            }
            this.setData(i, j);
        }
        this.setData(this.data.N(), -1);
        // 渲染数据
        this.render();
    }

    setData(orderedIndex, currentCompareIndex) {
        var data = new InsertionSortData();
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