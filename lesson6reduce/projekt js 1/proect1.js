var boxer = new Object();

boxer.weight = 70;//kg
boxer.height = 180;//cm
boxer.name = "Ivan";
boxer.family = 'abramenco';
boxer.razryad = 2;

boxer.sayWeight = function (n) {
    alert(n + 'kg');

}
boxer.sayWeight(boxer.weight);