const form = document.getElementById("formData");
console.log(form);
const inputField = document.getElementById("input");
console.log(inputField);
let inputField2;
let child = true;

const taskValues = [] ;
const addBtn = document.getElementById("addBtn");
const upBtn = document.getElementById("upBtn");
console.log(addBtn);
// const saveBtn = document.getElementById("saveBtn");
// console.log(saveBtn);

let parent = true;
var editPress = false;
let index;
let childIndex
let parentindex;

if(editPress===false)
{
    document.getElementById("addBtn").style.display = "block";
    document.getElementById("upBtn").style.display = "none";

}

addBtn.addEventListener('click', function (e) {
    if (inputField.value !='') {
        if (parent === true && editPress == false) {
            console.log("addbutton");
            console.log("inputvalue is" + inputField.value)

            taskValues.push({ title: inputField.value, sub: [] });
            console.log("value of task in parent" + taskValues);
            inputField.value = '';
            print();
        }
    }
}
);
function displayinput(i)
{
     if(child===true)
     {

    
     parent = false;
    console.log('value of i'+i)
    parentindex = i;
  
        print2();
    //child = false;
       
    
    console.log('parentindex is'+i+'parent is'+parent+'child is'+child);
}
}



function print()
{
    console.log("taskValue in print"+taskValues);
    const ul = document.getElementById("list");
    ul.innerHTML ='';
    for (let i = 0; i < taskValues.length; i++)   // loop to iterate parent
    {
       
console.log('parent');
      
        if(taskValues[i].title!=='' )
        {

        console.log(i);
        ul.innerHTML += `<div> <li class='items'>      ${taskValues[i].title}
        <div class="spanButton">
        <span >
       <i class='fa fa-chevron-down' onclick = "displayinput(${i})"> 
        </i>
     </span>
    <span>
            <span><i class="fa fa-edit" onclick = "editList(${i})">

                </i></span>
            <span>

                <i class="fa fa-remove" onclick = "deleteList(${i})">

                </i>
            </span>
        </div>
    </li>      </div>`;





}


    for (let j = 0; j < taskValues[i].sub.length; j++)   
    {
        if(taskValues[i].sub[j]!=='' )
        {
       if(editPress===false)
       {

     
        console.log(i);
        ul.innerHTML += `<div class = 'childlist' id = "childlist"> <li class=' items1'> ${taskValues[i].sub[j]}
        <div class="spanButton">

    
    <span>
            <span><i class="fa fa-edit EDIT" onclick = "EditList(${i},${j})">

                </i></span>
            <span>

                <i class="fa fa-remove" onclick = "DeleteList(${i},${j})">

                </i>
            </span>
        </div>
    </li>      </div>`;

    // <span >
    //     <i class="fa fa-save SAVE" onclick = "childSave()">
    //     </i>
    // </span>

mainDiv = document.getElementById("childlist");
// console.log("main div is"+mainDiv);


}
//  inputField2 = document.getElementById("input2");
// console.log(inputField2);
//     console.log(taskValues);
}
    }
      }

}

console.log()

function deleteList(i) {

console.log(i);
    taskValues.splice(i, 1);
    print();


}
function DeleteList(i , j) {


    taskValues[i].sub.splice(j, 1);
    print();


}

function editList(i) {

    index = i;
    editPress = true;
    
    inputField.value = taskValues[index].title;
    if(editPress===true)
{
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("upBtn").style.display = "block";

}
  

}
function EditSave() {
    let value = inputField.value;
    console.log("parentsave value"+value)
    if (value !=="" &&  value !==" ") {
      taskValues[index].title= value;
      editPress = false;
       
        print();
        // editPress = true;
        child = true;
parent = true;
        if(editPress===false)
        {
            document.getElementById("addBtn").style.display = "block";
            document.getElementById("upBtn").style.display = "none";
        
        }
         inputField.value = "";
    }
}
function EditList(i,j) {



    index = i;
    childIndex = j;
    editPress = true;
    checkEdit(i,j);
    // console.log('inputfield 2 is'+inputField2.value);
    // inputField2.value = taskValues[index].sub[childIndex];
  

}

// function childSave()
// {
    
//     let value =  taskValues[index].sub[childIndex];
//     console.log('child value:'+value,':')
// if(value!=='')
// {
  
//     console.log('inputfield value'+value)
//         taskValues[index].sub.splice(childIndex,1,value);
//         // inputField.value = " ";
//         console.log(taskValues[index].sub+"complete");
//         editPress = true;



//         print();
       
// }



// }


function print2()
{

// if(child==true )
// {


    const ul = document.getElementById("list");
   
       ul.insertAdjacentHTML("beforeend",`<div class="checkout">
     
           <input type="text" name="" id="input1" class="input1" placeholder="sub plan">
           <input type="button" value="ok" id="ok" class="okbtn">
         
           
   </div>`);
// }

//  child = false;
    
   const okbtn = document.getElementById("ok");
   console.log(okbtn+"ok is there");
   const input2 = document.getElementById("input1");
//    if (parent === false && child===false)
//    {
    okbtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("this is print input>>"+input2.value+"blank");
        console.log(parentindex);
        console.log('parent is'+parent);
      
            alert('che3ck');
            console.log("child value" + parentindex);
            console.log("child value" + taskValues[parentindex]);
            taskValues[parentindex].sub.push(input2.value); // push value in it but no value syntax error
          console.log('full sub'+ taskValues[parentindex].sub);
        
        
            print();
             child = true;
              parent =true;
 } 
);
//    }
  
   


     }



     
function print3()
{


  
}

function checkEdit(i,j)
{
    if(child==true)
    {

   
    const ul = document.getElementById("list");
   
    ul.insertAdjacentHTML("beforeend",`<div class="checkout">
  
        <input type="text" name="" id="input1" class="input1" placeholder="sub plan">
        <input type="button" value="ok" id="ok" class="okbtn">  
</div>`);
}
 child = false;
const okbtn = document.getElementById("ok");
console.log(okbtn+"ok is there");
const input2 = document.getElementById("input1");
if(child===false)
{


   okbtn.addEventListener('click', function (event) {
    event.preventDefault();
// taskValues[i].sub[j] = input2.value ;
taskValues[i].sub.splice(j,1,input2.value );
console.log( 'the value of input'+input2.value);
console.log(taskValues[i].sub+'value of it is this' );
editPress = false;
print();

child = true;
parent = true;
} 
);
}

}


     