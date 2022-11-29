$(document).ready(function() {
    
    
        $('#logOut').click(function () {
           location.href = '/'
       })
       
    $('#vendorForm').submit(function(e){
        e.preventDefult();
        alert('Vendor form submitted!');
    })
})