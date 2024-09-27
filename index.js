// let endpoint = `https://newsapi.org/v2/everything?&apiKey=55d7ff614b734d2fbc06e4d3748d1e3c`

// let url = ``

// document.addEventListener("DOMContentLoaded", function () {
//   fetch(
//     "https://newsapi.org/v2/everything?q=medicine&apiKey=55d7ff614b734d2fbc06e4d3748d1e3c&pageSize=4"
//   )
//     .then(function (response) {
//       console.log(response.json());
//       return response.json();
//     })
//     .then(function (data) {
//       // console.table(data.articles);
//       for (const article of data.articles) {
//         console.log(article);

//         const articleDiv = document.createElement("div");
//         articleDiv.className = "article-card";

//         const articleCardTop = document.createElement("div");
//         articleCardTop.className = "article-card-top";

//         const articleImg = document.createElement("img");
//         articleImg.src = article.urlToImage; //articleImg.setAttribute ('src', article.urlImage);
//         articleImg.alt = article.title;
//         articleImg.className = "article-img"; // articleImg.classList.add('article-img');
//         articleCardTop.appendChild(articleImg);

//         const articleCardBottom = document.createElement("div");
//         articleCardBottom.className = "article-card-bottom";

//         const description = document.createElement("div");
//         description.className = "desc";

//         const link = document.createElement("a");
//         link.href = article.url;

//         const articleH1 = document.createElement("h1");
//         articleH1.textContent = article.title;

//         link.appendChild(articleH1);

//         description.appendChild(link);

//         const articlePara = document.createElement("p");
//         articlePara.textContent = article.content;
//         description.appendChild(articlePara);

//         articleCardBottom.appendChild(description);
//         articleDiv.appendChild(articleCardTop);
//         articleDiv.appendChild(articleCardBottom);

//         document.querySelector("#articles").appendChild(articleDiv);
//       }
//     });
// });

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=medicine&apiKey=4bf0f77052e54736b797fb233d36b860&pageSize=4"
    );
    console.log(response);

    const data = await response.json();
    console.log(data);
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
  } catch (error) {
    console.log(error);
  }
};
document.addEventListener("DOMContentLoaded", fetchData);
