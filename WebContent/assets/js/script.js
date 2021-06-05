/*------------------------------------------------------------------
* Bootstrap Simple Admin Template
* Version: 2.1
* Author: Alexis Luna
* Website: https://github.com/alexis-luna/bootstrap-simple-admin-template
-------------------------------------------------------------------*/
// Toggle sidebar on Menu button click
$('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $('#body').toggleClass('active');
});

// Auto-hide sidebar on window resize if window size is small
// $(window).on('resize', function () {
//     if ($(window).width() <= 768) {
//         $('#sidebar, #body').addClass('active');
//     }
// });
$(function() {

$('.dropdown-toggle2').on('click', function(event) {
  $('.dropdown-menu2').slideToggle();
  event.stopPropagation();
});

$('.dropdown-menu2').on('click', function(event) {
  event.stopPropagation();
});

$(window).on('click', function() {
  $('.dropdown-menu2').slideUp();
});

});
