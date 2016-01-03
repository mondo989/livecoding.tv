$('#cta-btns-trigger').waypoint(function(){

    document.getElementById("cta-hero-buttons-holder").classList.add("active");
});

$('#legend-trigger').waypoint(function(){
  document.getElementById("legend").classList.add("active");

  console.log("yehe yeheye ")
})

$('#motorcycle-trigger').waypoint(function(){
  console.log("Hey");
  document.getElementById("motorcycle").classList.add("rideOut");
})
