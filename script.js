var numbers = [];
var aux = 0;

function store() {

    if(numbers.length == 0){
        numbers.push(document.getElementById('input01').value);
        numbers.push(document.getElementById('input02').value);
        numbers.push(document.getElementById('input03').value);
        numbers.push(document.getElementById('input04').value);
    }else{
        numbers = [];
        numbers.push(document.getElementById('input01').value);
        numbers.push(document.getElementById('input02').value);
        numbers.push(document.getElementById('input03').value);
        numbers.push(document.getElementById('input04').value);
    }
    document.getElementById('btn-press').innerHTML = "Valores Armazenados";
    document.getElementById('result').innerHTML = numbers;
    document.getElementById('box-result').style.display = "flex";
}

function reverse() {

    aux = numbers[3];
    numbers[3] = numbers[0];
    numbers[0] = aux;
    aux = numbers[2];
    numbers[2] = numbers[1];
    numbers[1] = aux;

    document.getElementById('btn-press').innerHTML = "Valores Invertidos";
    document.getElementById('result').innerHTML = numbers;
    document.getElementById('box-result').style.display = "flex";

}

function order() {


    if(numbers[0] > numbers[1]){
        aux = numbers[0];
        numbers[0] = numbers[1];
        numbers[1] = aux;
        order();
    }else{
        if(numbers[1] > numbers[2]){
            aux = numbers[1];
            numbers[1] = numbers[2];
            numbers[2] = aux;
            order();
        }else{
            if(numbers[2] > numbers[3]){
                aux = numbers[2];
                numbers[2] = numbers[3];
                numbers[3] = aux;
                order();
            }else{
            }
        }
    }

    document.getElementById('btn-press').innerHTML = "Valores Ordenados";
    document.getElementById('result').innerHTML = numbers;
    document.getElementById('box-result').style.display = "flex";
}