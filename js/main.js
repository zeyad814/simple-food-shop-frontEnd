const Search = document.getElementById("Search");
const cartonasearch = document.getElementById("cartonasearch");
const contactUs = document.getElementById("contactUs");
// const contacthiddin = document.getElementById("contacthiddin");
const rowSearch = document.getElementById("rowSearch");

let isOpen = false;

//  الفانكشم الاصلية
$(document).ready(function () {
  let isOpen = false;

  $("#iconNave").click(function () {
    $("#togglenav").toggleClass("hidden");
    isOpen = !isOpen;
    if (isOpen) {
      $("#iconNave i").removeClass("fas fa-bars").addClass("fas fa-times");
      // $(".ullinks li").animate({ top: 300 }, 1000);
    } else {
      // $(".ullinks li").eq(0).animate({ top: 0 }, 500);
      // $(".ullinks li").eq(1).animate({ top: 0 }, 600);
      // $(".ullinks li").eq(2).animate({ top: 0 }, 700);
      // $(".ullinks li").eq(3).animate({ top: 0 }, 800);
      // $(".ullinks li").eq(4).animate({ top: 0 }, 900);
      $("#iconNave i").removeClass("fas fa-times").addClass("fas fa-bars");
    }
  });
});
async function getApiSearch(searchValue) {
  const responseSearch = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  );
  const finalResponseSearch = await responseSearch.json();
  // console.log(finalResponseSearch);
  displaySearch(finalResponseSearch.meals);
}

function displaySearch(arraySarch) {
  let cartona = "";
  for (let i = 0; i < arraySarch.length; i++) {
    cartona += `   <div class=" md:w-1/4 item " >
     <img class=" w-80 px-4 md:py-5 rounded-3xl" src="${arraySarch[i].strMealThumb}" alt="" />
           <div class="layer">
           <h1 class="flex justify-center items-center h-80 text-black font-bold text-3xl ">${arraySarch[i].strMeal}</h1>
</div>    
        </div>`;
  }
  cartonasearch.innerHTML = cartona;
}
getApiSearch("");
//   =====> CATEGORY
let arrcategory = [];
let arrcategorytwo = []; // Define the array to store categories

async function getApiCategory() {
  const responseCategory = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const finalResponseCategory = await responseCategory.json();
  arrcategory = finalResponseCategory.categories;
}

functuion newUrgentFeature()
{
  return "pull";
}
function displayCategoroy() {
  let cartonaCategroy = "";
  for (let i = 0; i < arrcategory.length; i++) {
    cartonaCategroy += `
      <div class="flex">
        <div class="item">
          <a href="#" onclick="displaycategeytwo('${
            arrcategory[i].strCategory
          }')">
            <img class="" src="${arrcategory[i].strCategoryThumb}" alt="" />
          </a>
            <a href="#">
                  <div class="layer text-black p-2">
                    <h2 class="font-bold text-2xl">
                      ${arrcategory[i].strCategory}
                    </h2>
                    <p class="">${arrcategory[i].strCategoryDescription.slice(
                      0,
                      200
                    )}</p>
                  </div></a
                >
        </div>
      </div>`;
  }
  document.getElementById("cartonasearch").innerHTML = cartonaCategroy;
}

getApiCategory();
// .......................................
async function getcategorygowacategory() {
  const responsecategeytwo = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
  );
  const finalresponsecategeytwo = await responsecategeytwo.json();
  return finalresponsecategeytwo.meals;
}

async function displaycategeytwo(category) {
  const responsecategeytwo = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const finalresponsecategeytwo = await responsecategeytwo.json();
  const arrcategorytwo = finalresponsecategeytwo.meals;

  let cartonaCategroytwo = "";
  for (let i = 0; i < arrcategorytwo.length; i++) {
    cartonaCategroytwo += `
     <div class="flex md:w-1/4">
        <div class="item">
          <img class="w-full md:w-72 rounded-3xl m-2" src="${arrcategorytwo[i].strMealThumb}" alt="" />
       <div onclick="displayCategorythree()" class="layer text-black p-2">
            <h2 class="font-bold text-2xl flex justify-center items-center h-80">${arrcategorytwo[i].strMeal}</h2>
          </div>
        </div>
      </div>`;
  }
  document.getElementById("cartonasearch").innerHTML = cartonaCategroytwo;
}
// async function getApiCategorythree() {
//   const Categorythree = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
//   );
//   const finalCategorythree = await Categorythree.json();
//   console.log(finalCategorythree);
// }

