
  $('#product-trigger').waypoint( function(){
    document.getElementById("products").classList.add("active");
  });

  $('#trending-trigger').waypoint( function(){
    document.getElementById("trending").classList.add("active");
  });

  $('#blog-trigger').waypoint( function(){
    console.log("Heyy beautifullz")
    document.getElementById("blog").classList.add("active");
  });

  $('#blog').waypoint( function(){
    document.getElementById("newsletter").classList.add("active");
  });
