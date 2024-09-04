//Необходимо создать функцию с названием arrayProcessor, которая будет принимать два параметра, первый параметр - массив, 
//второй параметр - функция callback

//Требования:

//1.Функция arrayProcessor должна выполнять 3 действия:
//первое действие - преобразовать каждый элемент, в переданном массиве, в строку, результат должен сохраняться в новом массиве
//(то есть не мутировать входной массив)
//вызывать функцию, которая была передана в параметрах (функция callback будет принимать в качестве параметра преобразованный 
//на первом шаге массив)
//возвращать то, что вернула функция callback после её вызова
//2.Чтобы показать пример использования функции arrayProcessor вам нужно:
//создать ещё две функции (требования к функциям см. в пункте 3)
//вызвать arrayProcessor с каждой из функций по очереди
//каждый из 2-х результатов вывести в консоль
//3.Требования к функциям callback
//первая функция должна преобразовывать каждый элемент массива в верхний регистр и возвращать новый массив с преобразованными 
//элементами
//вторая функция должна возвращать сумму длин всех строк*/

function arrayProcessor(array, operation){
    let stringArray = []; 
        for(let element of array) {
            stringArray.push(String(element));
        }
    return operation(stringArray);
    }

    function toUpperCaseArray(array){
        let upperCaseArray = [];
        for(let element of array){
            upperCaseArray.push(element.toUpperCase());
        }
        return upperCaseArray;
    }
    
    function stringLength(array){
        let lengthTotal = 0;
        for(let element of array){
            lengthTotal+= element.length;
    }
    return lengthTotal;
    }
    
    let originalArray = ['apple', 27, 'banana', 'kiwi'];
    let upperCaseResult = arrayProcessor(originalArray, toUpperCaseArray);
    console.log(upperCaseResult);
    let lengthTotalResult = arrayProcessor(originalArray, stringLength);
    console.log(lengthTotalResult);
    