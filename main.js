//var iterations = 100; // succeeds
var iterations = 1000; // fails

import {scaleLinear} from 'd3-scale';

var s = scaleLinear().range([1, 0]);
for (var i = 0; i < iterations; ++i)
    s.range();
s.range([1, 0]);

try {
    s.range();
    document.getElementById('out').textContent = "succeeded";
}
catch (Exception) {
    document.getElementById('out').textContent = "failed";
}
