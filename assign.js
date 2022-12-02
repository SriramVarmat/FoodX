document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";

document.body.style.backgroundColor = "rgb(245, 237, 227)";
let bg = document.createElement("div");

bg.style.width = "100%";
bg.style.height = "700px";
bg.style.background = "url('../Backgr\ burger.jpg') no-repeat center center/cover";
bg.style.opacity = "0.9";
bg.style.marginBottom = "30px";

document.body.append(bg);

async function load() {
    let request = new Request("assign.json");
    let response = await fetch(request);
  
    let json_obj = await response.json();

    let obj = new japesh();

    obj.CreateNavbar(json_obj);
    obj.CreateOurservices(json_obj);
    obj.CreateAboutus(json_obj);
    obj.CreateWhyorderfromus(json_obj);
    obj.CreateContactus(json_obj); 

    
  }

  

class japesh{






                                      //  Nav-Bar section






 CreateNavbar(json_obj) {
    let header = document.createElement("div");
    header.style.boxShadow = "5px 5px 20px rgba(0,0,0,0.3)";
    // header.style.backdrop-filter = "blur(5px)";
    header.style.position = "sticky";
    header.style.top = "0";
    bg.append(header);

    let navbar = document.createElement("div");
    navbar.id = 'home';
    navbar.style.height = "100px";
    navbar.style.width = "fit-content";
    navbar.style.display = "flex";
    navbar.style.alignItems = "center";
    header.append(navbar);
  
    let logo = document.createElement("div");
    logo.style.width ="150px";
    logo.style.height ="150px";
    navbar.append(logo);

    let  logoimg = document.createElement("img");
    logoimg.src = json_obj.logoimg1;
    logoimg.style.width = "150px";
    logoimg.style.height = "150px";
    logo.append(logoimg);

   
    let ul = document.createElement("ul");
    ul.style.padding = "0px";
    ul.style.display = "flex";
    ul.style.marginLeft = "20px";
    navbar.append(ul);

    let li1 = document.createElement("li");
    li1.style.listStyle = "none";
    li1.style.fontSize = "1.5rem";
    ul.append(li1);

    let a1 = document.createElement("a");
    a1.innerHTML = json_obj.nav1;
    a1.href = "#home";
    a1.style.color = "white";
    a1.style.textDecoration = "none";
    a1.style.padding = "3px 25px";
    a1.style.borderRadius = "20px";
    a1.onmouseenter = enter1;
    a1.onmouseleave = leave1;
    a1.style.cursor = "pointer";
    a1.style.transition = "all ease-in-out 500ms";
    li1.append(a1);

    function enter1() {
        a1.style.backgroundColor = "white";
        a1.style.color = "black";
        
      }
    
      function leave1() {
        a1.style.backgroundColor = "";
        a1.style.color = "white";
      }

    let li2 = document.createElement("li");
    li2.style.listStyle = "none";
    li2.style.fontSize = "1.5rem";
    ul.append(li2);

    let a2 = document.createElement("a");
    a2.innerHTML = json_obj.nav2;
    a2.href = "#about"
    a2.style.color = "white";
    a2.style.textDecoration = "none";
    a2.style.padding = "3px 25px";
    a2.style.borderRadius = "20px";
    a2.onmouseenter = enter2;
    a2.onmouseleave = leave2;
    a2.style.cursor = "pointer";
    a2.style.transition = "all ease-in-out 500ms";
    li2.append(a2);

    function enter2() {
        a2.style.backgroundColor = "white";
        a2.style.color = "black";
        
      }
    
      function leave2() {
        a2.style.backgroundColor = "";
        a2.style.color = "white";
      }


    let li3 = document.createElement("li");
    li3.style.listStyle = "none";
    li3.style.fontSize = "1.5rem";
    ul.append(li3);

    let a3 = document.createElement("a");
    a3.innerHTML = json_obj.nav3;
    a3.href = "#contact";
    a3.style.color = "white";
    a3.style.textDecoration = "none";
    a3.style.padding = "3px 25px";
    a3.style.borderRadius = "20px";
    a3.onmouseenter = enter3;
    a3.onmouseleave = leave3;
    a3.style.cursor = "pointer";
    a3.style.transition = "all ease-in-out 500ms";
    li3.append(a3);

    function enter3() {
        a3.style.backgroundColor = "white";
        a3.style.color = "black";
        
      }
    
      function leave3() {
        a3.style.backgroundColor = "";
        a3.style.color = "white";
      }


    let li4 = document.createElement("li");
    li4.style.listStyle = "none";
    li4.style.fontSize = "1.5rem";
    ul.append(li4);

   

    let a4 = document.createElement("a");
    a4.innerHTML = json_obj.nav4;
    a4.href = "order online.html"
    a4.style.color = "white";
    a4.style.textDecoration = "none";
    a4.style.padding = "3px 25px";
    a4.style.borderRadius = "20px";
    a4.onmouseenter = enter4;
    a4.onmouseleave = leave4;
    a4.style.cursor = "pointer";
    a4.style.transition = "all ease-in-out 500ms";
    li4.append(a4);

    function enter4() {
        a4.style.backgroundColor = "white";
        a4.style.color = "black";
        
      }
    
      function leave4() {
        a4.style.backgroundColor = "";
        a4.style.color = "white";
      }

    

    let a5 = document.createElement("a");
    a5.href = "login.html";
    a5.style.textDecoration = "none";
    navbar.append(a5);

    let user = document.createElement("div");
    user.style.backgroundColor = "white";
    user.style.color = "black";
    user.style.border = "none";
    user.style.outline = "none";
    user.style.cursor = "pointer";
    user.style.padding = "10px 30px";
    user.style.alignSelf = "center";
    user.style.marginLeft = "550px";
    user.style.borderRadius = "20px";
    user.style.display = "flex";
    user.style.marginRight = "15px";
    
    a5.append(user);

    user.innerHTML = json_obj.nav5;

    let a6 = document.createElement("a");
    a6.href = "sign-up.html";
    a6.style.textDecoration = "none";
    navbar.append(a6);

    let signup = document.createElement("div");
    signup.style.backgroundColor = "#095a55";
    signup.style.color = "white";
    signup.style.border = "none";
    signup.style.outline = "none";
    signup.style.cursor = "pointer";
    signup.style.padding = "10px 25px";
    signup.style.alignSelf = "center";
    signup.style.borderRadius = "20px";

    a6.append(signup);

    signup.innerHTML = json_obj.nav6

    
    let home = document.createElement("div");
    home.style.display = "flex";
    home.style.flexDirection = "column";
    home.style.paddingTop = "30px";
    home.style.paddingLeft = "140px";
    home.style.paddingRight = "800px";
    home.style.paddingBottom = "70px";
    home.style.justifyContent = "center";
    home.style.height = "300px";
    home.style.width = "fit-content";

    bg.append(home);

    let heading = document.createElement("h1");
    heading.innerHTML = json_obj.head1;
    heading.style.color = "white";
    heading.style.fontSize = "3rem";

    home.append(heading);


    let form = document.createElement("form");
    form.style.backgroundColor = "white";
    form.style.width = "500px";
    form.style.height = "55px";
    form.style.display = "flex";
    form.style.marginBottom = "39.840px";
    home.append(form);

    let input = document.createElement("input");
    input.type = "search";
    input.placeholder = "Set Your Location";
    input.style.flex = "1";
    input.style.outline = "none";
    input.style.border = "none";

    form.append(input);


    let button = document.createElement("button")
    button.type = "submit";
    button.innerHTML = json_obj.btn1;
    button.style.background = "#095a55";
    button.style.padding = "10px 10px";
    button.style.border = "none";
    button.style.outline = "none";
    button.style.color = "white";
    button.style.letterSpacing = "1px";
    button.style.cursor = "pointer";

    form.append(button);

    let btn = document.createElement("button");
    btn.style.backgroundColor = "#095a55"
    btn.style.border = "none";
    btn.style.color = "white";
    btn.style.outline = "none";
    btn.style.cursor = "pointer";
    btn.style.padding = "10px 20px";
    btn.style.alignSelf = "center";
    btn.innerHTML = json_obj.btn2;
    home.append(btn);

}






     
                                       //  Our Services section




                                       

