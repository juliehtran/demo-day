// equivalent jquery syntax
// const visitedLocations = $('map').data().visitedLocations
const visitedLocations = JSON.parse(document.querySelector('map').dataset.visitedLocations)
const areas = visitedLocations.map((location) => ({ key: location, staticState: true }))

$("img[usemap]").mapster({
  fillColor: "fff000",
  stroke: true,
  fillOpacity: 0.6,
  mapKey: "data-location",
  areas: areas,
  clickNavigate: true,
  render_select: {
    fillColor: "0fd00c",
    stroke: true,
  },
});
