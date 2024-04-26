const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
async function fetchNews(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        showNews(data.articles);
    }catch(error){
        console.error('Error occured',error);
    }
}
function showNews(d){
    const n = document.querySelector('#news');
    
    for (const article of d) {
        const articleDiv = document.createElement('div');
        articleDiv.setAttribute('class', "card mb-5");

        const img = document.createElement('img');
        img.setAttribute('src', article.urlToImage);
        img.setAttribute('class', 'card-img-top');
        articleDiv.appendChild(img);

        const cBody = document.createElement('div');
        cBody.setAttribute('class', 'card-body');
        articleDiv.appendChild(cBody);

        const title = document.createElement('h4');
        title.textContent = article.title;
        cBody.appendChild(title);

        const date = document.createElement('h5');
        date.textContent = article.publishedAt;
        cBody.appendChild(date);

        const description = document.createElement('p');
        description.textContent = article.description;
        cBody.appendChild(description);

        const aURL = document.createElement('a');
        aURL.setAttribute('href',article.url);
        aURL.setAttribute('class', 'btn btn-primary');
        aURL.textContent = 'Link to article';
        cBody.appendChild(aURL);

        n.appendChild(articleDiv);
    }

}
fetchNews();