 CreateOurservices(json_obj){

    let up = document.createElement("div");
    document.body.append(up);

    let head1 = document.createElement("h1")
    head1.innerHTML = json_obj.head2;
    head1.style.textAlign = "center";
    head1.style.fontFamily = "Cinzel Decorative";
    head1.style.fontSize = "30px";
    head1.style.textDecoration = "underline";
    head1.style.margin = "0px";
    head1.style.padding = "50px";
    
    up.append(head1);

    let divstyle2 = document.createElement("div");
    divstyle2.style.display = "flex";
    divstyle2.style.alignItems = "center";
    divstyle2.style.justifyContent = "center";
    divstyle2.style.backgroundColor = "#095a55";

    up.append(divstyle2);

    let a7 = document.createElement("a")
    a7.href = "order online.html";
    a7.style.textDecoration = "none";
    a7.style.color = "white";

    divstyle2.append(a7);

    let divstyle3 = document.createElement("div");
    divstyle3.style.width = "400px";
    divstyle3.style.height = "300px";
    divstyle3.style.margin = "10px 40px";
    divstyle3.onmouseenter = enter5;
    divstyle3.onmouseleave = leave5;
    a7.append(divstyle3);

    function enter5(){
        divstyle3.style.transform = "scale(1.05)";
    }

    function leave5(){
        divstyle3.style.transform = "";
    }


    let image1 = document.createElement("img");
    image1.src = json_obj.img1;
    image1.style.height = "200px";
    image1.style.width = "250px";
    image1.style.display = "block";
    image1.style.marginTop = "20px";
    image1.style.marginLeft = "auto";
    image1.style.marginRight = "auto";
    image1.style.borderRadius = "10px";
    image1.style.objectFit = "cover";

    divstyle3.append(image1)


    let divstyle4 = document.createElement("div")
    divstyle4.style.padding = "10px 20px";

    divstyle3.append(divstyle4);

    let head2 = document.createElement("h3");
    head2.innerHTML = json_obj.head3;
    head2.style.margin = "0px";
    head2.style.marginBottom = "5px";
    head2.style.textAlign = "center";

    divstyle4.append(head2);
  
    let cont = document.createElement("p");
    cont.innerHTML = json_obj.cont1;
    cont.style.margin = "0px";
    cont.style.textAlign = "center";

    divstyle4.append(cont);



    let a8 = document.createElement("a")
    a8.href = "dining.html";
    a8.style.textDecoration = "none";
    a8.style.color = "white";

    divstyle2.append(a8);

    let divstyle5 = document.createElement("div");
    divstyle5.style.width = "400px";
    divstyle5.style.height = "300px";
    divstyle5.style.margin = "10px 40px";
    divstyle5.onmouseenter = enter6;
    divstyle5.onmouseleave = leave6;
    a8.append(divstyle5);

    function enter6(){
        divstyle5.style.transform = "scale(1.05)";
    }

    function leave6(){
        divstyle5.style.transform = "";
    }



    let image2 = document.createElement("img");
    image2.src = json_obj.img2;
    image2.style.height = "200px";
    image2.style.width = "250px";
    image2.style.display = "block";
    image2.style.marginTop = "20px";
    image2.style.marginLeft = "auto";
    image2.style.marginRight = "auto";
    image2.style.borderRadius = "10px";
    image2.style.objectFit = "cover";

    divstyle5.append(image2);


    let divstyle6 = document.createElement("div")
    divstyle6.style.padding = "10px 20px";

    divstyle5.append(divstyle6);

    let head3 = document.createElement("h3");
    head3.innerHTML = json_obj.head4;
    head3.style.margin = "0px";
    head3.style.marginBottom = "5px";
    head3.style.textAlign = "center";

    divstyle6.append(head3);
  
    let cont1 = document.createElement("p");
    cont1.innerHTML = json_obj.cont2;
    cont1.style.margin = "0px";
    cont1.style.textAlign = "center";
    
    divstyle6.append(cont1);


}



                                     

