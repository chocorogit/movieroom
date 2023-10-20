const myArray = [10, 20, 30, 40, 50];
const targetValue = 30;

const index = myArray.indexOf(targetValue);
console.log(index);

if (index !== -1) {
    console.log(`값 ${targetValue}는 배열에서 인덱스 ${index}에 있습니다.`);
} else {
    console.log(`값 ${targetValue}는 배열에 존재하지 않습니다.`);
}
