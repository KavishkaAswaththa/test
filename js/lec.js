
function saveAppointment(){


        let assignDate=$('#exampleFormControlInput6').val();
        let assignTime=$('#exampleFormControlInput7').val();
        let venue=$('#exampleFormControlInput8').val();
        let reply=$('#exampleFormControlInput9').val();


    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/appointment/saveAppointment",
        async:true,
        data:JSON.stringify({
            "assignDate":assignDate,
            "assignTime":assignTime,
            "venue":venue,
            "reply":reply

        }),
        success: function (data) {
            alert("saved")

        },
        error: function (xhr, exception) {
            alert("Enter Another Email")
        }
    })



}
function updateAppointment(){

        let id=$('#exampleFormControlInput1').val();
        let email=$('#exampleFormControlInput2').val();
        let faculty=$('#exampleFormControlInput3').val();
        let message=$('#exampleFormControlInput4').val();
        let count=$('#exampleFormControlInput5').val();
        let assignDate=$('#exampleFormControlInput6').val();
        let assignTime=$('#exampleFormControlInput7').val();
        let venue=$('#exampleFormControlInput8').val();
        let reply=$('#exampleFormControlInput9').val();


    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/appointment/editAppointment",
        async:true,
        data:JSON.stringify({
            "id":id,
            "email":email,
            "faculty":faculty,
            "message":message,
            "count":count,
            "assignDate":assignDate,
            "assignTime":assignTime,
            "venue":venue,
            "reply":reply
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

    let email=$('#exampleFormControlInput1').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/appointment/deleteAppointment/"+email,
        async:true,
        success: function (data) {
            alert("Deleted")

        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
function getAllEmployees(){
    let empAddress=$('#exampleFormControlInput0').val();



    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/appointment/getAllEmployees",
        async:true,
        success: function (data) {
            if (data.code==="00"){
            $('#empTable').empty();
            for (let emp of data.content){
            let id=emp.id
            let email=emp.email
            let faculty=emp.faculty
            let lecturer=emp.lecturer
            let message=emp.message
            let count=emp.count
            let date=emp.date
            let status=emp.status

            if(empAddress===lecturer){
            var row=`<tr><td>${id}</td><td>${email}</td><td>${faculty}</td><td>${message}</td><td>${count}</td><td>${date}</td><td>${status}</td></tr>`;
            $('#lecTable').append(row);
            }
            }
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
$(document).ready(function () {
    $(document).on('click', '#lecTable tr', function () {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();
        var col4 = $(this).find('td:eq(4)').text();
        var col5 = $(this).find('td:eq(5)').text();
        var col6 = $(this).find('td:eq(6)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
        $('#exampleFormControlInput5').val(col4);
        $('#exampleFormControlInput6').val(col5);
        $('#exampleFormControlInput7').val(col6);

    })
})
