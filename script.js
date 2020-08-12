let body = document.querySelector("body");
let textboxRef = document.getElementById("food_input");
let buttonRef = document.querySelector("button");
let imageDivRef = document.getElementById("gazpacho_image");
let foodNameRef = document.getElementById("food_name");
let divRef = document.getElementById("search")
let divRef2 = document.getElementById("about");
let divRef3 = document.getElementById("cuisine");
let divRef4 = document.getElementById("rec");
let imageRef = document.getElementById("matzo")
let imageRef2 = document.getElementById("curry")
let foodInfoDiv = document.getElementById("french")
let foodInfoDiv2 = document.getElementById("african")
let foodInfoDIv3 = document.getElementById("recipe")
let  foodInfoDiv4 = document.getElementById("serve");
let  instaInfoDiv = document.getElementById("insta_img");

// show contentDiv
body.style.backgroundImage = 'black';
let userInput;
buttonRef.onclick = function(event){
    //prevent the page from reloading
    event.preventDefault();

    userInput = textboxRef.value;
    console.log(userInput);

    if(userInput == "french"){

        //show food info
        foodInfoDiv.innerHTML = "Skinny Kale Tomato Quiche";
        foodInfoDiv2.innerHTML = "Ready in Minutes: 45 mins";
        foodInfoDIv3.innerHTML = "Recipe: Preheat your oven to 350 degrees Fahrenheit. In a large skillet heat olive oil over medium heat.Add onions and garlic, cooking until onions are soft and translucent, stirring frequently (about 2 to 3 minutes). Add chopped kale, roasted red peppers and mushrooms. Stir and saute until the kale is wilted (about 3 to 4 minutes). Set aside kale mixture. Spray a 9 inch pie or tart dish with cooking spray. Carefully unroll pie crust and place in dish, pressing bottom and sides.In a large bowl, whisk eggs, milk and pepper until blended.Place kale mixture in bottom of pie crust first, then sprinkle evenly with cheese. Pour egg mixture evenly over cheese and vegetables.Bake for approximately 40 minutes, or until center is firm and toothpick inserted comes out clean."; 
        foodInfoDiv4.innerHTML = "Servings: 1";
        // screenImage.src = "images/love(2).jpg";
    }
    else if(userInput == "european"){
        foodInfoDiv.innerHTML = "Vegan Moussaka";
        foodInfoDiv2.innerHTML = "Ready in Minutes: 45 mins";
        foodInfoDIv3.innerHTML = "Recipe: Preheat oven to 390° F/200° C and prepare two baking sheets with parchment paper.Slice each eggplant lengthwise into 4 pieces. Cut the potatoes into 1/2 inch (1 cm) thick slices. Arrange all slices in a single layer on the baking sheets and brush lightly with some olive oil, sprinkle with salt & pepper. Bake in the oven for about 20 minutes or until lightly brown. Meanwhile, heat 1 tbsp olive oil in a skillet over medium heat. Add the onion & garlic and sauté for about 4-5 minutes. Add the tomato purée, chopped tomatoes, all spices, and salt & pepper to taste. Finally, add the cooked lentils and let simmer on low heat for about 5 minutes.For the béchamel sauce, add the plant-based milk to a pan/skillet. Mix in the cornstarch, nutritional yeast, salt and pepper, and whisk. Add the vegan butter and bring the mixture to a boil. Let simmer on low heat for a few minutes until it thickens. Whisk continuously. Remove from heat. Check the recipe notes if you don't want to make the béchamel sauce. Grease a 13x9 (33x23 cm) or larger baking dish and arrange half of the potato and eggplant slices on the bottom of the baking dish. Top with the lentil mixture, followed by the remaining potato/eggplant slices (see photo above in the blog post). Pour the béchamel sauce on top and spread evenly. Add vegan cheese to taste (optional).Bake in the oven for about 30 minutes or until golden brown. Garnish with fresh herbs. Enjoy!"; 
        foodInfoDiv4.innerHTML = "Servings: 12";
    }
    else if(userInput == "american"){
       
        foodInfoDiv.innerHTML = "Spicy Three-Bean and Corn Chili";
        foodInfoDiv2.innerHTML = "Ready in Minutes: 45 mins";
        foodInfoDIv3.innerHTML = "Ingredients and Recipe: ⅔ cup dried chickpeas, soaked overnight, ⅔ cup dried black beans, soaked overnight, ⅔ cup dried pinto beans, soaked overnight, 2 tbsp olive oil, 1 onion, cut into ½-inch pieces, 1 medium sweet potato, peeled and cut into ½-inch pieces, 2 garlic cloves, minced, 1 (15 oz) can corn kernels, drained, 4 oz minced mild green chiles, 28 oz canned diced tomatoes, 1 tbsp sherry vinegar, 2 tbsp brown sugar, 1 tbsp ancho chili powder, 1 tbsp smoked paprika, 2 tsp cocoa powder, ½ tsp freshly ground white peppersalt, to taste.Instructions: If using dried beans, put in a large pot and cover with salted water. Bring to a boil, then cover and simmer until tender, about an hour. Remove from the heat and drain, reserving the cooking liquid. In a large pot, heat the olive oil over medium heat. Add in the onion, sweet potato and garlic. Cook over medium heat, stirring occasionally for 8 minutes, or until the vegetables are tender. Add the drained beans, corn, chiles, and tomato to the pot. Stir to combine. Add in 4 cups of the bean liquid and bring to a simmer. Stir in the vinegar, brown sugar, chili powder, smoked paprika, and white pepper. Simmer for 30 minutes, stirring occasionally, or until the mixture thickens a bit. Season to taste. Serve topped with cheese or sour cream."
        foodInfoDiv4.innerHTML = "Servings: 6";
        
    }
    else if(userInput == "african"){
       
        foodInfoDiv.innerHTML = "African Kale Yam Soup";
        foodInfoDiv2.innerHTML = "Ready in Minutes: 20 mins";
        foodInfoDIv3.innerHTML = "Recipe: Slice red onion into thin slices. Line a medium pot with 1/4 cup of water and cook onions over high heat until translucent, about 3 minutes. Add broth, yam, 3/4 cup water and bring to a boil. Once boiling, reduce to medium and cook until potatoes are almost fork tender, about 3 minutes. Immediately add kale and remaining ingredients and cook, stirring frequently, until kale is dark green and soft, about 3 more minutes. Set aside for 5-10 minutes, allowing flavors to merge."
        foodInfoDiv4.innerHTML = "Servings: 2";
    }

    // else if(userInput == "west indian"){
    //     foodInfoDiv.innerHTML = ;
    //     foodInfoDiv.innerHTML = ;
    //     foodInfoDiv.innerHTML = ;
    //     foodInfoDiv.innerHTML =  ;
    // }

    const apiKEY = "34c995a4436946cfaf2db2c13af2d4d2" // API KEY GOES HERE
    const BASE_URL = "https://api.spoonacular.com/recipes/search?apiKey="
    fetch(BASE_URL + apiKEY + "&number=5&cuisine=" + userInput + "&query=")
        .then(response => response.json())
        .then(data => {
            let newData = data.results
            console.log(newData);
            
            let newImage = document.createElement("img");
            
            newImage.src = "images/" + newData[0].image;
            console.log(newImage);
            
            foodNameRef.appendChild(newImage);
            newImage.style.width = "150px";
            //output food name to the screen
            // foodNameRef.innerHTML = newData.name;
        });
}

