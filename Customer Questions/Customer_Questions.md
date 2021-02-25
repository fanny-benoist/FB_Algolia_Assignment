# Table of contents
* [Question 1](#question-1)
* [Question 2](#question-2)
* [Question 3](#question-3)

## Question 1: 
> Hello,
>
> I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
>
> Records
> Indexing
> I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."
>
> Cheers, George

### Answer Q1:
> Hi George,
>
> Thank you for reaching out to us!
>
> Sure, let me help you with that.
> 
> - An **index** is the place where the data used by a search engine is stored.
>
>   It is the equivalent for search of what a “table” is for a database. Unlike a database table, an index is optimized for search operations.
>
>
> - A **record** is an object you add to an index and want to search for. It can contain any number of attributes.
>
>   Here is an example of a record, formatted in JSON:
>
>   ```JSON
>    Copy
>    {
    >    "name": "Iphone 6 64Gb",
    >    "brand": "Apple",
    >    "color": "Gold",
    >    "categories": ["smartphone", "phone", "electronics"],
    >    "price": 789
    >    }
    >    ```
>
> - Regarding the **Custom Ranking** field, it accepts any type of numerical or boolean value that represents the relative relevance of your records.
>
>   The attribute type can be a raw value like the number of sales, views, or likes. The field can also be a computed value such as a popularity score that you calculated before adding the record to Algolia.
> 
>   What you set as your customRanking depends on your use case and what data you have available. Some retail metrics commonly used in customRanking include sales rank, stock levels, free shipping (boolean), on sale (boolean), and rating. In media, publish date (as a timestamp), page views, and likes are frequently used.
>   You can visit the [Algolia’s ranking strategy](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/#algolias-ranking-strategy) if you want more information about the Custom Ranking field.
>
> Please let me know if you have any other questions.
> 
> Cheers,
> 
>
>
> **Fanny Benoist, Solutions Engineer EMEA**
>
> <fanny.benoist@algolia.com>
***
## Question 2: 
> Hello,
> 
> Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.
> 
> Regards, Matt


### Answer Q2

> Hi Matt,
>   
> Thank you for sharing, all feedbacks are very useful to us to improve our product. 
>
> I can see how this can be inconvenient for you but Algolia's dashboard is not designed to be a complete graphical interface on top of the API, it's mostly here for convenience, understanding and testing purposes, not complete management of the data.
>
> As soon as you start being limited by the dashboard, you should probably write a small script to achieve what you're trying to do.
>
> For instance, if you want to delete an index and all its settings, including links to its replicas, you can call the [DELETE INDEX API](https://www.algolia.com/doc/api-reference/api-methods/delete-index/#examples).
>
>   Here's an example of code in JavaScript to delete an index by name:
>
>   ```JS
>        index.delete().then(() => {
>        // done
>        }); 
> ```
>
> Please feel free to ask me if you have a question or if you have others suggestions.
>
> Regards,
>
> **Fanny Benoist, Solutions Engineer EMEA**
>
> <fanny.benoist@algolia.com>

***
## Question 3: 
> Hi,
> 
> I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?
> 
> Regards, Leo



### Answer Q3

> Hi Leo,
>
> Implementing Algolia is seamless and pretty straightforward. The implementation process can be broken down into a 4-step process :
>   1. **Indexing Data**
>
>        Send your data to Algolia - along with CSV upload and using the Algolia crawler, the most common way to do that is to use one of our [API client](https://www.algolia.com/doc/guides/getting-started/quick-start/tutorials/quick-start-with-the-api-client/javascript/?client=javascript#initialize-the-client) available in many different languages. You just need to connect your application, select your index, and send your data to Algolia in JSON format. 
>    
>   2. **Configure Relevance**
>
>        Algolia provides many ways to configure your index and fine-tune your overall index relevancy. The most important settings to configure are the searchable attributes and the custom ranking attributes to get started. Beyond these, Algolia has pre-set many sensible defaults that should work for most use cases. However, you may find your data set requires further configuration tweaking.
>
>   3. **Build the search UI**
>
>        The development work for this step can be more or less long depending on what type of user experience you want to create for your website. You can use one of our [InstandSearch librairy](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/) that provides fully customisable front-end widgets that you can quickly assemble to your unique search interface. Again, the InstantSearch librairy is available in many frameworks.
>
>   4. **Iterating using Algolia Analytics**
>
>       You can iterate on your implementation by making use of [Algolia’s out-of-the-box analytics](https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/out-of-the-box-analytics/) or implementing [Click and Conversion Analytics](https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-and-conversion-analytics/) to get insight of your search performance and improve it according to those data. You can also use our more advanced features like [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing/), [Personalization](https://www.algolia.com/doc/guides/personalization/what-is-personalization/), and [Dynamic Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking/).
>
>   Following these 4 steps will make you get a great search experience for your website. You can follow this [tutorial](https://www.algolia.com/doc/guides/getting-started/quick-start/tutorials/quick-start-with-the-api-client/javascript/?client=javascript) to get started using our API client (you can select your language preference on the right side of the webpage).
>
> Moreover, to discover the full potential of Algolia, you can check our complete [documentation](https://www.algolia.com/doc/).
>
> Please let me know if you have any other questions.
>
> Regards,
>
> **Fanny Benoist, Solutions Engineer EMEA**
>
> <fanny.benoist@algolia.com>