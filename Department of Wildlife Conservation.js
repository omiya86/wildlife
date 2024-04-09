const topic3={

}

fetch('Department of Wildlife Conservation.json')
    .then(Response => Response.json())
    .then(data =>{
        topic3.maintopic2=data.maintopic2;
        topic3.mainsub1=data.mainsub1;
        topic3.mainpara=data.mainpara;
        topic3.title=data.title;
        topic3.title1=data.title1;
        topic3.title2=data.title2;
        topic3.title3=data.title3;
        topic3.title4=data.title4;
        topic3.title5=data.title5;
        topic3.title6=data.title6;
        topic3.title7=data.title7;

        const mainString = JSON.stringify(main);
        localStorage.setItem('main', mainString);  
 })