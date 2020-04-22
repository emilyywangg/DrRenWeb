var searchResult = JSON.parse(localStorage.getItem("searchPlaces"));
console.log("result saved is "+ searchResult);

if (searchResult.length === 1) {
 $(".result-msg").text("There are total 1 place found for your search");
} else {
 $(".result-msg").text(
   "There are total " + searchResult.length + " places found for your search"
 );
}

var itemCounter = 0;
for (let index = 0; index < 9; index++) {
 //Populate each item from search result list
 if (index < searchResult.length) {
   console.log("populating " + index);
   const place = searchResult[index];
   //add entry place title for each places
   var pText = $(".content-wrap .entry-header h2").toArray()[index];
   $(pText).text(place.name);
   // add img src for each places
   var imgItem = $(".content-wrap .featured-image img").toArray()[index];
   $(imgItem).attr("src", place.imageURL);

   // add card text for each places
   var pText = $(".content-wrap .entry-content p").toArray()[index];
   $(pText).text(place.cardText);

   // add google map link for each places
   var mapBtn = $(".map-btn").toArray()[index];
   $(mapBtn).attr(
     "onclick",
     "window.open('" +
       place.googleMap +
       "', 'Google Map', 'height=500, width=900, top=200, left=200')"
   );

 }

 else {
   // need to hide the place holder
   console.log("hiding " + index);
   var emptyItem = $(".col-md-4").toArray()[index];
   $(emptyItem).hide();
 }
}

// add "click" event listener for all Details button, and populate the modal dialog based on the number in each exampleModal_*
// and get the corrsponding value from places data
$(".detail-btn").on("click", function() {
  console.log("triggered");
 var modalName = $(this).attr("data-target");
 var num = modalName.substring(modalName.indexOf("_") + 1, modalName.length);

 $(".exampleModal_" + num + " .placeName").html(
   "<strong>Place: </strong>" + searchResult[num].name
 );
 if (searchResult[num].nearestTown.length>0) {
   $(".exampleModal_" + num + " .nearestTown").html(
     "<strong>Nearest town: </strong>" + searchResult[num].nearestTown
   );
 }

if (searchResult[num].direction.length>0) {
 $(".exampleModal_" + num + " .direction").html(
   "<strong>Direction: </strong>" + searchResult[num].direction
 );
}

if (searchResult[num].nearByAttractions.length>0) {
 $(".exampleModal_" + num + " .nearByAttractions").html(
   "<strong>Further Information: </strong>" +
     searchResult[num].nearByAttractions
 );
}
});
