//IMMAGE ARRAY

let images = ["https://images.unsplash.com/photo-1470116109808-c71d8bd6f4a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1470117144297-a67b448680bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1477044545293-98b9221de30a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1478105069489-aca3e3fedcf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1470117144297-a67b448680bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1478105069489-aca3e3fedcf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1470117144297-a67b448680bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

//FETCH IMAGES

function getImage(url) {
    return new Promise(function(resolve, reject){
        let img = new Image();
        img.onload = function() {
            resolve(url);
            console.log('Image '+url+' is loaded!');
        }
        img.onerror = function() {
            reject(url);
            console.log('Error loading image '+img);
        }
        img.src = url;
    })
}

//PROMISE.ALL ON IMAGE ARRAY

let promises = images.map(getImage);

Promise.all(promises)
    .then(urls =>
        {
            for (let i = 0; i < urls.length; i++)
                {
                    let name = document.getElementById('slider');
                    name.innerHTML += ' <div class="slider__item" id="slider-item"><div class="slider__card"><img src="'+urls[i]+'"></div></div>';
                    console.log('All images are successfully loaded!')
                }
        })
    .catch(urls =>
            {
                console.log("Error fetching (some) image(s): " + urls);
            });