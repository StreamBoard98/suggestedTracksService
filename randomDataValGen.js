// import sampleData from 'groupSharedData.js';
const _ = require('lodash');
const importedSampleData = require('./groupSharedData.js');
const albumArt = require('./albumArt.js');

function generateDataPoint() {
  const dataPoint = {};
  dataPoint.plays = Math.floor(Math.random() * (20000000));
  dataPoint.likes = Math.floor(Math.random() * (1000000));
  dataPoint.shares = Math.floor(Math.random() * (50000));
  dataPoint.comments = Math.floor(Math.random() * (10000));
  return dataPoint;
}

const sampleDataPointMetrics = [];
let i = 0;
while (i < 140) {
  sampleDataPointMetrics.push(generateDataPoint());
  i += 1;
}

const sampleData = importedSampleData.sampleData.slice();
for (let j = 0; j < sampleData.length; j += 1) {
  _.assign(sampleData[j], sampleDataPointMetrics[j]);
}

for (let j = 0; j < sampleData.length; j += 1) {
  for (let key in albumArt.albumArtList) {
    if (sampleData[j].artist === key) {
      sampleData[j].albumArt = albumArt.albumArtList[key];
    }
  }
}

exports.sampleData = sampleData;
