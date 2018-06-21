
//HTML + game var :
// var btnTable = document.createElement('table');
$("body").append('<table id="button"></table>');
var btnTable = $('#button');
// btnTable.id = "button";
// var btnTr = document.createElement('tr');
var btnTr = btnTable.append('<tr></tr>')
// btnTable.appendChild(btnTr);

// button gameButton
for (var j = 0; j < 7; j++) {
    // var btnTh = document.createElement('th');
    $("#button tr").append('<th id="case' + j + '">' + j + '</th>');
    // var btnTh = $("#case" + j)
    // btnTable.lastChild.appendChild(btnTh);
    // btnTh.addEventListener("click", addJeton)
    // btnTh.text(j);
    // $("#case" + j).text(j);
}
$("#button tr th").click(addJeton);
 // GameBoard
// var table = document.createElement('table');
$("body").append('<table id="P4"></table>');
var table = $('#P4');
var puissance4 = []; //

for (var i = 0; i < 6; i++) {

    // var tr = document.createElement('tr');
    // table.appendChild(tr);
table.append('<tr></tr>')
    puissance4.push([]);

    for (var j = 0; j < 7; j++) {
        // var th = document.createElement('th');
        // table.lastChild.appendChild(th);
        puissance4[i].push(0);
    }
}

for (var i = 0; i < 7; i++) {
    var th = $("#P4 tr").append('<th></th>')
    }
//Add two table to Dom
// document.getElementsByTagName('body')[0].appendChild(btnTable);
// document.getElementsByTagName('body')[0].appendChild(table);
console.log(puissance4);



// game function :
function positionJeton(column){
    if ( puissance4[0][column] != 0){
        console.log("full");
        return -1;
    }
    for (var i = 1; i < 6; i++) {
        console.log(column + '>>' + i);
        if ( puissance4[i][column] != 0){
             // console.log(i-1);
            return i-1;
        }
    }
    // console.log(5);
    return 5;
}

function victory(ligne, column, ColorJeton) {

    // diagonal \
    if (puissance4[ligne-1][column-1] == ColorJeton || puissance4[ligne+1][column+1] == ColorJeton  ) {
    }

    //diagonal /
    if (puissance4[ligne-1][column+1]== ColorJeton || puissance4[ligne+1][column-1] == ColorJeton ) {

    }

    // Ligne horizontal
    if (puissance4[ligne][column -1] == ColorJeton || puissance4[ligne][column+1] == ColorJeton  ) {

    }
    // ligne vertical
    if (puissance4[ligne-1][column] == ColorJeton || puissance4[ligne+1][column] == ColorJeton  ) {

    }
}

// main :


var Joueur  =  1;

function addJeton(){
    var ColorJeton;
    if (Joueur == 1){
        ColorJeton = "B";
    } else if (Joueur == 2) {
        ColorJeton = "R";
    }
    // console.log($(this));
    // var column = this.innerText;
    var column = parseInt($(this).text());
    // console.log(column);
    // var cases = document.getElementById('P4').getElementsByTagName('th');
    var cases = $("#P4 th");
    console.log(cases[column]);
    var ligne = positionJeton(column);
    if( ligne != -1){
        puissance4[ligne][column] = ColorJeton;
        console.log(column + ligne);
        var nbLigne = ligne*7 + column;
        console.log(nbLigne);
        $(cases[ nbLigne ]).text(ColorJeton);
        if (Joueur == 1){
//            cases[ nbLigne ].style.backgroundColor = 'blue';
            $(cases[ nbLigne ]).css("background-color", 'blue');
        } else if (Joueur == 2) {
            // cases[ nbLigne ].style.backgroundColor = 'red';
            $(cases[ nbLigne ]).css("background-color", 'red');
        }

    } else {
        alert("You stupid bitch ?");
    }
    console.log(puissance4);
    if (Joueur == 1){
        Joueur = 2;
    } else if (Joueur == 2) {
        Joueur = 1;
    }
}
