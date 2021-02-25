// Initialize the client
const algoliasearch = require('algoliasearch');

// Replace by your value
const app_id = 'XR3Z76W57K';
const admin_api_key = '9d3a8945c39c0e97bb33a1c9934c9367';


const client = algoliasearch(
  app_id,
  admin_api_key
);

// Push Data
const index = client.initIndex('contact');
const contactsJSON = require("./contact_dataset.json");
index.saveObjects(contactsJSON, {
    autoGenerateObjectIDIfNotExist: true
  }).then(({ objectIDs }) => {
    console.log(objectIDs);
  });

// Configure
index.setSettings({
  'customRanking': ['desc(followers)']
}).then(() => {
  // done
});

index.setSettings({
  searchableAttributes: [
    'lastname',
    'firstname',
    'company'
    ]
}).then(() => {
  // done
});

index.setSettings({
  attributesForFaceting: [
      'searchable(city)',
      'searchable(state)',
      'searchable(followers)',
      'searchable(company)'
  ]
}).then(() => {
  // done
});