$(document).ready(function () {

    $('#logOut').click(function () {
        location.href = '/'
    })

    // $("#backBtn").click(function () {
    //     location.href = "/admin";
    // })

    $("#adminForm").submit(function (e) {
        e.preventDefault();
        var adminName = $("#adminName").val();
        var emailId = $("#email").val();
        var password = $("#password").val();
        var status = $("#status").val();
        console.log(status);

        if (!adminName) {
            alert("Please Enter User Name");
            return;
        }

        if (!emailId) {
            alert("Please Enter Valid Email");
            return;
        }

        if (!password) {
            alert("Please Enter Your Password");
            return;
        }

        // if (!status) {
        //     alert("Please Enter Your Status");
        //     return;
        // }

        var adminObj = {
            name: adminName,
            email_id: emailId,
            status: status,
            password
        }

        $.ajax({
            url: "/api/admin",
            type: "POST",
            data: adminObj,
            success: function (result) {
                location.href = '/admin';
                console.log(result);
                // $("#userName").val("");
                // $("#email").val("");
                // $("#password").val("");
                $("#reset").click();
            },
            error: function (e) {
                alert(e);
            }
        })
    })

})
