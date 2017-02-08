//JS code goes here
//JS code goes here
var turn =true;
var clicked=[];
var x="x"
var o="o"
var count=0;
var x_win=0;
var o_win=0;
function play(event){
	var element = event.target;
	if(!clicked [element.id]){

    clicked [element.id]=true;
	console.log(clicked);
	console.log(event);
	element.innerHTML =turn ? "X": "o";
	turn= !turn;
	}
	
}
