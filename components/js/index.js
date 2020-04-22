

// Search Bar

$("#searchBtn").bind("keypress click", function() {
 matchPlaces = [];
 var value = $("#searchValue")
   .val()
   .toLowerCase();

 if (!value || value.trim().length === 0) {
   alert("Please input search criteria.");
 } else {
   var counter = 0;
   for (let index = 0; index < places.length; index++) {
     const place = places[index];
     if (place.name.toLowerCase().includes(value)) {
       counter++;
       if (counter > 9) {
         alert("Too many matching places, only nine of them are showing.");
         break;
       }
       matchPlaces.push(place);
     }
   }
   if (counter === 0) {
     alert("No matching place found");
   } else {
     localStorage.setItem("searchPlaces", JSON.stringify(matchPlaces));
     console.log("matchPlaces ="+ matchPlaces);
     console.log("JSON.stringify matchPlaces ="+ JSON.stringify(matchPlaces));
     $(this).attr("href", "searchResult.html");
   }
 }
});
