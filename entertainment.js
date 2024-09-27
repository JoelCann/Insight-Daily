fetch(
  "https://newsapi.org/v2/everything?q=entertainment&apiKey=4bf0f77052e54736b797fb233d36b860&pageSize=30"
)
  .then(function (response) {
    console.log(response.body);
    return response.json();
  })
  .then(function (data) {
    // console.table(data.articles);
    for (const article of data.articles) {
      console.log(article);

      const articleDiv = document.createElement("div");
      articleDiv.className = "article-card";

      const articleCardTop = document.createElement("div");
      articleCardTop.className = "article-card-top";

      const articleImg = document.createElement("img");
      articleImg.src = article.urlToImage; //articleImg.setAttribute ('src', article.urlImage);
      articleImg.alt = article.title;
      articleImg.className = "article-img"; // articleImg.classList.add('article-img');
      articleCardTop.appendChild(articleImg);

      const articleCardBottom = document.createElement("div");
      articleCardBottom.className = "article-card-bottom";

      const description = document.createElement("div");
      description.className = "desc";

      const link = document.createElement("a");
      link.href = article.url;

      const articleH1 = document.createElement("h1");
      articleH1.textContent = article.title;

      link.appendChild(articleH1);

      description.appendChild(link);

      const articlePara = document.createElement("p");
      articlePara.textContent = article.content;
      description.appendChild(articlePara);

      articleCardBottom.appendChild(description);
      articleDiv.appendChild(articleCardTop);
      articleDiv.appendChild(articleCardBottom);

      document.querySelector("#articles-fp").appendChild(articleDiv);
    }
  });
fetch(
  "https://newsapi.org/v2/everything?q=entertainment&apiKey=4bf0f77052e54736b797fb233d36b860&pageSize=30"
)
  .then(function (response) {
    console.log(response.body);
    return response.json();
  })
  .then(function (data) {
    // console.table(data.articles);
    for (const article of data.articles) {
      console.log(article);

      const articleDiv = document.createElement("div");
      articleDiv.className = "article-card";

      const articleCardTop = document.createElement("div");
      articleCardTop.className = "article-card-top";

      const articleImg = document.createElement("img");
      articleImg.src = article.urlToImage; //articleImg.setAttribute ('src', article.urlImage);
      articleImg.alt = article.title;
      articleImg.className = "article-img"; // articleImg.classList.add('article-img');
      articleCardTop.appendChild(articleImg);

      const articleCardBottom = document.createElement("div");
      articleCardBottom.className = "article-card-bottom";

      const description = document.createElement("div");
      description.className = "desc";

      const link = document.createElement("a");
      link.href = article.url;

      const articleH1 = document.createElement("h1");
      articleH1.textContent = article.title;

      link.appendChild(articleH1);

      description.appendChild(link);

      const articlePara = document.createElement("p");
      articlePara.textContent = article.content;
      description.appendChild(articlePara);

      articleCardBottom.appendChild(description);
      articleDiv.appendChild(articleCardTop);
      articleDiv.appendChild(articleCardBottom);

      document.querySelector("#articles").appendChild(articleDiv);
    }
  });
