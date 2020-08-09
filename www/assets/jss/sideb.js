$(function () {
  $('ons-button').on('click', function(e){
    //e.preventDefault();
    let Id=$(this).attr('id');
    ons.notification.alert(Id);
  });

});