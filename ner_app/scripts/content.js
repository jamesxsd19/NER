const article = document.querySelector("article");
console.log(document.body)
console.log(document.body.textContent)
// `document.querySelector` may return null if the selector doesn't match anything.

    const text = document.body.textContent;
    console.log(text)
    console.log("hi")
    var url = "http://127.0.0.1:8000" + '/get_ner/?topic='+ encodeURIComponent(text) ;
    fetch(url)
        			.then(response => response.json())
                    .then((data)=> {
                        data["summary"].forEach(elems => {
                            
                            const root = document.querySelectorAll('p');

                            const colors = ["red", "purple", "blue", "green", "orange"];
                            root.forEach(par =>{
                                console.log(par)
                                par.innerHTML = par.innerHTML.replace(
                                    // /(^|<\/?[^>]+>|\s+)([^\s<]+)/g, 
                                    elems[0],
                                    (match) => {
                                      let color = "black";
                                      if (elems[1] == 'ORG') {
                                        color = colors[0];
                                      } else if (elems[1] == 'DATE') {
                                        color = colors[1];
                                      } else if (elems[1] == 'PERSON') {
                                        color = colors[2];
                                      } else if (elems[1] == 'TIME') {
                                        color = colors[3];
                                      } else if (elems[1] == 'GPE') {
                                        color = colors[4];
                                      } 
                                      
                                      return ` <span style="color: ${color}">${match}</span>`
                                    }
                                  );
                            });
                        });
                        
                    })
                    // .then(console.log(response))
        			// .then(response => sendResponse({farewell: response}))
        			.catch(error => console.log(error))
    console.log("hiiii")
    const root = document.querySelectorAll('p');
    const colors = ["red", "purple", "blue"];

    root.forEach(par =>{
        par.innerHTML = par.innerHTML.replace(
            // /(^|<\/?[^>]+>|\s+)([^\s<]+)/g, 
            'Messi',
            (match) => {
              const color = colors[0];
              return ` <span style="color: ${color}">${match}</span>`
            }
          );
    });
    
      
    // function workFunction(request, sender, sendResponse) {
            
    //     			console.log("HI")
    //     			var url = serverhost + '/get_ner/?topic='+ encodeURIComponent(text) ;
                    
    //     			console.log(url);
                    
    //     			//var url = "http://127.0.0.1:8000/wiki/get_wiki_summary/?topic=%22COVID19%22"	
    //     			fetch(url)
    //     			.then(response => response.json())
    //     			.then(response => sendResponse({farewell: response}))
    //     			.catch(error => console.log(error))
                        
    //     			return true;  // Will respond asynchronously.
                  
    //     }
    
        
  /**
   * Regular expression to find all "words" in a string.
   *
   * Here, a "word" is a sequence of one or more non-whitespace characters in a row. We don't use the
   * regular expression character class "\w" to match against "word characters" because it only
   * matches against the Latin alphabet. Instead, we match against any sequence of characters that
   * *are not* a whitespace characters. See the below link for more information.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   */
//   const wordMatchRegExp = /[^\s]+/g;
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
//   (date ?? heading).insertAdjacentElement("afterend", badge);

