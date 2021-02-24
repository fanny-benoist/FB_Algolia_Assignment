
// Replace with your own values
const searchClient = algoliasearch(
    'XR3Z76W57K',
    '5bb639aca05aa1c8aedfd5ea24fac046' // search only API key, not admin API key
  );
  
  const search = instantsearch({
    indexName: 'contact',
    searchClient,
    routing: true,
  });
  
  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 50,
    })
  ]);
  
  /*
  search.addWidgets([
  instantsearch.widgets.refinementList({
    container: document.querySelector('#company'),
    attribute: 'company',
  })
]
);


search.addWidgets([
    instantsearch.widgets.refinementList({
      container: document.querySelector('#city'),
      attribute: 'city',
      templates: {
          header: 'Cities'
        }
    })
  ]);
  */


  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
      placeholder: 'Search for contacts',
    })
  ]);
  
  search.addWidgets([
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: document.getElementById('hit-template').innerHTML,
        empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
      },
    })
  ]);

 search.addWidget(
    instantsearch.widgets.stats({
      container: "#stats",
      templates: {
        body(hit) {
          return `<span role="img" aria-label="emoji">⚡️</span> <strong>${hit.nbHits}</strong> results found ${
            hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
          } in <strong>${hit.processingTimeMS}ms</strong>`;
        }
      }
    })
  );


  search.addWidget(
    instantsearch.widgets.pagination({
      container: "#pagination"
    })
  );
  
  search.start();
  