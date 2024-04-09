const topic={

}

fetch('index.json')
    .then(Response => Response.json())
    .then(data =>{
        topic.Maintopic = data.Maintopic;
        topic.Maintopicsub = data.Maintopicsub;
        topic.subtopic = data.subtopic; 
        topic.para1 = data.para1;
        topic.para2=data.para2;
        topic.title1 = data.title1;
        topic.para3=data.para3;
        topic.title2=data.title2;
        topic.para4=data.para4;
        topic.title3=data.title3;
        topic.para5=data.para5;

        const mainString = JSON.stringify(main);
        localStorage.setItem('main', mainString);
        
        
    })