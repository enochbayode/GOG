homeController = (req, res) => {
    res.render('index', {
        title: "Home Page"
    })
  };

mapController = (req, res) => {
  res.render('map', {
    title: "Simulation"
  })
};

reportController = (req, res) => {
  res.render('report', {
    title: "Analysis"
  })
};
  
  
module.exports = { 
  homeController,
  mapController,
  reportController 
};