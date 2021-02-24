
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

search.addWidgets([
instantsearch.widgets.refinementList({
  container: document.querySelector('#state'),
  attribute: 'state',
  searchable: true,
  searchablePlaceholder: 'Search for a state',
  limit: 5,
  showMore: true
})
]
);

search.addWidgets([
  instantsearch.widgets.refinementList({
    container: document.querySelector('#city'),
    attribute: 'city',
    searchable: true,
    searchablePlaceholder: 'Search for a city',
    limit: 5,
    showMore: true
  })
]);

search.addWidgets([
  instantsearch.widgets.refinementList({
    container: document.querySelector('#company'),
    attribute: 'company',
    searchable: true,
    searchablePlaceholder: 'Search for a company',
    limit: 5,
    sortBy: ['name:asc'],
    showMore: true
  })
]);

search.addWidgets([
  instantsearch.widgets.rangeSlider({
    container: document.querySelector('#followers'),
    attribute: 'followers',
    min: 10,
    max: 10000,
    step: 10,
    pips: true,
  })
]
);

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
  instantsearch.widgets.hitsPerPage({
    container: '#hits-per-page',
    items: [
      { label: '16 contacts per page', value: 16, default: true },
      { label: '26 contacts per page', value: 26 },
    ]
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
);

search.start();
