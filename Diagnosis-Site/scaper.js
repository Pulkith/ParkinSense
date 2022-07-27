const scrape = import('website-scraper'); 
const websiteUrl = 'https://preview.colorlib.com/#medisen'; 
 
module.export = () => {
  scrape({ 
      urls: [websiteUrl], 
      urlFilter: function (url) { 
          return url.indexOf(websiteUrl) === 0; 
      }, 
      recursive: true, 
      maxDepth: 50, 
      prettifyUrls: true, 
      filenameGenerator: 'bySiteStructure', 
      directory: './node-website' 
  }).then((data) => { 
      console.log("Entire website succesfully downloaded"); 
  }).catch((err) => { 
      console.log("An error ocurred", err); 
  }); 
};

// system.out.println("Good bye world");
// System.out.println(Goo);