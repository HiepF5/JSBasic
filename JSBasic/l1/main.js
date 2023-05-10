// // // alert('Hi Javascript basic');
// // // var fullName = 'Nguyen Cong Hiep';
// // // var age = 26;
// // // alert(fullName);
// // // alert(age);
// // // /*
// // // 1. Alert
// // // 2. Console
// // // 3. Confirm
// // // 4. Prompt
// // // 5. Set timeout chay code sao thoi gian
// // // 6. Set interval chay sau 1 thoi gian lap di lap lai
// // // */
// // // console.log('Day laf log')
// // // confirm('Xac nhan du tuoi');
// // // setTimeout(() => {
// // //     alert('thong bao')
// // // }, 100);
// // var a = 1+ 2;
// // console.log(a);
// // var fullName ='Hiep Nguyen \'hiep\'';// backslash

// // console.log(fullName);

// // console.log(fullName.length);
// // var firstName= 'Hiep';
// // var lastName="Nguyen";
// // console.log(`Toi la ${firstName} ${lastName}`)
// // // Javascript string methods
// // // 1 length
// // console.log(fullName.length);
// // console.log(fullName.indexOf('e', 5));
// // //2 Find
// // console.log(fullName.search(0));
// // //cut
// // //console/log(fullName.slice(-3,-1));
// // //trim
// // //split
// // var l='ja pjp ruby';
// // console.log(l.split(', '));
// // // character index
// // console.log(firstName.charAt(2));
// // var age = 18
// // var pi=3.14
// // var oNumber = new Number(9); // tranh su dung
// // console.log(age.toString());
// // console.log(pi.toFixed(2));
// // // Sử dụng mảng khi nao :
// // var languages = [
// //     'javascrip',
// //     'php',
// //     'ruby',
// // ];
// // var languages2 = [
// //     'javascripsss',
// //     'phssp',
// //     'rubssy',
// // ];
// // console.log(Array.isArray(languages));
// // // Join array
// // //
// /*
// pop xóa cuối
// push thêm cuối
// shift Xóa đầu
// unshift thêm đầu
// splicing 
// concat nối array 
// slicing  cắt
//  */
// // languages.splice(1,2, 'Dart');
// // console.log(languages);
// // console.log(languages.concat(languages2))
// // function writeLog(message){
// //     console.log(message)
// // }
// // writeLog(123);
// // function writeLogg(){
// //     var myS='';
// //     for(var param of arguments){
// //         myS += `${param} - `
// //     }
// //     console.log(myS);
// // }
// // writeLogg('dad','asdas','asdas');
// // var isConfirm =  confirm('message');
// // // console.log(isConfirm);
// // function cong(a,b){
// //     return [a,b];

// // }
// // var res = cong(2,3);
// // console.log(res);
// // function showMessage(){

// // }
// // var showMessage2 = function(){

// // }
// // setTimeout(function()){

// // });
// //hoisting
// //Polyfill
// //object
// // var myInfo = {
// //     name: 'Hiep Nguyen',
// //     age : 15,
// //     address: 'Haf noi , Vn'
// // }
// // myInfo.email = 'Heiehi@,dos';
// // delete myInfo.age;
// // var myKey ='address';
// // console.log(myInfo);
// // // console.log(myInfo[myKey]);
// // function User(firstName, lastName, avatar) {
// //     this.firstName=firstName;
// //     this.lastName=lastName;
// //     this.avatar=avatar;
// // }
// // User.prototype.className= 'F8';//prototype : theme sau khi ham tao
// // var author = new User('Son', 'Dang', 'Avatar');
// // var user = new User('Son', 'Dang', 'Avatar');
// // author.title ='hiei';
// // user.comment='hiehie';
// // console.log(author);
// // console.log(user);
// // var date =new Date();
// // var year = date.getFullYear();
// // var month = date.getMonth() +1 ;
// // var day = date.getDate();
// // console.log(`${day} ${month} ${year}` );
// var myInfo = {
//   name: "Hiepj",
//   age: 18,
// };
// for (var value of Object.values(myInfo)) {
//   console.log(value);
// }
// var courses = [
//   {
//     id: 1,
//     name: "Java",
//     coin: 4,
//   },
//   {
//     id: 2,
//     name: "CSS",
//     coin: 4,
//   },
//   {
//     id: 3,
//     name: "PHP",
//     coin: 4,
//   },
//   {
//     id: 4,
//     name: "C++",
//     coin: 2,
//   },
//   {
//     id: 5,
//     name: "Ruby",
//     coin: 4,
//   },
// ];
// // courses.forEach(function (courses, index) {
// //   console.log(index, courses);
// // });
// // var isFree = courses.every(function (courses, index) {
// //   return courses.coin === 0;
// // });
// // console.log(isFree); //kien tra khoa hoc = 0 ( voi moij khoa hoc free = true)
// // var issFree = courses.some(function (courses, index) {
// //   return courses.coin === 0;
// // });
// // console.log(issFree); //Kiem tra co 1 khoa hoc = 0 thif true
// // //find tra ve 1 phan tu dau tien
// // //fillter tra ve tat ca phan tu
// var newCoures = courses.map(function (course, index, originArray) {
//   //console.log(course);
//   return {
//     if: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     coinText: `Gia: ${course.coin}`,
//     index: index,
//     originArray: originArray,
//   };
// });
// console.log(newCoures);
// //reduce() 
// function coinHandler(accumulator,currentValue,currentIndex,originArray)
// // var totalCoin = courses.reduce(coinHandler, 0);
// var course = ['JV','PHP','D'];
// console.log(course.includes('JV', -3));
// //includes tìm phần từ có trong 1 mảng hay không
// //Math object
// //callback
// function myFunction(param){
//     console.log()
// }
// var heading = document.getElementById()
// getElementId /// element
// getElementsByClassName
// getElementsByTagName
// querySelector /// element
// querySelectorAll
// var headingElement =  document.querySelector('h1');
// console.log(headingElement);
// headingElement.title='he';
// headingElement.setAttribute('class', 'eh');
// headingElement.getAttribute('class');
// var headingElement =  document.querySelector('.heading');
// console.log(headingElement.innerText);
// console.log(headingElement.textContent);
// headingElement.innerText= ' New he';
// console.log(headingElement.textContent);



// var boxElement = document.querySelector('.heading');
// console.log(boxElement.style);
// // innerHTML and outerHTML
// // Dom Style
// boxElement.style.width= '100px';
// boxElement.style.height= '100px';
// boxElement.style.backgroundColor= 'red';

// Object.assign(boxElement.style, {
//     width:'200px',
//     backgroundColor: 'green',
// });
// ClassList Property
// add
// contains ( kiem tra ton tai)
// remove ( xoa )
// tonggle ( dong mo)
// console.log(boxElement.classList.length);
// boxElement.classList.toggle('red')
// setInterval(()=>{
//     boxElement.classList.toggle('red')
// }, 1000)
//DOM event
// Attribute events
// assign
// var h1Element =document.querySelectorAll('.heading');
// console.log(h1Element);
// for( var i= 0; i<h1Element.length ; i++)
// {
//     h1Element[i].onclick = function(e){
//         console.log(e.target)
// }

// }
var textElement = document.querySelector('input[type="text"]');
textElement.onchange = function(e)
{
    console.log(e.target.value);
}
console.log(textElement);
//preventDefault loai bo mac dinh
//stop Propagation xoa noi boi
// dom event lang nghe 


