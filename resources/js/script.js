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








});