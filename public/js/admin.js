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

    $("#deleteBtn").click(function () {
        var length = $(":checkbox:checked").length;
        if (length != 1) {
            alert('Please Select One Checkbox');
            return;
        }

        var all, checked;
        all = $('input:checkbox');
        checked = all.filter(':checked');

        var checkedIds = checked.map(function () {
            return this.id;
        })

        $.ajax({
            url: `/api/admin/${checkedIds[0]}`,
            type: 'DELETE',
            success: function (result) {
                location.reload();
            },
            error: (e) => {
                alert(e);
            }
        })
    })
})
