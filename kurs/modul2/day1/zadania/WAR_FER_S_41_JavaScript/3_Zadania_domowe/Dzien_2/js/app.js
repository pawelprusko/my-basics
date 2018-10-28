function Tree () {
    this.type;
}
var sosna = new Tree();
var buk = new Tree();
var osika = new Tree();
Tree.prototype.bloom = function(){
    console.log("I am blooming");
}
osika.bloom();