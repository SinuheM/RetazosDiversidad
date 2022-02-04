
var data = [
   ['pe-ic', 1],
   ['pe-cs', 1],
   ['pe-am', 1],
   ['pe-lo', 1],
   ['pe-ay', 1],
   ['pe-145', 1],
   ['pe-hv', 1],
   ['pe-ju', 1],
   ['pe-lr', 1],
   ['pe-lb', 1],
   ['pe-tu', 1],
   ['pe-ap', 1],
   ['pe-ar', 1],
   ['pe-cl', 16],
   ['pe-mq', 1],
   ['pe-ta', 1],
   ['pe-hc', 1],
   ['pe-3341', 1],
   ['pe-ll', 1],
   ['pe-pa', 1],
   ['pe-pu', 1],
   ['pe-pi', 1]
   // ['pe-uc', 2],
   // ['pe-md', 3],
   // ['pe-sm', 4],
   // ['pe-an', 19],
   // ['pe-cj', 20],
];


// Create the chart
if(document.getElementById('mapcontainer')){
 Highcharts.mapChart('mapcontainer', {
     chart: { map: 'countries/pe/pe-all' },
     title: { text: '' },
     subtitle: { text: '' },
     credits: { enabled: false },
     legend: { enabled: false },
     exporting: { buttons: { contextButton: { enabled: false } } },
     mapNavigation: { enabled: false },
     tooltip: { headerFormat: '', pointFormat: '{point.name}' },
     series: [{
         data: data,
         name: '',
         states: {
             hover: {
                 color: '#5C5B5F'
             }
         },
         dataLabels: {
             enabled: true,
             format: '{point.name}'
         }
     }]
 
     /* plotOptions: {
         heatmap: {
             cursor: "pointer"
         },
         series: {
             events: {
                 click: function(e) {
                     // console.log(e)
 
                     var posi = $("#faccontainer").offset().top;
                     //$('html, body').animate({ scrollTop: posi - 50 }, 500, 'linear');
 
                     let ciudades = $('.people-city');
                     for (let index = 0; index < ciudades.length; index++) {
                         const el = ciudades[index];
                         $(el).addClass("hidden");
                     }
                     $('#people'+e.point.options.value).removeClass("hidden");
                     
                     //$('#nombre-map').text(e.point.options.nombres);
                 }
             }
         }
     } */
 });
}