                                        //  About Us Section
                                        







 CreateAboutus(json_obj){

    let abt = document.createElement("div");
    document.body.append(abt);

    let head4 = document.createElement("h1");
    head4.id = 'about';
    head4.style.textAlign = "center";
    head4.style.fontFamily = "Cinzel Decorative";
    head4.style.fontSize = "30px";
    head4.style.textDecoration = "underline";
    head4.style.margin = "0px";
    head4.style.padding = "50px";
    head4.innerHTML = json_obj.head5;

    abt.append(head4);


    let dmainbg = document.createElement("div");
    dmainbg.style.position = "relative";
    dmainbg.style.display = "flex";
    dmainbg.style.justifyContent = "center";
    dmainbg.style.alignItems = "center";

    abt.append(dmainbg);

    let dbackgd = document.createElement("div");
    dbackgd.style.display = "flex";
    dbackgd.style.width = "100%";
    dbackgd.style.minHeight = "100vh";

    dmainbg.append(dbackgd);


    let dbg1 = document.createElement("div");
    dbg1.style.flex = "1";
    dbg1.style.backgroundColor = "#fff38e"

    dbackgd.append(dbg1);

    let dbg2 = document.createElement("div");
    dbg2.style.flex = "1";
    dbg2.style.backgroundColor = "#095a55";

    dbackgd.append(dbg2);

   
    let dcont = document.createElement("div");
    dcont.style.width = "80%";
    dcont.style.minHeight = "70vh";
    dcont.style.position = "absolute";
    dcont.style.display = "flex";
    dcont.style.justifyContent = "center";
    dcont.style.alignItems = "center";
    dcont.style.backgroundColor = "white";
    dcont.style.padding = "20px";
    dcont.style.borderRadius = "5px";
    dcont.style.boxShadow = "15px 15px 15px rgba(45, 96, 45, 0.408)";

    dmainbg.append(dcont);

    

    let dimgcont = document.createElement("div");

    dimgcont.style.flex = "1";
    dimgcont.style.display = "flex";
    dimgcont.style.justifyContent = "center";
    dimgcont.style.alignItems = "center";
    
    dcont.append(dimgcont);

    let dimagecont = document.createElement("img");
    dimagecont.src = json_obj.img3;
    dimagecont.style.width = "500px";
    dimagecont.style.height = "500px";
    dimagecont.style.objectFit = "contain";
    dimagecont.onmouseenter = enter7;
    dimagecont.onmouseleave = leave7;
    dimgcont.append(dimagecont);

    function enter7(){
        dimagecont.style.transform = "scale(1.15)";
    }

    function leave7(){
        dimagecont.style.transform = "";
    }



    let dtextcont = document.createElement("div");
    dtextcont.style.flex = "1";
    dtextcont.style.display = "flex";
    dtextcont.style.flexDirection = "column";
    dtextcont.style.fontSize = "large";
    dtextcont.style.height = "560px";

    dcont.append(dtextcont);

    let head5 = document.createElement("h1");
    head5.innerHTML = json_obj.head6;
    head5.style.textAlign = "center";
    head5.style.fontFamily = "Cinzel Decorative";
    head5.style.fontSize = "30px";
    head5.style.textDecoration = "underline";
    head5.style.margin = "0px";
    head5.style.padding = "50px";

    dtextcont.append(head5);

    let parag = document.createElement("p");
    parag.innerHTML = json_obj.cont3;
    
    dtextcont.append(parag);


}






