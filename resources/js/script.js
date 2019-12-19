$(document).ready(function(){
    //ολα τα αρχεια που εχουν κωδικα jquery πρεπει να ξεκινανε ετσι! διαβεββαιβνει οτι εχει φορτωθει πρωτα το html αρχειο 


  //-----------------STICKY NAVIGATION--------------------  
//from the waypoints documentation 
    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   })

//η συμπεριφορα που θελουμε ειναι να ειναι κρημενη η μπαρα και να εμφανιζεται οταν περναμε στο δευτερο section get food fast not fast food 
//document.querySelector('.js--section-features')
// πανω ειναι ο vanilla js way απο κατω ειναι με jquery 

$('.js--section-features').waypoint(function(direction){
    if(direction=="down"){
        //αν σκρολαρει κατω θελουμε να προσθετουμε στο nav την class sticky 
        $('nav').addClass('sticky');
    }else{
        //αν σκρολαρει πανω θελουμε να αφαιρουμε την class sticky 
        $('nav').removeClass('sticky');
    }},{offset:'60px;'}); //αρα θα συμβει 60px πριν ακουμπησει το ection που εχουμε ορισει

//επειδη δεν εχουμε χωρο αν ειναι ακριβως πανω απο το section θελουμε η μπαρα να εμφανιζεται νωριτερα!!! 



//επειδη η μπαρα στο grid ειναι πισω απο το grid παμε css και συγκεκριμενα .sticky και παμε στο .sticky{z-index:9999} // και το βαζουμε στην μεγαλυτερη τιμη 


//-------------------SCROLL ON BUTTONS----------------------
// first we define classes for each of those buttons so we can select them. A uinique class for each of them. Example js--scroll-to-plans
//we add classes to the a (buttons) and to the sections we want to move to  
// js--scroll-to-plans
// js--scroll-to-start
// js--section-plans
// js--section-features

//second write jquery selector.click(callback function 
//inside the callback we have to select the html,body first then we say animate and the place we want to animate 

//the function we will call 


$('.js--scroll-to-plans').click(function(){
    $('html,body').animate(
        {scrollTop:$('.js--section-plans').offset().top},1000);
})


$('.js--scroll-to-start').click(function(){
    $('html,body').animate(
        {scrollTop:$('.js--section-features').offset().top},1000);
})


//----NAVIGATION SMOOTH SCROLLING---------
// I searched for smooth scrolling snippet 

$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

//define some anchors--> in the links where we have #
//παμε και βαζουμε στα a (links ) μετα την διεση ενα id το ιδιο  id και στο section που θελουμε. 



// Different animations from the Animate.css framework 
//Animations on Scroll θα κανουμε ενα συνδιασμο του waypoints and animate.css 



// βημα 1 -> html και προσθηκη class για το waypoints
// βημα 2 ->τσεκαρουμε τι θελουμε να εχει το animation eg ολοκληρη η row etc. εκει προσθετουμε την class 
// eg js--wp-1
// βημα 3 κανουμε το αντικειμενο που θελουμε αορατο invisible για να λειτουργησει το animation 
// βημα 4 επιλεγουμε με το waypoint το σημειο που θα γινει το animation και προσθετουμε την class 
//βημα 5 το κατεβαζει για να το ενσωματωσει το animate.css vendors/css/animate.css
//βημα 6 συνδεει το html me to animate.css


/*---Animations on scroll...waypoints---*/

$('.js--wp-1').waypoint(function(direction){

  $('.js--wp-1').addClass('animated fadeIn');
  
  }, {
  
  offset: '50%'
  //αυτο θα προσθεσει 50% δλδ μιση σελιδα προς τα καω αποτ ο σημειο που ορισαμε.
  });
  
});

//-------------------waypoints------------------------------
//set where we want to happen (element)
//example of class we add to the element js--wp-1 θα βαλουμε αυτην την κλαση στο row που θελουμε να εχει το animation 
//μετα βαζουμε selector και waypoint ειναι method του waypoint
//μετα απλα προσθετουμε την κλαση animated+ ονομα animation.css στο element που θελουμε

//--------iphone image animation --------------------
// 1)set the waypoint in the Html
// 2)select the waypoint (with jquery) 
// 3)inside the waypoint callback add to the selected element the class we want 
// 4)set an offset if necessary 
//5) set the opacity to 0 and 1 when the class animated is added at the same time .js--wp-2.animated{ opacity:1;}

//iphone image animation 
$('.js--wp-2').waypoint(function(direction){
  $('.js--wp-2').addClass('animated fadeInUp');
},{
  offset:'50%'
});


//cities animation 
$('.js--wp-3').waypoint(function(direction){
  $('.js--wp-3').addClass('animated fadeIn');
},{
  offset:'50%'
});


//plans animation 
$('.js--wp-4').waypoint(function(direction){
  $('.js--wp-4').addClass('animated pulse');
},{
  offset:'50%'
})
//να κανω τα aimations για τα αλλα 2 και να τσεκαρω ταχυτητα και prefixes 

//cities  number 3
//plans number 4 pulse 
//change the animation duration to 1s for 2,4 wp
//prefix the animation duration for browser compatibility 
//change the animation duration by adding the animation duration to our css code at the corresponding class of the aniamtion we want to change
