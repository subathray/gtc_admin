$(document).ready(function () {
    $('#addBtn').click(function () {
        location.href = '/user/add'
    })

    $('#editBtn').click(function () {
        var length = $(":checkbox:checked").length;
        if (length != 1) {
            alert('Please select one checkbox');
            return;
        }
        location.href = '/user/edit'
    })

    $('#logOut').click(function () {
        location.href = '/' 
    })

    $("#deleteBtn").click(function () {
        var length = $(":checkbox:checked").length;
        if (length != 1) {
          alert("Please Select Anyone Check Box");
          return;
        }
    
        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");
    
        var checkedIds = checked.map(function () {
          return this.id;
        });
        // console.log('Checked id', checkedIds[0]);
    
        $.ajax({
            url: `/api/user/${checkedIds[0]}`,
            type: "DELETE",
            success: function(result) {
                location.reload();
            }, 
            error: function(e){
                alert(e);
            }
        })
      });
    
})
