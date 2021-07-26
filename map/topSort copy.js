function Vertex(key){
    this.key = key;
}
function Graph(num){
    this.vNum = num;
    this.edgeNum = 0;
    this.adj = [];//adjacent matrix
    this.visited = [];
    this.edgeTo = [];
}
Graph.prototype = {
    constructor: Graph,
    makeAdj: function(){
        for (var i = 0; i < this.vNum; i++){
            this.adj[i] = [];
        }
    },
    clearVisited: function(){
        for (var i = 0; i < this.vNum; i ++ ){
            this.visited[i] = false;
        }
    },
    //第一维的key为顶点的key，val为第二维数组
    //第二维的key为1，2，3，val为顶点的key
    addEdge: function(v,w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edgeNum ++;
    },
    display: function(){
        for (var i = 0; i < this.vNum; i++){
            console.log(i + "---");
            for (var j = 0; j < this.adj[i].length; j++){
                console.log(this.adj[i][j]);
            }
        }
    },
    //遍历
    //deep first search
    //一个顶点只会被访问一次
    dfs: function(v){
        this.visited[v] = true;
        console.log("Visit " + v);
        //for-in 返回adj第二维的key，即1，2，3，而非顶点的key
        for (var i in this.adj[v]){
            //顶点的key为其value
            var w = this.adj[v][i];
            if (!this.visited[w]){
                this.dfs(w);
            }
        }
    },
    bfs: function(s){
        var q = [];
        this.visited[s] = true;
        console.log("Visit "+s);
        q.push(s);
        while (q.length > 0){
            var v = q.shift();
            for (var i in this.adj[v]){
                var w = this.adj[v][i];
                if (!this.visited[w]){
                    this.edgeTo[w] = v;
                    this.visited[w] = true;
                    console.log("Visit " + w);
                    q.push(w);
                }
            }
        }
    },
    //查找最短路径
    //从s到v点
    pathTo: function(s,v){
        var source = s, //定义起点
            path = [];
        if (!this.hasPathTo(v)){
            return false;
        }
        //从v开始，通过edgeTo()来反向倒推，直到循环回到source为止
        for (var i = v; i != source; i = this.edgeTo[i]){
            path.unshift(i);
        }
        path.unshift(s);
        return path;
    },
    hasPathTo: function(v){//求是否可经遍历被访问
        return this.visited[v];
    },
    //拓扑排序
    topSort: function(){
        var r = [],
            visited = [];
        for (var i = 0; i < this.vNum; i++){
            visited[i] = false;
        }
        for (i = 0; i < this.vNum; i++){
            if (visited[i] === false){
                this.topSortHelper(i, visited, r);
            }
        }
        //print
        while(r.length > 0){
            var v = r.pop();
            console.log(v);
        }
    },
    //recursive part
    topSortHelper: function(v, visited, r){
        visited[v] = true;
        for (var j in this.adj[v]){
            var w = this.adj[v][j];
            if (!visited[w]){
                this.topSortHelper(w,visited,r);
            }
        }
        r.push(v);
    }
};
 
 
// var g = new Graph(5);
// g.makeAdj();
// g.clearVisited();
// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(1,3);
// g.addEdge(2,4);
// g.display();
 
// console.log("dfs");
// g.dfs(0);
// console.log("bfs");
// g.bfs(0);
 
// //使用最短路径搜索之前必须使用同一个source对图进行遍历！！！
// g.bfs(3);
// console.log(g.pathTo(3,2));
 
var h = new Graph(6);
h.makeAdj();
h.clearVisited();
h.addEdge(0,1);
h.addEdge(1,2);
h.addEdge(1,3);
h.addEdge(1,4);
h.addEdge(2,5);
console.log('start')
h.topSort();