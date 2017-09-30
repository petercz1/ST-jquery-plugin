console.log('loaded...');

$(document).ready(setup);

function setup(){
    console.log('Inside setup');
    $('#card').click(do_click);
}

function do_click(){
    console.log('Inside do_click');
    $("#card").flip({
       axis: "y", // y or x
       reverse: false, // true and false
       trigger: "hover", // click or hover
       speed: '1000',
       front: $('.other-front'),
       back: $('.other-back'),
       autoSize: false
     });
}