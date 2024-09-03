
function addAppointment(){

    let id=$('#exampleFormControlInput0').val();
    let email=$('#exampleFormControlInput1').val();
    let faculty=$('#exampleFormControlInput2').val();
    let lecturer=$('#exampleFormControlInput3').val();
    let message=$('#exampleFormControlInput4').val();
    let count=$('#exampleFormControlInput5').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/appointment/addAppointment",
        async:true,
        data:JSON.stringify({
            "id":id,
            "email":email,
            "faculty":faculty,
            "lecturer":lecturer,
            "message":message,
            "count":count
        }),
        success: function (data) {
            alert("saved")

        },
        error: function (xhr, exception) {
            alert("Your earlier appointment is being processed ‼️")
        }
    })



}
function editAppointment(){

    let id=$('#exampleFormControlInput0').val();
    let email=$('#exampleFormControlInput1').val();
    let faculty=$('#exampleFormControlInput2').val();
    let lecturer=$('#exampleFormControlInput3').val();
    let message=$('#exampleFormControlInput4').val();
    let count=$('#exampleFormControlInput5').val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/appointment/editAppointment",
        async:true,
        data:JSON.stringify({
            "id":id,
            "email":email,
            "faculty":faculty,
            "lecturer":lecturer,
            "message":message,
            "count":count
        }),
        success: function (data) {
            alert("Updated")

        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
function deleteAppointment(){
    let id=$('#exampleFormControlInput0').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/appointment/deleteAppointment/"+id,
        async:true,
        success: function (data) {
            alert("Deleted")

        },
        error: function (xhr, exception) {
            alert("Not a Registered Student")
        }
    })

}
function getAppointment(){

    let id=$('#exampleFormControlInput0').val();

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/appointment/searchAppointment/"+id,
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#empTable').empty();
                for (let emp of data.content){
                    let email=emp.email
                    let faculty=emp.faculty
                    let lecturer=emp.lecturer
                    let message=emp.message

                    var row=`<tr><td>${email}</td><td>${faculty}</td><td>${lecturer}</td><td>${message}</td></tr>`;
                    $('#empTable').append(row);
                }
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
$(document).ready(function () {
    $(document).on('click', '#empTable tr', function () {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);

    })
})
