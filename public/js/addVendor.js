$(document).ready(function() {
    
    $('#vendorForm').submit(function(e){
        e.preventDefult();
        alert('Vendor form submitted!');
    })
})