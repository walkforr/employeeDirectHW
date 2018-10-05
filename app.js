//hide&show each page

(function () {
    $("#add").hide();
    $("#view").hide();
    $("#verify").hide();
    $("#update").hide();
    $("#delete").hide();
})();

const showView = function () {
    $("#view").show();
    $("#add").hide();
    $("#verify").hide();
    $("#update").hide();
    $("#delete").hide();
};

const showAdd = function () {
    $("#view").hide();
    $("#add").show();
    $("#verify").hide();
    $("#update").hide();
    $("#delete").hide();
};

const showVerify = function () {
    $("#view").hide();
    $("#add").hide();
    $("#verify").show();
    $("#update").hide();
    $("#delete").hide();
};

const showUpdate = function () {
    $("#view").hide();
    $("#add").hide();
    $("#verify").hide();
    $("#update").show();
    $("#delete").hide();
};

const showDelete = function () {
    $("#view").hide();
    $("#add").hide();
    $("#verify").hide();
    $("#update").hide();
    $("#delete").show();
};


//hide-show buttons

$(".view-page").on("click", showView);
$(".add-page").on("click", showAdd);
$(".verify-page").on("click", showVerify);
$(".update-page").on("click", showUpdate);
$(".delete-page").on("click", showDelete);





//clear info

const clearText = function () {
    $('.name').val('');
    $('.officeNum').val('');
    $('.phoneNum').val('');
}

//view-Render



const render = function() {
    $(".content").empty();
    for( let i = 0; i < employeeList.length; i++ ) {
      $(".content").prepend(`<div class="box"><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
    }
  }

  $(".view-page").on("click", render);


  //add

  const addEmployee = function () {
    const nameVal = $("#add .name").val();
    const officeVal = $("#add .officeNum").val();
    const phoneVal = $("#add .phoneNum").val();

    const employee = {
        name: nameVal,
        officeNum: officeVal,
        phoneNum: phoneVal
    }

    employeeList.push(employee);

    clearText();
    render();
  }


$("#addBtn").on("click", addEmployee);

//verify



$("#verify .name").on("input", function () {
    $("#verifyText").empty();
});

const verifySearch = function () {
    const name = $("#verify .name").val();
    console.log(name);
    for (let i = 0; i < employeeList.length; i++) {
    if (name === employeeList[i].name) {
        $("#verifyText").text("Yes");
        return;
    } else {
        $("#verifyText").text("No");
        
        }
    }

    clearText();
}
$('#verifyBtn').on('click', verifySearch);


//update

//empty, push, render
const updateEmployee = function (employee) {
    const matchName = $("#update .name").val();
    console.log(matchName);
    for(let i = 0; i < employeeList.length; i++) {
        
        if(matchName === employeeList[i].name) {
            console.log("string matched");
            $("#update .name").empty(employee);
            if( $("#update .officeNum") !== "") {
             employeeList[i].officeNum = $("#update .officeNum").val();
            }
            if( $("#update .phoneNum") !== "") {
                employeeList[i].phoneNum = $("#update .phoneNum").val();
               }
        }
    }
    

    

    clearText();
    render();
    
}

$("#updateBtn").on("click", updateEmployee);




//delete an employee from the list

const removeName = function () {
    employeeName = $("#delete .name").val();
    console.log(employeeName);
    for(let i = 0; i < employeeList.length; i++) {
        if (employeeName === employeeList[i].name) {
            employeeList.splice(i, 1);
        }
    }

    clearText();

    render();

}

$("#deleteBtn").on("click", removeName);