divRef.onmouseover = function() {
    divRef.style.color = "black";
    
  
}
divRef.onmouseout = function() {
    divRef.style.color = "white";
  
}
divRef2.onmouseover = function() {
    divRef2.style.color = "black";
    
  
}
divRef2.onmouseout = function() {
    divRef2.style.color = "white";
  
}
divRef3.onmouseover = function() {
    divRef3.style.color = "black";
    
  
}
divRef3.onmouseout = function() {
    divRef3.style.color = "white";
  
}
divRef4.onmouseover = function() {
    divRef4.style.color = "black";
    
  
}
divRef4.onmouseout = function() {
    divRef4.style.color = "white";
  
}
imageRef.onmouseover = function() {
    imageRef.style.opacity = "0.8";
  
}
imageRef.onmouseout = function() {
    imageRef.style.opacity = "1.0";
  
}
imageRef2.onmouseover = function() {
    imageRef2.style.opacity = "0.8";
  
}
imageRef2.onmouseout = function() {
    imageRef2.style.opacity = "1.0";
}
instaInfoDiv.onmouseover = function() {
    instaInfoDiv.style.opacity = "0.8";
    instaInfoDiv.style.width = "110px";
}
instaInfoDiv.onmouseout = function() {
    instaInfoDiv.style.opacity = "1.0";
    instaInfoDiv.style.width = "100px";
}
