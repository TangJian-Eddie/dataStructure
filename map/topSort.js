function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
  }
  this.addEdge = addEdge;
  this.topSort = topSort;
  this.topSortHelper = topSortHelper;
}
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function topSort() {
  console.log("start", this.adj);
  var stack = [];
  var visted = [];
  for (var i = 0; i < this.vertices; i++) {
    visted[i] = false;
  }
  for (var i = 0; i < this.vertices; i++) {
    if (visted[i] == false) {
      this.topSortHelper(i, visted, stack);
    }
  }
  while (stack.length > 0) {
    console.log(stack.pop());
  }
}
function topSortHelper(v, visited, stack) {
  visited[v] = true;
  for (let w of this.adj[v]) {
    if (!visited[w]) {
      this.topSortHelper(w, visited, stack);
    }
  }
  stack.push(v);
}
g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.topSort();
