//Adult Male bike
var j = jQuery;

//this is the id of the number input that will be changed
var addInput = '#noOfBikes';

var n = 0; //n will equal to zero

j(addInput).val(n); //this will set the default value to zero

//when the plus is clicked it will add 1 to n
j('.plus').on('click', function () {
    j(addInput).val(++n);
});

//when the minus is clicked it will subtract 1 from n
j('.minus').on('click', function () {
    if (n >= 1) {
        j(addInput).val(--n);
    }
});