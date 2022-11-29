$(document).ready(function () {
    $('#addBtn').click(function () {
        location.href = '/admin/add'
    })

    $('#editBtn').click(function () {
        var length = $(":checkbox:checked").length;
        if (length != 1) {
         alert('Please select one checkbox');
         return;
        }
 
        location.href = '/admin/edit'
     })
 
     $('#logOut').click(function () {
        location.href = '/'
    })
})