                                      //  why order from us
                                      






 CreateWhyorderfromus(json_obj){

    let why = document.createElement("div");
    document.body.append(why);

    let head1 = document.createElement("h1")
    head1.innerHTML = json_obj.head7;
    head1.style.textAlign = "center";
    head1.style.fontFamily = "Cinzel Decorative";
    head1.style.fontSize = "30px";
    head1.style.textDecoration = "underline";
    head1.style.margin = "0px";
    head1.style.padding = "50px";

    why.append(head1);


    let team = document.createElement("div")
    team.style.display = "flex";
    team.style.justifyContent = "center";
    team.style.width = "auto";
    team.style.textAlign = "center";
    team.style.flexWrap = "wrap";
    team.style.marginTop = "50px";

    why.append(team);


    let teammem = document.createElement("div");
    teammem.style.background = "#095a55";
    teammem.style.margin = "5px";
    teammem.style.marginBottom = "50px";
    teammem.style.width = "300px";
    teammem.style.padding = "20px";
    teammem.style.lineHeight = "20px";
    teammem.style.color = "#8e8b8b";
    teammem.style.position = "relative";

    team.append(teammem);


    let teamimg = document.createElement("div")
    teamimg.style.position = "absolute";
    teamimg.style.top = "-50px";
    teamimg.style.left = "50%";
    teamimg.style.transform = "translateX(-50%)";
    teamimg.style.width = "100px";
    teamimg.style.height = "100px";
    teamimg.style.borderRadius = "50%";

    teammem.append(teamimg);


    let img1 = document.createElement("img");
    img1.src = json_obj.img4;
    img1.style.width = "100px";
    img1.style.height = "100px";
    img1.style.padding = "5px";
    img1.style.borderRadius = "50%";
    img1.style.objectFit = "cover";
    img1.onmouseenter = enter8;
    img1.onmouseleave = leave8;
    teamimg.append(img1);

    function enter8(){
        img1.style.transform = "scale(1.35)";
    }

    function leave8(){
        img1.style.transform = "";
    }

     
    let head2 = document.createElement("h3");
    head2.innerHTML = json_obj.head8;
    head2.style.color = "white";
    head2.style.fontSize = "26px";
    head2.style.marginTop = "50px";

    teammem.append(head2);

    let para = document.createElement("p");
    para.innerHTML = json_obj.cont4;
    para.style.color = "white";
    para.style.fontSize = "17px";

    teammem.append(para);



    let teammem1 = document.createElement("div");
    teammem1.style.background = "#095a55";
    teammem1.style.margin = "5px";
    teammem1.style.marginBottom = "50px";
    teammem1.style.width = "300px";
    teammem1.style.padding = "20px";
    teammem1.style.lineHeight = "20px";
    teammem1.style.color = "#8e8b8b";
    teammem1.style.position = "relative";

    team.append(teammem1);


    let teamimg1 = document.createElement("div")
    teamimg1.style.position = "absolute";
    teamimg1.style.top = "-50px";
    teamimg1.style.left = "50%";
    teamimg1.style.transform = "translateX(-50%)";
    teamimg1.style.width = "100px";
    teamimg1.style.height = "100px";
    teamimg1.style.borderRadius = "50%";

    teammem1.append(teamimg1);


    let img2 = document.createElement("img");
    img2.src = json_obj.img5;
    img2.style.width = "100px";
    img2.style.height = "100px";
    img2.style.padding = "5px";
    img2.style.borderRadius = "50%";
    img2.style.objectFit = "cover";
    img2.onmouseenter = enter9;
    img2.onmouseleave = leave9;
    teamimg1.append(img2);

    function enter9(){
        img2.style.transform = "scale(1.35)";
    }

    function leave9(){
        img2.style.transform = "";
    }

    


    let head3 = document.createElement("h3");
    head3.innerHTML = json_obj.head9;
    head3.style.color = "white";
    head3.style.fontSize = "26px";
    head3.style.marginTop = "50px";

    teammem1.append(head3);

    let para1 = document.createElement("p");
    para1.innerHTML = json_obj.cont5;
    para1.style.color = "white";
    para1.style.fontSize = "17px";

    teammem1.append(para1);



    let teammem2 = document.createElement("div");
    teammem2.style.background = "#095a55";
    teammem2.style.margin = "5px";
    teammem2.style.marginBottom = "50px";
    teammem2.style.width = "300px";
    teammem2.style.padding = "20px";
    teammem2.style.lineHeight = "20px";
    teammem2.style.color = "#8e8b8b";
    teammem2.style.position = "relative";

    team.append(teammem2);


    let teamimg2 = document.createElement("div")
    teamimg2.style.position = "absolute";
    teamimg2.style.top = "-50px";
    teamimg2.style.left = "50%";
    teamimg2.style.transform = "translateX(-50%)";
    teamimg2.style.width = "100px";
    teamimg2.style.height = "100px";
    teamimg2.style.borderRadius = "50%";

    teammem2.append(teamimg2);


    let img3 = document.createElement("img");
    img3.src = json_obj.img6;
    img3.style.width = "100px";
    img3.style.height = "100px";
    img3.style.padding = "5px";
    img3.style.borderRadius = "50%";
    img3.style.objectFit = "cover";
    img3.onmouseenter = enter10;
    img3.onmouseleave = leave10;
    teamimg2.append(img3);

    function enter10(){
        img3.style.transform = "scale(1.35)";
    }

    function leave10(){
        img3.style.transform = "";
    }



    let head4 = document.createElement("h3");
    head4.innerHTML = json_obj.head10;
    head4.style.color = "white";
    head4.style.fontSize = "26px";
    head4.style.marginTop = "50px";

    teammem2.append(head4);

    let para2 = document.createElement("p");
    para2.innerHTML = json_obj.cont6;
    para2.style.color = "white";
    para2.style.fontSize = "17px";

    teammem2.append(para2);


    let teammem3 = document.createElement("div");
    teammem3.style.background = "#095a55";
    teammem3.style.margin = "5px";
    teammem3.style.marginBottom = "50px";
    teammem3.style.width = "300px";
    teammem3.style.padding = "20px";
    teammem3.style.lineHeight = "20px";
    teammem3.style.color = "#8e8b8b";
    teammem3.style.position = "relative";

    team.append(teammem3);


    let teamimg3 = document.createElement("div")
    teamimg3.style.position = "absolute";
    teamimg3.style.top = "-50px";
    teamimg3.style.left = "50%";
    teamimg3.style.transform = "translateX(-50%)";
    teamimg3.style.width = "100px";
    teamimg3.style.height = "100px";
    teamimg3.style.borderRadius = "50%";

    teammem3.append(teamimg3);


    let img4 = document.createElement("img");
    img4.src = json_obj.img7;
    img4.style.width = "100px";
    img4.style.height = "100px";
    img4.style.padding = "5px";
    img4.style.borderRadius = "50%";
    img4.style.objectFit = "cover";
    img4.onmouseenter = enter11;
    img4.onmouseleave = leave11;
    teamimg3.append(img4);

    function enter11(){
        img4.style.transform = "scale(1.35)";
    }

    function leave11(){
        img4.style.transform = "";
    }



    let head5 = document.createElement("h3");
    head5.innerHTML = json_obj.head11;
    head5.style.color = "white";
    head5.style.fontSize = "26px";
    head5.style.marginTop = "50px";

    teammem3.append(head5);

    let para3 = document.createElement("p");
    para3.innerHTML = json_obj.cont7;
    para3.style.color = "white";
    para3.style.fontSize = "17px";

    teammem3.append(para3);

}





                               