// function displayCategorythree() {
//   document.getElementById(
//     "cartonasearch"
//   ).innerHTML = `<div class="container mx-auto ">
//       <div class="grid grid-cols-4 space-x-6">
//         <div class="col-span-1">
//           <img class="rounded-xl" src="./wurrux1468416624.jpg" alt="" />
//           <h3 class="text-white text-center font-bold text-2xl py-4">
//             Cream Cheese Tart
//           </h3>
//         </div>
//         <div class="col-span-3 text-white">
//           <h3 class="font-bold text-xl">Instructions</h3>
//           <p class="">
//            ${strInstructions}
//           </p>
//           <div class="flex">
//             <ul class="font-bold text-xl">
//               <li>Area :</li>
//               <li>Category :</li>
//               <li>Recipes :</li>
//             </ul>
//             <ul class="text-xl">
//               <li>unknown</li>
//               <li>Starter</li>
//               <li>
//                 <ul class="flex space-x-3">
//                   <li class="bg-slate-500 text-slate-950 p-2 rounded-md">
//                     6 Chicken Thighs
//                   </li>
//                   <li class="bg-slate-500 text-slate-950 p-2 rounded-md">
//                     6 Chicken Thighs
//                   </li>
//                   <li class="bg-slate-500 text-slate-950 p-2 rounded-md">
//                     6 Chicken Thighs
//                   </li>
//                   <li class="bg-slate-500 text-slate-950 p-2 rounded-md">
//                     6 Chicken Thighs
//                   </li>
//                   <li class="bg-slate-500 text-slate-950 p-2 rounded-md">
//                     6 Chicken Thighs
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3>Tags :</h3>
//             <div class="flex space-x-2 my-3">
//               <button class="bg-green-700 rounded-md p-2">source</button>
//               <button class="bg-red-700 rounded-md p-2">youtube</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>`;
// }

