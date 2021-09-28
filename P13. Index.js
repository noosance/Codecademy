

let sthis_string_has_what_im_looking_for = "240tutoring.com/about-us";
let sthis_string_doesnt_has_what_im_looking_for = "240tutoring/about-us";

if (sthis_string_has_what_im_looking_for.indexOf('.com') > 1){ console.log(sthis_string_has_what_im_looking_for.indexOf('.com')); }


if (sthis_string_doesnt_has_what_im_looking_for.indexOf('.com') > 1){ console.log(sthis_string_doesnt_has_what_im_looking_for.indexOf('.com')); } else { 
console.log(sthis_string_doesnt_has_what_im_looking_for);
}
//VM622:6 11
//VM622:10 240tutoring/about-us
//undefined




let sthis_string_has_what_im_looking_for = ".com240tutoring/about-us";
let sthis_string_doesnt_has_what_im_looking_for = "240tutoring/about-us";

if (sthis_string_has_what_im_looking_for.indexOf('.com') > 1){ console.log(sthis_string_has_what_im_looking_for.indexOf('.com')); }


if (sthis_string_doesnt_has_what_im_looking_for.indexOf('.com') > 1){ console.log(sthis_string_doesnt_has_what_im_looking_for.indexOf('.com')); } else { 
console.log(sthis_string_doesnt_has_what_im_looking_for);
}
//VM637:8 240tutoring/about-us
//undefined




let sthis_string_has_what_im_looking_for = ".com240tutoring/about-us";
let sthis_string_doesnt_has_what_im_looking_for = "240tutoring/about-us";

if (sthis_string_has_what_im_looking_for.indexOf('.com') > -1){ console.log(sthis_string_has_what_im_looking_for.indexOf('.com')); }


if (sthis_string_doesnt_has_what_im_looking_for.indexOf('.com') > 1){ console.log(sthis_string_doesnt_has_what_im_looking_for.indexOf('.com')); } else { 
console.log(sthis_string_doesnt_has_what_im_looking_for,sthis_string_doesnt_has_what_im_looking_for.indexOf('.com'));
}
//VM726:4 0
//VM726:8 240tutoring/about-us -1
//undefined
let arr = ["a","b","c"]; 


console.log(arr.indexOf("a"));
//VM933:4 0
//undefined
let arr = ["a","b","c"]; 


console.log(arr.indexOf("c"));
//VM937:4 2
//undefined