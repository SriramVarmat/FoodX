document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";

let navbar = document.createElement("div");
    navbar.style.height = "100px";
    navbar.style.width = "fit-content";
    navbar.style.display = "flex";
    navbar.style.alignItems = "center";
    document.body.append(navbar);
  
    let logo = document.createElement("div");
    logo.style.width ="150px";
    logo.style.height ="150px";
    navbar.append(logo);

    let  logoimg = document.createElement("img");
    logoimg.src = "Orange Modern Online Delivery Logo.png";
    logoimg.style.width = "150px";
    logoimg.style.height = "150px";
    logo.append(logoimg);

   
    let ul = document.createElement("ul");
    ul.style.padding = "0px";
    ul.style.display = "flex";
    ul.style.marginLeft = "850px";
    navbar.append(ul);

    let li1 = document.createElement("li");
    li1.style.listStyle = "none";
    li1.style.fontSize = "1.2rem";
    ul.append(li1);

    let a1 = document.createElement("a");
    a1.innerHTML = 'SEARCH';
    a1.style.color = "black";
    a1.style.textDecoration = "none";
    a1.style.padding = "20px 15px";
    a1.style.borderRadius = "20px";
    a1.style.cursor = "pointer";
    a1.style.textAlign = "center";
    li1.append(a1);


    let li2 = document.createElement("li");
    li2.style.listStyle = "none";
    li2.style.fontSize = "1.2rem";
    ul.append(li2);

    let a2 = document.createElement("a"); 
    a2.innerHTML = 'OFFERS';
    a2.style.color = "black";
    
    a2.style.textDecoration = "none";
    a2.style.padding = "20px 15px";
    a2.style.borderRadius = "20px";
    a2.style.cursor = "pointer";
    a2.style.textAlign = "center";
    li2.append(a2);

    
    let li3 = document.createElement("li");
    li3.style.listStyle = "none";
    li3.style.fontSize = "1.2rem";
    ul.append(li3);

    let a3 = document.createElement("a");
    a3.innerHTML = 'HELP';
    a3.style.color = "black";
    a3.style.textDecoration = "none";
    a3.style.padding = "20px 15px";
    a3.style.borderRadius = "20px";
    a3.style.cursor = "pointer";
    a3.style.textAlign = "center";
    li3.append(a3);

    

    let li4 = document.createElement("li");
    li4.style.listStyle = "none";
    li4.style.fontSize = "1.2rem";
    ul.append(li4);

   

    let a4 = document.createElement("a");
    a4.innerHTML = 'SIGN-IN';
    a4.style.color = "black";
    a4.style.textDecoration = "none";
    a4.style.padding = "20px 15px";
    a4.style.borderRadius = "20px";
    a4.style.cursor = "pointer";
    a4.style.textAlign = "center";
    li4.append(a4);

    let li5 = document.createElement("li");
    li5.style.listStyle = "none";
    li5.style.fontSize = "1.2rem";
    ul.append(li5);

   

    let a5 = document.createElement("a");
    a5.innerHTML = 'CART';
    a5.style.color = "black";
    a5.style.textDecoration = "none";
    a5.style.padding = "20px 15px";
    a5.style.borderRadius = "20px";
    a5.style.cursor = "pointer";
    a5.style.textAlign = "center";
    li5.append(a5);









    
    let divstyle2 = document.createElement("div");
    divstyle2.style.display = "flex";
    divstyle2.style.alignItems = "center";
    divstyle2.style.justifyContent = "center";
    divstyle2.style.backgroundColor = "rgb(22, 8, 57)";
    divstyle2.style.height = "360px"
    document.body.append(divstyle2);

    
    let divstyle3 = document.createElement("div");
    divstyle3.style.width = "fit-content";
    divstyle3.style.height = "fit-content";
    // divstyle3.style.margin = "10px 40px";
    divstyle3.onmouseenter = enter5;
    divstyle3.onmouseleave = leave5;
    divstyle2.append(divstyle3);

    function enter5(){
        divstyle3.style.transform = "scale(1.05)";
    }

    function leave5(){
        divstyle3.style.transform = "";
    }


    let image1 = document.createElement("img");
    image1.src = "ehchczipeejs7qrk82u6.jpeg";
    image1.style.height = "280px";
    image1.style.width = "300px";
    image1.style.display = "block";
    image1.style.margin = "20px 50px 0px 50px";
    // image1.style.marginLeft = "auto";
    // image1.style.marginRight = "auto";
    // image1.style.borderRadius = "10px";
    image1.style.objectFit = "contain";

    divstyle3.append(image1)


    let divstyle4 = document.createElement("div");
    divstyle4.style.width = "fit-content";
    divstyle4.style.height = "fit-content";
    // divstyle4.style.margin = "10px 40px";
    divstyle2.append(divstyle4);



    let image2 = document.createElement("img");
    image2.src = "awurei8ypqkafoqay9ym.jpeg";
    image2.style.height = "280px";
    image2.style.width = "300px";
    image2.style.display = "block";
    image2.style.margin = "20px 50px 0px 50px";
    // image2.style.marginLeft = "auto";
    // image2.style.marginRight = "auto";
    // image1.style.borderRadius = "10px";
    image2.style.objectFit = "contain";

    divstyle4.append(image2)



    let divstyle5 = document.createElement("div");
    divstyle5.style.width = "fit-content";
    divstyle5.style.height = "fit-content";
    // divstyle4.style.margin = "10px 40px";
    divstyle2.append(divstyle5);



    let image3 = document.createElement("img");
    image3.src = "Screenshot 2022-09-17 102721.png";
    image3.style.height = "280px";
    image3.style.width = "300px";
    image3.style.display = "block";
    image3.style.margin = "20px 50px 0px 50px";
    // image2.style.marginLeft = "auto";
    // image2.style.marginRight = "auto";
    // image1.style.borderRadius = "10px";
    image3.style.objectFit = "contain";

    divstyle5.append(image3)


    let divstyle6 = document.createElement("div");
    divstyle6.style.width = "fit-content";
    divstyle6.style.height = "fit-content";
    // divstyle4.style.margin = "10px 40px";
    divstyle2.append(divstyle6);



    let image4 = document.createElement("img");
    image4.src = "Screenshot 2022-09-17 102801.png";
    image4.style.height = "280px";
    image4.style.width = "300px";
    image4.style.display = "block";
    image4.style.margin = "20px 50px 0px 50px";
    // image2.style.marginLeft = "auto";
    // image2.style.marginRight = "auto";
    // image1.style.borderRadius = "10px";
    image4.style.objectFit = "contain";

    divstyle6.append(image4)




    