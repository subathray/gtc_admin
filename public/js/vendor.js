$(document).ready(function () {
    $('#addBtn').click(function () {
        location.href = '/vendor/add'
    })

    $('#editBtn').click(function () {
       var length = $(":checkbox:checked").length;
       if (length != 1) {
        alert('Please select one checkbox');
        return;
       }

       location.href = '/vendor/edit'
    })

    $('#logOut').click(function () {
        location.href = '/'
    })
})