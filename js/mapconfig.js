var data = [
  ["pe-ic", 1], // Ica
  ["pe-cs", 1], // Cusco
  ["pe-am", 1], // Amazonas
  ["pe-lo", 1], // Loreto
  ["pe-ay", 1], // Ayacucho
  ["pe-145", 1], // Callao
  ["pe-hv", 1], // Huancavelica
  ["pe-ju", 1], // Junin
  ["pe-lr", 1], // Lima
  ["pe-lb", 1], // Lambayeque
  ["pe-tu", 1], // Tumbes
  ["pe-ap", 1], // Apurimac
  ["pe-ar", 1], // Arequipa
  ["pe-cl", 16], // Puno
  ["pe-mq", 1], // Moquegua
  ["pe-ta", 1], // Tacna
  ["pe-hc", 1], // Huanuco
  ["pe-3341", 1], // Callao
  ["pe-ll", 1], // La libertad
  ["pe-pa", 1], // Pasco
  ["pe-pu", 1], // 
  ["pe-pi", 1], // Piura
  // ['pe-uc', 2],
  // ['pe-md', 3],
  // ['pe-sm', 4],
  // ['pe-an', 19],
  // ['pe-cj', 20],
];

const handleChangeMap = (selected) => {
  const selectedClass = 'impact__people--selected';
  const toSelectClass = `impact__people--${selected}`;

  const oldSelected = document.getElementsByClassName(selectedClass);
  if (oldSelected.length > 0 ){
    oldSelected[0].classList.remove(selectedClass)
  }

  const toSelect = document.getElementsByClassName(toSelectClass);
  if (toSelect.length > 0 ){
    toSelect[0].classList.add(selectedClass)
  }
}

// Create the chart
if (document.getElementById("mapcontainer")) {
  Highcharts.mapChart("mapcontainer", {
    chart: { map: "countries/pe/pe-all", backgroundColor: "#72264D" },
    title: { text: "" },
    subtitle: { text: "" },
    credits: { enabled: false },
    legend: { enabled: false },
    exporting: { buttons: { contextButton: { enabled: false } } },
    mapNavigation: { enabled: false },
    tooltip: { headerFormat: "", pointFormat: "{point.name}" },
    series: [
      {
        nullColor: "#745163b2",
        color: "#b35e25da",
        borderColor: "#ffbf009e",
        data,
        name: "",
        states: {
          hover: {
            color: "#B35E25",
          },
          select: {
            color: "#B35E25",
          },
          inactive: {
              opacity: 1
          }
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
        events: {
          click: function(e) {
            handleChangeMap(e.point.options['hc-key'])
          }
        }
      },
    ]
  });
}
