$(document).ready(function () {

    $('#logOut').click(function () {
        location.href = '/'
    })

    $("#backBtn").click(function () {
        location.href = "/users";
    })

    $("#userForm").submit(function (e) {
        e.preventDefault();
        var username = $("#userName").val();
        var emailid = $("#email").val();
        var password = $("#password").val();

        if (!username) {
            alert("Please Enter User Name");
            return;
        }

        if (!emailid) {
            alert("Please Enter Valid Email");
            return;
        }

        if (!password) {
            alert("Please Enter Your Password");
            return;
        }

        var userObj = {
            name: username,
            email_id: emailid,
            password
        }

        $.ajax({
            url: "/api/users",
            type: "POST",
            data: userObj,
            success: function (result) {
                location.href = '/users';
                // alert(result);
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
