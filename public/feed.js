var feed = [];

function retrieveData(adress) {
  var request = new XMLHttpRequest();
  request.open("GET", adress, false);
  request.overrideMimeType('application/xml');
  request.send();
  var xml = request.responseXML;
  feedLoop = xml.getElementsByTagName("item");

  for(var itemIndex = 0; itemIndex < feedLoop.length; itemIndex++){
    feed += feedLoop[itemIndex].textContent;
    console.log(feedLoop[itemIndex].textContent);
  }
}

retrieveData("/rss?url=http://gt.se/rss/nyheter");
retrieveData("/rss?url=http://expressen.se/rss/nyheter");
retrieveData("/rss?url=http://kvp.se/rss/nyheter");

console.log(feed);
document.getElementById("feed").innerHTML = feed;