                                      // Contact Us








 CreateContactus(json_obj){

    let abt = document.createElement("div");
    document.body.append(abt);

    let head4 = document.createElement("h1");
    head4.id = 'contact';
    head4.style.textAlign = "center";
    head4.style.fontFamily = "Cinzel Decorative";
    head4.style.fontSize = "30px";
    head4.style.textDecoration = "underline";
    head4.style.margin = "0px";
    head4.style.padding = "50px";
    head4.innerHTML = json_obj.head12;

    abt.append(head4);


    let dmainbg = document.createElement("div");
    dmainbg.style.position = "relative";
    dmainbg.style.display = "flex";
    dmainbg.style.justifyContent = "center";
    dmainbg.style.alignItems = "center";

    abt.append(dmainbg);

    let dbackgd = document.createElement("div");
    dbackgd.style.display = "flex";
    dbackgd.style.width = "100%";
    dbackgd.style.minHeight = "100vh";

    dmainbg.append(dbackgd);


    let dbg1 = document.createElement("div");
    dbg1.style.flex = "1";
    dbg1.style.backgroundColor = "#fff38e"

    dbackgd.append(dbg1);

    let dbg2 = document.createElement("div");
    dbg2.style.flex = "1";
    dbg2.style.backgroundColor = "#095a55";

    dbackgd.append(dbg2);

   
    let dcont = document.createElement("div");
    dcont.style.width = "1100px";
    dcont.style.minHeight = "550px";
    dcont.style.position = "absolute";
    dcont.style.display = "flex";

    dmainbg.append(dcont);


    let dcont1 = document.createElement("div");
    dcont1.style.position = "absolute";
    dcont1.style.top = "40px";
    dcont1.style.width = "270px";
    dcont1.style.height = "390px";
    dcont1.style.background = "#095a55";
    dcont1.style.zIndex = "1";
    dcont1.style.padding = "40px";
    dcont1.style.display = "flex";
    dcont1.style.justifyContent = "center";
    dcont1.style.flexDirection = "column";
    dcont1.style.width = "270px";
    dcont1.style.justifyContent = "space-between";
    dcont1.style.boxShadow = "0 20px 25px rgba(0,0,0,0,15)";

    dcont.append(dcont1);

    let dcont1div = document.createElement("div");
    dcont1.append(dcont1div);

    let dcont1head = document.createElement("h2");
    dcont1head.innerHTML = json_obj.head13;
    dcont1head.style.color = "#fff";
    dcont1head.style.fontSize = "24px";
    dcont1head.style.fontWeight = "500";

    dcont1div.append(dcont1head);

    let ul1 = document.createElement("ul");
    ul1.style.margin = "20px 0";

    dcont1div.append(ul1);


    let li1 = document.createElement("li");
    li1.style.display = "flex";
    li1.style.margin = "20px 0";
    li1.style.cursor = "pointer";
    li1.style.alignItems = "flex-start";

    ul1.append(li1);

    let span1 = document.createElement("span");
    span1.innerHTML = json_obj.address;
    span1.style.color = "#fff";
    li1.append(span1);

    let li2 = document.createElement("li");
    li2.style.display = "flex";
    li2.style.margin = "20px 0";
    li2.style.cursor = "pointer";
    li2.style.alignItems = "flex-start";

    ul1.append(li2);

    let span2 = document.createElement("span");
    span2.innerHTML = json_obj.Email;
    span2.style.color = "#fff";
    li2.append(span2);


    let li3 = document.createElement("li");
    li3.style.display = "flex";
    li3.style.margin = "20px 0";
    li3.style.cursor = "pointer";
    li3.style.alignItems = "flex-start";

    ul1.append(li3);

    let span3 = document.createElement("span");
    span3.innerHTML = json_obj.phoneno;
    span3.style.color = "#fff";
    li3.append(span3);

    


    let dcont2 = document.createElement("div");
    dcont2.style.position = "absolute";
    dcont2.style.padding = "70px 50px";
    dcont2.style.paddingLeft = "250px";
    dcont2.style.marginLeft = "150px";
    dcont2.style.width = "650px";
    dcont2.style.height = "410px";
    dcont2.style.background = "#fff";
    dcont2.style.boxShadow = "0 50px 50px rgba(0,0,0,0.25)";

    dcont.append(dcont2);
    

    let dcont2head = document.createElement("h2");
    dcont2head.innerHTML = json_obj.head14;
    dcont2head.style.color = "#0f3959";
    dcont2head.style.fontSize = "24px";
    dcont2head.style.fontWeight = "500";

    dcont2.append(dcont2head);


    let formbox = document.createElement("div");
    formbox.style.position = "relative";
    formbox.style.display = "flex";
    formbox.style.justifyContent = "space-between";
    formbox.style.flexWrap = "wrap";
    formbox.style.paddingTop = "30px";

    dcont2.append(formbox);

    let div1 = document.createElement("div");
    div1.style.position = "relative";
    div1.style.marginBottom = "35px";
    div1.style.width = "47%";

    formbox.append(div1);

    let input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "First Name";
    input1.required;
    input1.style.width = "100%";
    input1.style.resize = "none";
    input1.style.padding = "5px 0";
    input1.style.fontSize = "18px";
    input1.style.fontWeight = "300";
    input1.style.color = "#333";
    input1.style.border = "none";
    input1.style.outline = "none";
    input1.style.borderBottom = "1px solid #777";

    div1.append(input1);



   let div2 = document.createElement("div");
    div2.style.position = "relative";
    div2.style.marginBottom = "35px";
    div2.style.width = "47%";

    formbox.append(div2);

    let input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = "Last Name";
    input2.required;
    input2.style.width = "100%";
    input2.style.resize = "none";
    input2.style.padding = "5px 0";
    input2.style.fontSize = "18px";
    input2.style.fontWeight = "300";
    input2.style.color = "#333";
    input2.style.border = "none";
    input2.style.outline = "none";
    input2.style.borderBottom = "1px solid #777";

    div2.append(input2);


   let div3 = document.createElement("div");
    div3.style.position = "relative";
    div3.style.marginBottom = "35px";
    div3.style.width = "47%";

    formbox.append(div3);

    let input3 = document.createElement("input");
    input3.type = "text";
    input3.placeholder = "Email Address";
    input3.required;
    input3.style.width = "100%";
    input3.style.resize = "none";
    input3.style.padding = "5px 0";
    input3.style.fontSize = "18px";
    input3.style.fontWeight = "300";
    input3.style.color = "#333";
    input3.style.border = "none";
    input3.style.outline = "none";
    input3.style.borderBottom = "1px solid #777";

    div3.append(input3);


   let div4 = document.createElement("div");
    div4.style.position = "relative";
    div4.style.marginBottom = "35px";
    div4.style.width = "47%";

    formbox.append(div4);

    let input4 = document.createElement("input");
    input4.type = "text";
    input4.placeholder = "Mobile Number";
    input4.required;
    input4.style.width = "100%";
    input4.style.resize = "none";
    input4.style.padding = "5px 0";
    input4.style.fontSize = "18px";
    input4.style.fontWeight = "300";
    input4.style.color = "#333";
    input4.style.border = "none";
    input4.style.outline = "none";
    input4.style.borderBottom = "1px solid #777";

    div4.append(input4);


   let div5 = document.createElement("div");
   div5.style.position = "relative";
   div5.style.marginBottom = "35px";
   div5.style.width = "100%";

   formbox.append(div5);

   let tex = document.createElement("textarea");
   tex.required;
   tex.placeholder = "Write Message Here";
   tex.style.width = "100%";
   tex.style.resize = "none";
   tex.style.padding = "5px 0";
   tex.style.fontSize = "18px";
   tex.style.fontWeight = "300";
   tex.style.color = "#333";
   tex.style.border = "none";
   tex.style.outline = "none";  
   tex.style.borderBottom = "1px solid #777";
   tex.style.height = "120px";

   div5.append(tex);
   

   let div6 = document.createElement("div");
   div6.style.position = "relative";
   div6.style.marginBottom = "35px";
   div6.style.width = "100%";

   formbox.append(div6);

   let input5 = document.createElement("input");
   input5.type = "submit";
   input5.value = "send";
   input5.style.position = "relative";
   input5.style.width = "100%";
   input5.style.resize = "none";
   input5.style.padding = "12px";
   input5.style.fontSize = "18px";
   input5.style.fontWeight = "300";
   input5.style.color = "#fff";
   input5.style.border = "none";
   input5.style.outline = "none";
   input5.style.borderBottom = "1px solid #777";
   input5.style.cursor = "pointer";
   input5.style.background = "#095a55";
   input5.style.maxWidth = "150px";

   div6.append(input5);

     

}

}


load();
