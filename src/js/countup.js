import {CountUp} from 'countup.js';

const countMembers = new CountUp('countMembers', 2000, {
  startVal: 1500,
  duration: 3,
  useGrouping: false,
  useEasing: true,
  enableScrollSpy: true,
  suffix: '+',
});

const countReviews = new CountUp('countReviews', 500, {
  startVal: 200,
  duration: 3,
  useGrouping: false,
  useEasing: true,
  enableScrollSpy: true,
  suffix: '+',
});

const countVideos = new CountUp('countVideos', 300, {
  startVal: 100,
  duration: 3,
  useGrouping: false,
  useEasing: true,
  enableScrollSpy: true,
  suffix: '+',
});

const countModules = new CountUp('countModules', 30, {
  duration: 3,
  useGrouping: false,
  useEasing: true,
  enableScrollSpy: true,
  suffix: '+',
});

countReviews.start();
countMembers.start();
countVideos.start();
countModules.start();
