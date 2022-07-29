// let const
//     유효범위 : 블록 단위 scope
//     재할당 : let 가능 / const 불가능

//     for(let j=0;j<5;j++){
//         console.log("안쪽"+j)

// }
// console.log("바깥쪽 유효하지 않음"+j)

// var
//     유효범위 : 함수 단위 scope
//     재할당 : var 가능

//     for(var i=0;i<5;i++){
//             console.log("안쪽"+i)

//     }
//     console.log("바깥쪽 유효함"+i)

// 1. github 가입
// 2. repository 만들기
// 3. gitgub desktop 설치, 로그인
// 4. 2.에서 만든 repository Clone
// 5. vscode 에서 clone 한 repository 열기

// 함수선언식
function add(a, b) {}

// 함수표현식
const minus = function (a, b) {
  return a - b;
};
// 동일함
const minus2 = (a, b) => {
  return a - b;
};
// 동일함
const minus3 = (a, b) => a - b; //한줄인 경우

// 비구조화 할당 (코드를 줄여준다)
const person1 = {
  name1: "Jason",
  age: 20,
  major: "Computer",
};

// const name1 = person1.name;
// const age = person1.age;
// const major = person1.major;

// const {name1} = person1;
// const {age} = person1;
// const {major} = person1

const { name1, age, major } = person1;

// console.log("이름은" + person1.name1 + "입니다.")
// console.log("나이는" + person1.age + "입니다.")
// console.log("전공은" + person1.major + "입니다.")

console.log("이름은" + name1 + "입니다.");
console.log("나이는" + age + "입니다.");
console.log("전공은" + major + "입니다.");

const arr1 = [1, 2, 3, 4];
// const first = arr1[0];
// const second = arr1[1];
const [first, second] = arr;

// 환경설정
// Node.js -> terminal 에서 node --version 확인
// vscode
// github
// eslint : vscode 에서 js 문법 검사
// prettier : vscode 에서 코드 formatter
