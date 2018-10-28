/*Stwórz konstruktor Enemy
------------------------
    Konsuktor powinien mieć właściwości:
    Właściwości te powinny być indywidualne dla każdej instancji i podawane przy tworzeniu nowych obiektów
- live - liczba życia
- attack - siła ataku
Dodatkowo powinien mieć właściwości nie podawane przy tworzeniu:
    - posX - na początku ustawione na 0
- posY - na początku ustawione na 0
Stwórz wspólne dla wszystkich instancji metody:
    ----------------------
        move(x, y)
    - która ustawi posX i posY do pozycji x, y po czym wypisze w konsoli napis
"Jestem na pozycji posX i posY"
attack()
- która wypisze w konsoli tekst "Atakuję gracza z siłą X" gdzie x to siła ataku
destroy()
- która wypisze w konsoli "Zostałem zniszczony :("
Stwórz 3 instancje Enemy o parametrach:
    ----------------------------------------
        1 instancja ===> 3 życia, 3 ataku
Wywołaj dla niej metodę move i przesuń element do pozycji 200x300
2) 2 życia, 2 ataku
Wywołaj dla niej metodę move i przesuń element do pozycji 100x200
Wywołaj dla niej metodę attack()
3) 4 życia, 1 ataku
Wywołaj dla niej metodę move i przesuń element do pozycji 300x400
Wywołaj dla niej metodę attack()
Wywołaj dla niej metodę destroy();
*/
function Enemy(life, attack) {
    this.posX = 0;
    this.posY = 0;
    this.life = life;
    this.attack = attack;
}
Enemy.prototype.move = function(x,y) {
    this.posX = x;
    this.posY = y;
    console.log(`Jestem na pozycji ${this.posX} i ${this.posY}`);
}
Enemy.prototype.attackPlayer = function () {
    console.log(`Atakuje gracza siłą ${this.attack}`)
}
Enemy.prototype.destroy = function() {
    console.log("Zostałem zabity");
}

var enemy = new Enemy(3,3);
enemy.move(200,300);
enemy.attackPlayer()

