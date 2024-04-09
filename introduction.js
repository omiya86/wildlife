const topic2={

}

fetch('introduction.json')
    .then(Response => Response.json())
    .then(data =>{
       topic2.maintopic1=data.maintopic1;
       topic2.mainsub=data.mainsub;
       topic2.inpara1=data.inpara1;
       topic2.keyfea=data.keyfea;
       topic2.point1=data.point1;
       topic2.point2=data.point2;
       topic2.point3=data.point3;
       topic2.point4=data.point4;
       topic2.point5=data.point5;
       topic2.exp=data.exp;
       topic2.sinha=data.sinha;
       topic2.sinhapara=data.sinhapara;
       topic2.hort=data.hort;
       topic2.hortpara=data.hortpara;
       topic2.kuma=data.kuma;
       topic2.kumapara=data.kumapara;
       topic2.lo=data.lo;
       topic2.wi=data.wi;
       topic2.sp=data.sp;
       topic2.srw=data.srw;
       topic2.srs=data.srs;
       topic2.kr=data.kr;
       topic2.krw=data.krw;
       topic2.krs=data.krs;
       topic2.hp=data.hp;
       topic2.hpw=data.hpw;
       topic2.hps=data.hps

       const mainString = JSON.stringify(main);
       localStorage.setItem('main', mainString);
 })