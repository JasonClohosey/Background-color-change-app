var backgrounds = [
"red", "white", "blue", "green", "brown", "yellow", "pink", "black", "orange"
];

// let randomColor = backgrounds[Math.floor(Math.random() * backgrounds.length)];
// console.log("this is my random color ", randomColor);




    document.getElementById("color-button").addEventListener("click", function() {

            randomColor = backgrounds[Math.floor(Math.random() * backgrounds.length)];
            console.log(randomColor);

            document.body.style.background = randomColor; 
        
    });
