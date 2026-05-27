var choropleth_map = "charts/map1_choropleth.vg.json";
var heatmap = "charts/chart_heatmap.vg.json";
var stacked_area = "charts/chart_area_multiples.vg.json";
var bubble = "charts/chart_bubble.vg.json";
var streamgraph = "charts/chart_streamgraph.vg.json";
var dumbbell = "charts/chart_dumbbell.vg.json";
var lollipop = "charts/chart_lollipop.vg.json";
var bump = "charts/chart_bump.vg.json";
var slope = "charts/chart_slope.vg.json";

vegaEmbed("#choropleth_map", choropleth_map, {"actions": false})
  .then(function(result){})
  .catch(console.error);

vegaEmbed("#heatmap", heatmap, {"actions": false, "width": "container"})
  .then(function(result){})
  .catch(console.error);

vegaEmbed("#stacked_area", stacked_area, {"actions": false})
  .then(function(result){})
  .catch(console.error);

vegaEmbed("#bubble", bubble, {"actions": false, "width": "container"})
  .then(function(result){})
  .catch(console.error);

vegaEmbed("#streamgraph", streamgraph, {"actions": false, "width": "container"})
  .then(function(result){})
  .catch(console.error);
  
vegaEmbed("#dumbbell", dumbbell, {"actions": false})
  .then(function(result){})
  .catch(console.error);

vegaEmbed("#lollipop", lollipop, {"actions": false, "width": "container"})
  .then(function(result){})
  .catch(console.error);

vegaEmbed("#bump", bump, {"actions": false, "width": "container"})
  .then(function(result){})
  .catch(console.error);

vegaEmbed("#slope", slope, {"actions": false, "width": "container"})
  .then(function(result){})
  .catch(console.error);