// // ......................................................
//      AREA     ==>
async function getApiArea(area) {
  const responseArea = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=${area}`
  );
  const finalresponseArea = await responseArea.json();
  displayArea(finalresponseArea.meals); // عرض البيانات بعد جلبها
}

function displayArea(meals) {
  let cartonaArea = "";
  for (let i = 0; i < meals.length; i++) {
    cartonaArea += `   
   
        <div class="col-span-full text-center text-white">
          <div>
            <i class="fas fa-laptop"></i>
            <h3>${meals[i].strArea}</h3>
          </div>
        </div>
     
     `;
  }
  document.getElementById("cartonasearch").innerHTML = cartonaArea;
}
//   ====> search
function displaysearc() {
  document.getElementById(
    "search"
  ).innerHTML = ` <div class="flex justify-center space-x-5  items-center h-44" >
            <input
            onkeyup="searchbyname(this.value)" 
              type="text"
              placeholder="Search By Name "
              class="w-72 bg-black border-2"
            />
            <input
                        onkeyup="searchbyletter()" 

              type="text"
              placeholder="Search By First Letter "
              class="w-72 bg-black border-2"
            />
          </div>`;
  cartonasearch.innerHTML = "";
}
async function searchbyname(term) {
  const responsesearchnme = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
  const finalresponsesearchnme = await responsesearchnme.json();
  console.log(finalresponsesearchnme);
  displayCategoroy(term);
}
//   ==> contact us
function displayContactUS() {
  let cartonacontact = "";
  cartonacontact += ` <div
          class="container mx-auto flex flex-col md:flex-row items-center justify-center h-screen md:space-x-10"
        >
          <div>
            <input
              id="Name"
              oninput=" validateProduct(this)"
              class="my-2 md:my-4 rounded-md w-80"
              type="text"
              placeholder="Enter Your Name "
            />
            <div
              id="doneMessage"
              class="text-green-600 hidden border-2 border-green-600 px-1 py-8 text-center"
            >
              done
            </div>
            <div
              id="errorMessage"
              class="text-red-600 hidden bg-transparent border-2 border-red-600 px-1 py-8"
            >
              Special characters and numbers not allowed
            </div>

            <br />
            <input
              oninput="validateProductNum(this) "
              id="Number"
              class="my-2 md:my-4 rounded-md w-80"
              type="text"
              placeholder="Enter Your Phone"
            />
            <div
              id="doneMessagenumber"
              class="text-green-600 hidden border-2 border-green-600 px-1 py-8 text-center"
            >
              done
            </div>
            <div
              id="errorMessagenumber"
              class="text-red-600 hidden bg-transparent border-2 border-red-600 px-1 py-8"
            >
              Enter valid Phone Number
            </div>
            <br />
            <input
              oninput="validateProductPassword(this)"
              id="Password"
              class="my-2 md:my-4 rounded-md w-80"
              type="password"
              placeholder="Enter Your Password"
            />
            <div
              id="donePassword"
              class="text-green-600 hidden border-2 border-green-600 px-1 py-8 text-center"
            >
              done
            </div>
            <div
              id="errorPassword"
              class="text-red-600 hidden bg-transparent border-2 border-red-600 px-1 py-8 w-80 text-center"
            >
              Enter valid password *Minimum eight characters, at least one
              letter and one number:*
            </div>
          </div>
          <div>
            <input
              oninput="validateEmail(this)"
              id="email"
              class="my-2 md:my-4 rounded-md w-80"
              type="email"
              placeholder="Enter Your Email"
            />
            <div
              id="doneEmail"
              class="text-green-600 hidden border-2 border-green-600 px-1 py-8 text-center"
            >
              done
            </div>
            <div
              id="errorEmail"
              class="text-red-600 hidden bg-transparent border-2 border-red-600 px-1 py-8 w-80 text-center"
            >
              Email not valid
            </div>
            <br />
            <input
              class="my-2 md:my-4 rounded-md w-80"
              type="number"
              oninput="validateAge(this)"
              id="age"
              placeholder="Enter Your Age "
            />
            <div
              id="doneage"
              class="text-green-600 hidden border-2 border-green-600 px-1 py-8 text-center"
            >
              done
            </div>
            <div
              id="errorage"
              class="text-red-600 hidden bg-transparent border-2 border-red-600 px-1 py-8 w-80 text-center"
            >
              Enter valid age
            </div>
            <br />
            <input
              oninput="validateRePassword(this) "
              id="age"
              class="my-2 md:my-4 rounded-md w-80"
              type="password"
              placeholder="Repassword"
            />
          </div>
          <div
            id="donerepassword"
            class="text-green-600 hidden border-2 border-green-600 px-1 py-8 text-center"
          >
            done
          </div>
          <div
            id="errorrepassword"
            class="text-red-600 hidden bg-transparent border-2 border-red-600 px-1 py-8 w-80 text-center"
          >
            Enter valid repassword
          </div>

          <div>
            <button
              disabled
              class="border-red-900 border-2 px-3 py-1 rounded-sm text-red-900 focus:border-red-500 focus:ring-red-500"
            >
              Submit
            </button>
          </div>
        </div>`;
  cartonasearch.innerHTML = cartonacontact;
}
//  ==>      validation

function validateProduct(element) {
  var regex = {
    Name: /[A-Z][a-z]{0,16}/,
  };

  if (regex[element.id].test(element.value)) {
    document.getElementById("doneMessage").classList.remove("hidden");
    document.getElementById("errorMessage").classList.add("hidden");
  } else {
    document.getElementById("doneMessage").classList.add("hidden");
    document.getElementById("errorMessage").classList.remove("hidden");
  }
}
function validateProductNum(element) {
  var regexNumber = {
    Number: /^\d{11}$/,
  };

  if (regexNumber[element.id].test(element.value)) {
    document.getElementById("doneMessagenumber").classList.remove("hidden");
    document.getElementById("errorMessagenumber").classList.add("hidden");
  } else {
    document.getElementById("doneMessagenumber").classList.add("hidden");
    document.getElementById("errorMessagenumber").classList.remove("hidden");
  }
}
function validateProductPassword(element) {
  var regexPassword = {
    Password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };

  if (regexPassword[element.id].test(element.value)) {
    document.getElementById("donePassword").classList.remove("hidden");
    document.getElementById("errorPassword").classList.add("hidden");
  } else {
    document.getElementById("donePassword").classList.add("hidden");
    document.getElementById("errorPassword").classList.remove("hidden");
  }
}
function validateEmail(element) {
  var regexEmail = {
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  };

  if (regexEmail[element.id].test(element.value)) {
    document.getElementById("doneEmail").classList.remove("hidden");
    document.getElementById("errorEmail").classList.add("hidden");
  } else {
    document.getElementById("doneEmail").classList.add("hidden");
    document.getElementById("errorEmail").classList.remove("hidden");
  }
}
function validateAge(element) {
  var regexAge = {
    age: /^(1[0-9]|[2-9][0-9])$/,
  };

  if (regexAge[element.id].test(element.value)) {
    document.getElementById("doneage").classList.remove("hidden");
    document.getElementById("errorage").classList.add("hidden");
  } else {
    document.getElementById("doneage").classList.add("hidden");
    document.getElementById("errorage").classList.remove("hidden");
  }
}
function validateRePassword(element) {
  var regexRepassword = {
    age: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };

  if (regexRepassword[element.id].test(element.value)) {
    document.getElementById("donerepassword").classList.remove("hidden");
    document.getElementById("errorrepassword").classList.add("hidden");
  } else {
    document.getElementById("donerepassword").classList.add("hidden");
    document.getElementById("errorrepassword").classList.remove("hidden");
  }
}
// $("#Day").on("input", function (e) {
//   var test = /[0-9]/;
//   var value = e.target.value;
//   if (test.test(value)) {
//     console.log("hh");
//   } else {
//     console.log("sh");
//   }
// });
// function validate() {
//   const email = document.getElementById("email").value;
//   var regex = /[0-9]/;
//   if (regex.test(email)) {
//     console.log("hi");
//   } else {
//     console.log("kjj");
//   }
// }
