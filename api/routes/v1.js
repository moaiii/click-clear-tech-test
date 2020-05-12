var express = require('express');
var router = express.Router();
var allTracks = require('../db/tracks.json')
var FuzzySearch = require('fuzzy-search');

router.get('/', function(req, res, next) {
  const { tracks } = allTracks;
  
  res.send(tracks);
});

router.get('/tracks', function(req, res, next) {
  const searchOn = req.query.search;
  
  const value = req.query.value;
  
  const { tracks } = allTracks;

  const searcher = new FuzzySearch(tracks, [searchOn], {
    caseSensitive: false,
    sort: true
  });

  const result = searcher.search(value);

  res.send(result);
});


module.exports = router;
