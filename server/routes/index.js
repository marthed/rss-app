const express = require('express');
const router = express.Router();
const rssToJson = require('rss-to-json');

const listOfRssFeed = [
  'https://feeds.expressen.se/nyheter/',
  'http://gt.se/rss/nyheter',
  'http://kvp.se/rss/nyheter'
]

const feedResults = [];

router.get('/rss', function(req, res) {
  const top10feeds = iterateOverAllRssFeeds();
  
  //res.render('index', { title: 'The latest RSS feeds', message: 'Hello World'})
  res.send('tjena');
});

 
const loadFeed = function(feed){
  return new Promise((resolve, reject) => {
    rssToJson.load(feed, function(err, rss){
      console.log("reading feed: ", feed)
      resolve(rss);
  });
  })
  
}

const iterateOverAllRssFeeds = function(){
  let res = listOfRssFeed.map((feed)=> {
    return loadFeed(feed);
  })
  Promise.all(res).then(rssItems => {
    //console.log("the items", rssItems) 
    let res2 = rssItems.map(rssItem => {
      return rssItem.items
    })

    res2 = flatten(res2);
    res2 = sortArray(res2);
    res2 = getTenLatest(res2);
    //console.log("res2", res2);
    return res2;
  })
}

const flatten = function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten); 
  }, []);
}

const sortArray = function(arr){
  return arr.sort((a,b) => {
    return b.created - a.created;
  })
}

const getTenLatest = function(arr){
  return arr.slice(0,10);
}

iterateOverAllRssFeeds();
module.exports = router;