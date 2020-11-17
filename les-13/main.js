// var i = 0;
// var images = [];
// var time = 3000;
	 

// images[0] = "https://unsplash.com/photos/sXxwbzfNdR4";
// images[1] = "https://unsplash.com/photos/AJO4WvlpCzM";
// images[2] = "https://unsplash.com/photos/eTreY8QuLlU";
// images[3] = "https://unsplash.com/photos/MsgKv2yK0uY";


function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}
// window.onload=changeImg;


const img1 = "images/image1.jpg";
const img2 = "images/image2.jpg";
        
        let promise1 = new Promise((resolve, reject)=>{
            let img = document.createElement('img');

            img.addEventListener('load', (ev) => {
                    resolve(img);
                });
            img.addEventListener('error', (err) => {
                    console.log('Image 1 is NOT loaded');
                    reject(err);
                });
            img.src = "images/image1.jpg";
        });
        
        let promise2 = new Promise((resolve, reject)=>{
            let img = document.createElement('img');

            img.addEventListener('load', (ev) => {
                    resolve(img);
                });
            img.addEventListener('error', (err) => {
                    console.log('Image 2 is NOT loaded');
                    reject(err);
                });
            img.src = "images/image2.jpg";
        });
        
        Promise.all([promise1, promise2]).then((array)=>{
            console.log('Both images are loaded');
        })
        .catch((err)=>{
            console.log('Something went wrong')
        })
        