// For the default version
const algoliasearch = require('algoliasearch');


const client = algoliasearch(
  'XR3Z76W57K',
  '9d3a8945c39c0e97bb33a1c9934c9367'
);

const index = client.initIndex('contact');

const contactsJSON = require("./contact_dataset.json");
index.saveObjects(contactsJSON, {
    autoGenerateObjectIDIfNotExist: true
  }).then(({ objectIDs }) => {
    console.log(objectIDs);
  });

  index.setSettings({
    'customRanking': ['desc(followers)']
  }).then(() => {
    // done
  });

  index.setSettings({
    searchableAttributes: [
      'lastname',
      'firstname',
      'company',
      'email',
      'city',
      'address'
    ]
  }).then(() => {
    // done
  });

index.setSettings({
    attributesForFaceting: [
        'searchable(city)',
        'searchable(state)',
        'searchable(followers)'
    ]
  }).then(() => {
    // done
  });