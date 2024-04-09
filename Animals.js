const topic4={

}

fetch('Animals.json')
    .then(Response => Response.json())
    .then(data =>{
        topic4.title=data.title;
        topic4.title1=data.title1;
        topic4.title2=data.title2;
        topic4.title3=data.title3;
        topic4.title4=data.title4;
        topic4.title5=data.title5;
        topic4.title6=data.title6;
        topic4.title7=data.title7;
        topic4.title8=data.title8;
        topic4.title9=data.title9;
        topic4.title10=data.title10;
        topic4.title11=data.title11;
        topic4.title12=data.title12;
        topic4.title13=data.title13;
        topic4.title14=data.title14;
        topic4.title15=data.title15;
        topic4.title16=data.title16;
        topic4.title17=data.title17;
        topic4.title18=data.title18;
        topic4.title19=data.title19;
       
        const mainString = JSON.stringify(main);
        localStorage.setItem('main', mainString);
      
 })