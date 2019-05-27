function setup() {
  createCanvas(200, 200);
  
dropzone = select('#dropzone');
dropzone.dragOver(highlight);
dropzone.dragLeave(unhighlight);
dropzone.drop(gotFile, unhighlight);

function highlight() {
  dropzone.style('background-color', 'pink');
}

function unhighlight(){
  dropzone.style('background-color', '#fff');
}

function gotFile(file){
createP('File ' + file.name + "Loaded").class('fileInfo');
createP('File Type: ' + file.type).class('fileInfo');
createP('File Size: ' + file.size).class('fileInfo');
var txt = file.data;
editText(txt);

let canvas = createCanvas(600, 400);
canvas.class('canves');
}


}

function editText(txt){

let txtToArray = txt.split(/\n/); //Parse the string file to an array. Each new line is a new array element

for (let i = 0; i< txtToArray.length; i++){
 let toTrim =  txtToArray[i];
 txtToArray[i] = toTrim.trim();
 //console.log(txtToArray[i]);
//console.log(txtToArray[i].match(/[\n\r]/g));


if (txtToArray[i-1] == '' && txtToArray[i] == '') txtToArray.splice(i ,1);


createP(txtToArray[i]).class('text');
}

}
