var inputString = "abccabcabc";
var outputString = findString(inputString);
document.write(`Input: ${inputString} <br/> Output: ${outputString}`);

function findString(string) {
    if (string.length == 0) return "";
    let _length2 = parseInt(string.length / 2);

    let outputString = string.substr(0, 1);
    let maxOccurrences = numberOfOccurrences(string, outputString);

    //j: position, i: length of childString
    for (let i = 1; i <= _length2; i++) {
        for (let j = 0; j < string.length; j++) {
            if (j == 0 && i == 1) continue;
            childString = string.substr(j, i);
            childOccurrences = numberOfOccurrences(string, childString);

            if (maxOccurrences > childOccurrences) continue; 
            else {
                if (maxOccurrences < childOccurrences) {
                    maxOccurrences = childOccurrences;
                    outputString = childString;
                }
                else if (maxOccurrences == childOccurrences && outputString.length < childString.length) {
                    outputString = childString;
                }  
            }
        }
    }

    if (maxOccurrences == 1) return ""; //ko lặp

    return outputString;
}

// var stringA = "abcdabcaadeas", stringB = "a"
// x = stringA.split(stringB);
// alert(x + " - typeof x[0]: " + typeof x[0])

// var stringA = "abcdabcaadeas", stringB = "a"
// x = stringA.split(stringB).length - 1;
// alert(x)

//số lần xuất hiện
function numberOfOccurrences(string, child) {
    return string.split(child).length - 1;
}


//chưa gộp code

// function findString(string) {
//     if (string.length == 0) return "";
//     let _length2 = parseInt(string.length / 2);
//     let arrayFilterSL = new Array();

//     for (let i = 1; i <= _length2; i++) {
//         for (let j = 0; j < string.length; j++) {
//             childString = string.substr(j, i);
//             lengthChild = numberOfOccurrences(string, childString);
//             //đưa chuỗi đã tách + độ dài tương ứng vào mảng (gồm chuỗi + độ dài)
//             arrayFilterSL.push({
//                 _string: childString,
//                 _length: lengthChild
//             })
//         }
//     }

//     //tìm độ dài lớn nhất
//     let maxLength = arrayFilterSL[0]._length;
//     for (let k = 1; k < arrayFilterSL.length; k++) {
//         if (maxLength < arrayFilterSL[k]._length) {
//             maxLength = arrayFilterSL[k]._length;
//         }
//     }
//     if (maxLength == 1) return "";

//     //lọc mảng tìm các chuỗi có độ dài = maxLength, cho vào mảng mới (chỉ gồm các chuỗi)
//     let newString = new Array();
//     for (let m = 0; m < arrayFilterSL.length; m++) {
//         if (maxLength == arrayFilterSL[m]._length) {
//             newString.push(arrayFilterSL[m]._string);
//         }
//     }

//     //so sánh xem chuỗi nào dài nhất
//     let finalStringLength = newString[0].length;
//     let finalString = newString[0];
//     for (let n = 1; n < newString.length; n++) {
//         if (finalStringLength < newString[n].length) {
//             finalStringLength = newString[n].length;
//             finalString = newString[n];
//         }
//     }

//     return finalString;
// }
