// last edit  17 mordad 1403 
import React, { useState, useEffect } from 'react';
import { total_record, postalname, imageNames } from './images'; // Import images and image names from a separate file
import './Taktodo.css';
import jsPDF from 'jspdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import {ContactUs} from './ContactUs';
import Appo from './modi';
import fim1 from '..\\fact\\fim1.png';
import fim3 from '..\\fact\\fim3.png';
import fim4 from '..\\fact\\fim4.png';
import fim5 from '..\\fact\\fim5.png';
import fim6 from '..\\fact\\fim6.png';
import fim7 from '..\\fact\\fim7.png';
import fim8 from '..\\fact\\fim8.png';
import fim9 from '..\\fact\\fim9.png';
import fim10 from '..\\fact\\fim10.png';
import fim11 from '..\\fact\\fim11.png';

import c1 from '..\\fact\\Co1.png';
import c2 from '..\\fact\\Co2.png';
import c3 from '..\\fact\\Co3.png';
import c4 from '..\\fact\\Co4.png';
import c5 from '..\\fact\\Co5.png';
import c6 from '..\\fact\\Co6.png';
import c7 from '..\\fact\\Co7.png';
import c8 from '..\\fact\\Co8.png';
import c9 from '..\\fact\\Co9.png';
import c10 from '..\\fact\\Co10.png';

import c11 from '..\\fact\\Co11.png';
import c12 from '..\\fact\\Co12.png';
import c13 from '..\\fact\\Co13.png';
import c14 from '..\\fact\\Co14.png';
import c15 from '..\\fact\\Co15.png';
import c16 from '..\\fact\\Co16.png';
import c17 from '..\\fact\\Co17.png';
import c18 from '..\\fact\\Co18.png';
import c19 from '..\\fact\\Co19.png';
import c20 from '..\\fact\\Co20.png';
import c21 from '..\\fact\\Co21.png';
import c30 from '..\\fact\\Co30.png';
const pcor=[];
var Fordivfix = [];
let darsad=0.35;
let varo="";
var tanzimby = "Noname";
var tanz ="";
var phon="";
var pcode="????";
var  jcode ;
var comp=30;
var Mdivh = 3600;
var actp = 0;
var allcode = "To.";
const elcode = ['To', 'Bi', 'No', 'Fr', 'Fu', 'Ye', 'Ki', 'Me', 'Pe', 'Lo', 'Sy'];


/********-    .=*******=.       :+******+. .+*******+          .+*******=.    .:-+*##%%%%##*+=:..    
%%%%%%%#=    .+%%%%%%%#+:      :*%%%%%%*:  -#%%%%%%%-        .-%%%%%%%*:   .=*%%%%%%%%%%%%%%%%#+:.  
%%%%%%%#=    .+%%%%%%%%%*-.    :*%%%%%%*:  .+#%%%%%%#.      .:*%%%%%%#=  .-*%%%%%%%%%%%%%%%%%%%%%=..
%%%%%%%#=    .+%%%%%%%%%%#=.   :*%%%%%%*:   .*%%%%%%%=      .=%%%%%%#+. .-#%%%%%%%#=::::-*%%%%%%%%+.
%%%%%%%#=    .+%%%%%%%%%%%%*:  :*%%%%%%*:    :#%%%%%%#:    .:#%%%%%%*.  -*%%%%%%%=..     .-#%%%%%%%=
%%%%%%%#=    .+%%%%%%%%%%%%%#-.:*%%%%%%*:     -#%%%%%%*    .+%%%%%%*-  .=%%%%%%%+:        .+#%%%%%%*
%%%%%%%#=    .+%%%%%%##%%%%%%#=-*%%%%%%*:     .+#%%%%%#=  .-%%%%%%#=.  .+%%%%%%%=.         -#%%%%%%%
%%%%%%%#=    .+%%%%%%*-=#%%%%%%##%%%%%%*:      .#%%%%%%#. .#%%%%%%+.   :+%%%%%%%=.         -#%%%%%%%
%%%%%%%#=    .+%%%%%%*- -*%%%%%%%%%%%%%*:       :#%%%%%%+.=%%%%%%*:    .=%%%%%%%+:        .+#%%%%%%*
%%%%%%%#=    .+%%%%%%*-  :+%%%%%%%%%%%%*:        -%%%%%%#=%%%%%%#-      -#%%%%%%#-..     .:#%%%%%%%=
%%%%%%%#=    .+%%%%%%*-   .=#%%%%%%%%%%*:         +%%%%%%%%%%%%#=       .=#%%%%%%%*-::::-+#%%%%%%%*.
%%%%%%%#=    .+%%%%%%*-    .-*%%%%%%%%%*:         .#%%%%%%%%%%%*.        .-#%%%%%%%%%%%%%%%%%%%%%+..
%%%%%%%#=    .+%%%%%%*-      :+#%%%%%%%*:          :#%%%%%%%%%#:          .:=#%%%%%%%%%%%%%%%%#*:.  
#######*-    .=######*:       .=*######+:           -########*-              .:=*###%%%%%##*+-..  **/



const creat_Invoice = async (quant,pco,shom,darsx,coind) => {
  const pdfDoc = await PDFDocument.create();

  // Register fontkit instance


  // Load custom fonts
  let page = pdfDoc.addPage([1748,2480]);
  
  const { width, height } = page.getSize();

  let ly=2050;

  
  
  
  const imageBytes = await fetch(fim1).then(res => res.arrayBuffer());
  const pngImage = await pdfDoc.embedPng(imageBytes);
  page.drawImage(pngImage, {  x: 30,  y: ly , width: 1675, height: 320 , }); 
  
  ly=ly-160;

  page.drawText("Ref.:"+String(shom), { x: 135, y: ly+10,  size: 24,  color: rgb(0, 0, 0), });
  page.drawText("Ref.:"+"تست متن فارسی ", { x: 135, y: ly+30,  size: 24,  color: rgb(0, .2, 0), });
  
  

  
  const imageBytes2 = await fetch( f(comp)).then(res => res.arrayBuffer());
  const pngImage2 = await pdfDoc.embedPng(imageBytes2);
  page.drawImage(pngImage2, { x: 1070, y: ly+10, width: 600, height: 70 });

  
  ly=ly-120;
 
  const imageBytes3 = await fetch(fim3).then(res => res.arrayBuffer());
  const pngImage3 = await pdfDoc.embedPng(imageBytes3);
  page.drawImage(pngImage3, {    x: 30,    y: ly,   width: 1675, height: 120,  });
  
  
 

ly=ly-120;

  
  
  var nsef=[];
  nsef=pco.split('+') ;
  let pra=0;
  let prp=0;
  let tpra=0;
  
  const imageBytesa_a = await fetch(fim4).then(res => res.arrayBuffer());
  const pngImage_a = await pdfDoc.embedPng(imageBytesa_a);
  
    
  const imageBytesa_t = await fetch(fim5).then(res => res.arrayBuffer());
  const pngImage_t = await pdfDoc.embedPng(imageBytesa_t);
  
  
  const imageBytesa_s = await fetch(fim6).then(res => res.arrayBuffer());
  const pngImage_s = await pdfDoc.embedPng(imageBytesa_s);
  
 
  for (let j = 0; j < nsef.length-1; j++) {
    const ted=  nsef[j].split('_');
    
    const ind=Number(ted[0]);  
    
    const coco=imageNames[postalname[ind]];
    page.drawText(coco, { x: 835, y: ly,  size: 24,  color: rgb(0, 0, 0), });
    page.drawText(String(quant[ind]), { x: 700, y: ly,  size: 34,  color: rgb(0, 0, 0), });
    pra=price(coco);
    page.drawText(Commaformat(pra)+" R" ,       { x: 430, y: ly,  size: 34,  color: rgb(0, 0, 0), });
    tpra=pra*quant[ind];
    page.drawText(Commaformat(tpra)+" R" ,       { x: 150, y: ly,  size: 34,  color: rgb(0, 0, 0), });
    prp=tpra+prp;
    
    
                    if(coco.substring(0, 2)==="To") { 
      
                                                       if(coco.substring(0, 4)==="To_1")  { page.drawImage(pngImage_a, { x: 1190,y: ly-14 ,  width:440,  height:75,  });
                                                      page.drawLine({start: { x: 25, y: ly-14 }, end: { x: 1180, y: ly-14}, thickness: 2,  color: rgb(0.75, 0.2, 0.2),})   }
                                                       else
                                                       { page.drawImage(pngImage_t, { x: 1190,y:  ly-14 ,  width:440,  height:75, });page.drawLine({start: { x: 25, y: ly-14 }, end: { x: 1180, y: ly-14}, thickness: 2,  color: rgb(0.75, 0.2, 0.2),}) }
                                                                                                                                                                                }
                      else
                      {  page.drawImage(pngImage_s, { x: 1190,y: ly-14,  width:440,  height:75,  }); 
                    page.drawLine({start: { x: 25, y: ly-14 }, end: { x: 1180, y: ly-14}, thickness: 2,  color: rgb(0.75, 0.2, 0.2),}) 
                    }

                      page.drawText(String(j+1) ,       { x: 1690, y:ly+33,  size: 20,  color: rgb(0, 0, 0), });                      

                                  

                      ly=ly-78;
                      if (ly<(500)) {ly=2140;  page = pdfDoc.addPage([1748,2480]);  

                       
                        page.drawImage(pngImage3, {    x: 30,    y: ly,    width: 1675,    height: 120,  });

                        ly=ly-78;


                        }
                        

 
 
 
                      };
  
   
    //page.addImage(postalname[ind], 'PNG', 10, ly, 34, 48, '', 0.1);
    //page.text(imageNames[postalname[ind]], 15, 60 + ly);
    //page.text(q, 30, 60 + ly);
   
    
    
         page.drawRectangle({      x: 25,      y: ly,      width: 1850,      height: 10,    borderWidth: 5,      borderColor: rgb(0.1, 0.1, 0.2),      color: rgb(0.1, 0.1, 0.2),     opacity: 0.5,      borderOpacity: 0.75,    });

         ly=ly-78;

         const imageBytes_z = await fetch(fim7).then(res => res.arrayBuffer());
         const pngImage_z = await pdfDoc.embedPng(imageBytes_z);
         
         page.drawImage(pngImage_z, {    x: 400,    y: ly,    width: 550,    height:50,  });

         page.drawText(Commaformat(prp)+" R" ,       { x: 156, y: ly+8,  size: 34,  color: rgb(0, 0, 0), });
         ly=ly-78;
   
         const imageBytes_x = await fetch(fim8).then(res => res.arrayBuffer());
         const pngImage_x = await pdfDoc.embedPng(imageBytes_x);
         page.drawImage(pngImage_x, {    x: 400,    y:ly,    width: 550 ,   height: 50,  });
         
         let sm =  Math.ceil(prp*darsx/100000)*1000;
         page.drawText(Commaformat(sm)+" R" ,       { x: 156, y: ly+8,  size: 34,  color: rgb(0, 0, 0), });
         page.drawText(String(darsx)+"%" ,       { x:860, y: ly+8,  size: 34,  color: rgb(0, 0, 0), });
         
         ly=ly-78;
         const imageBytes_v = await fetch(fim9).then(res => res.arrayBuffer());
         const pngImage_v = await pdfDoc.embedPng(imageBytes_v);
         
         page.drawImage(pngImage_v, {    x: 96,    y:ly,    width: 1000,    height: 50,  });
         page.drawText(Commaformat(prp-sm) ,      { x: 156, y: ly+8,  size: 34,  color: rgb(0, 0, 0), });

         const imageBytes_w = await fetch(fim11).then(res => res.arrayBuffer());
         const pngImage_w = await pdfDoc.embedPng(imageBytes_w);
         page.drawImage(pngImage_w, {    x: 1230,    y: ly,    width:345,    height: 220,  });
         
         ly=ly-180;
         const imageBytes_n = await fetch(fim10).then(res => res.arrayBuffer());
         const pngImage_n = await pdfDoc.embedPng(imageBytes_n);
         page.drawImage(pngImage_n, {    x: 230,    y: ly,    width:1200,    height: 112,  });
         

         ly=0;
 
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'lastfact.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}




/**############+: -*####+.    .=####*=  .+####*-.    .#####=     .:=*#%%%%%#*=:   :*#################
%%%%%%%%%%%%%%+: -#%%%%*.    .+%%%%#=  :+%%%%%%=..  .%%%%#+   .-*%%%%%%%%%%%%%+. :#%%%%%%%%%%%%%%%%%
%%%%%#-::::::::. -#%%%%*.    .+%%%%#=  :+%%%%%%%*.  .%%%%#+  .=#%%%%#+-::=#%%%%#:.=+++++#%%%%#++++++
%%%%%#:          -#%%%%*.    .+%%%%#=  :+%%%%%%%%#- .%%%%#+  :*%%%%#-.    .+:::..      :*%%%%*:     
%%%%%%%%%%%%%=   -#%%%%*.    .+%%%%#=  :+%%%%%%%%%%+.%%%%#+  -#%%%%*:                  :*%%%%*:     
%%%%%%%%%%%%%=   -#%%%%*.    .+%%%%#=  :+%%%%*:#%%%%%%%%%#+  -#%%%%*:                  :*%%%%*:     
%%%%%#:          :*%%%%#.    .+%%%%#-  :+%%%%*:.+#%%%%%%%#+  :*%%%%#-.    :%%#*=.      :*%%%%*:     
%%%%%#:          .+#%%%%#-:::*%%%%%*:  :+%%%%*:  -#%%%%%%#+  .=#%%%%#=:::=#%%%%#:      :*%%%%*:     
%%%%%#:           .+#%%%%%%%%%%%%#+:   :+%%%%*:   .*%%%%%#+   .:*#%%%%%%%%%%%%*.       :*%%%%*:     
#####*:             .=*##%%%%%#*=:.    .+####*.    .=#####=     .:=*##%%%%#*=:         :+####*:  **/



function price(coc)
{
//postal price
  let pr=500000;
 if( coc.substring(0, 2)==="To")  pr=480000;
if( coc.substring(0, 4)==="To_1")  pr=450000;
return pr;
}

function getCurrentDateString( ) {
  //Date latin
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const sal = (currentDate.getFullYear() ).toString().padStart(2, '0');
  return `${day}/${month} ${sal} `;
}


const f = (x) => {
  switch (x) {
    case 1: return c1;
    case 2: return c2;
    case 3: return c3;
    case 4: return c4;
    case 5: return c5;
    case 6: return c6;
    case 7: return c7;
    case 8: return c8;
    case 9: return c9;
    case 10: return c10;
    case 11: return c11;
    case 12: return c12;
    case 13: return c13;
    case 14: return c14;
    case 15: return c15;
    case 16: return c16;
    case 17: return c17;
    case 18: return c18;
    case 19: return c19;
    case 20: return c20;
    case 21: return c21;
    case 22: return c30;
    case 23: return c30;
    case 24: return c30;
    case 25: return c30;
    case 26: return c30;
    case 27: return c30;
    case 28: return c30;
    case 29: return c30;
    default: return c30; // Default case if x is not 1 or 2
  }
};







const showpic = (x) => {
  // Define the file names
  const fileNames = {
    1: 'co1.png',
    2: 'co2.png',
    3: 'co3.png',
  };

  // Check if the value of x is valid
  if (fileNames[x]) {
    return (
      <img src={`/${fileNames[x]}`} alt={`co${x}`} />
    );
  } else {
    return (
      <p>Invalid value. Please enter a value between 1 and 3.</p>
    );
  }
};


function transcode(quant) {

//list selected card
  var tcode='';
             
for (let i = 1; i < total_record; i++) {
                                          if (quant[i]>0 ) { let a = String(i); let  b= String(quant[i]);  tcode= tcode+a+"_"+b+"+"; 
                                                 }
   
                                                      }

                                                      return  tcode;
                    }


                    const copyToClipboard = (value) => {
                      navigator.clipboard.writeText(value).then(() => {
                        //alert('Text copied to clipboard!');
                      }).catch(err => {
                        console.error('Could not copy text: ', err);
                      });
                    };

 function Commaformat(num) {
                      const numStr = num.toString();
                      
                      // Ensure the input number string has a maximum of 10 digits
                      if (numStr.length > 10) {
                        return 'Number exceeds 10 digits';
                      }
                    
                      // Convert the number string to a formatted string with commas
                      return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }





                    /**%%%%%%%%%#*+:   :*%%%%%%%%%%##*=:.    -#%%%%%%%%%%%%%*: .+%%%%%%%%%%%%%%%*:  +#%%%%%%%%%%%%#*=.. 
                    %%%%%%##%%%%%%%#-  :*%%%%%%%%%%%%%%#+.   -#%%%%%%%%%%%%%*: .+%%%%%%%%%%%%%%%*:  +#%%%%%###%%%%%%%#:.
                    %%%%%%:..:=%%%%%*  :*%%%%#+---+#%%%%%+.  -#%%%%*-......... .+%%%%%=...........  +#%%%%+. ..:*%%%%%+.
                    %%%%%%: ..-%%%%%*  :*%%%%#+   .:#%%%%#=  -#%%%%*-........  .+%%%%%+---------..  +#%%%%+....-#%%%%%=.
                    %%%%%%**##%%%%%#-  :*%%%%#+    :*%%%%#+. -#%%%%%%%%%%%%+.  .+%%%%%%%%%%%%%%%:.  +#%%%%%%%%%%%%%%#=..
                    %%%%%%%%%%%%%#+-   :*%%%%#+    :+%%%%#+. -#%%%%%#######+.  .+%%%%%#*********:.  +#%%%%%%%%%%%%*-..  
                    %%%%%%=----:..     :*%%%%#+    :#%%%%#=. -#%%%%*:........  .+%%%%%=.            +#%%%%+.:+#%%%%#=.. 
                    %%%%%%:            :*%%%%#+---=#%%%%%+:  -#%%%%*:          .+%%%%%+-:::::::::.. +#%%%%+. .+#%%%%%+..
                    %%%%%%:            :*%%%%%%%%%%%%%%#+.   -#%%%%*:          .+%%%%%%%%%%%%%%%%:. +#%%%%+.  .=#%%%%%+.
                    %%%%%%:            :*%%%%%%%%%%##*=:.    -#%%%%*:          .+%%%%%%%%%%%%%%%%:. +#%%%%+.   .=#%%%%%+**/



  function generatePdf(quanta, tanzimby) {
  //hassn [@1121+35]
  
  const foo= tanzimby.split('[');
  tanz=foo[0];
  alert(foo);
  let yara="";
  if (foo[1].lastIndexOf('@')>0)  yara =foo[1].split('@'); else  yara=['0','0'];
  const co=yara;
  comp=Number(co[0]);
  const ph=co[1].split(']');
  let dars= ph[0].split("+");
  let shoma=Number(dars[0]);
  let darsadx=dars[1];
  //let result = dars.slice(1, 3);
  //let index = str.lastIndexOf("World"); // 13
  //let result = str.replace("World", "JavaScript"); // "Hello, JavaScript!"
  //let upper = str.toUpperCase(); // "HELLO, WORLD!"
  //let lower = str.toLowerCase(); // "hello, world!"
  //let result = str.trim(); // "Hello, World!"
  
  
    if (shoma>0 && darsad>0)
    {
      pcode=transcode(quanta);
      creat_Invoice(quanta,pcode,shoma,darsadx,comp);
    }
  else
{  
pcode=transcode(quanta);
   
  //alert(pcode);
  if (tanzimby.length > 2) {
    
    const tedx= String(quanta.reduce((a, b) => a + b, 0));
    const curtime=getCurrentDateString();
    CodeTopdf('START#'+pcode,tedx ,curtime,tanzimby+'#END');
    
    jcode='START#'+pcode+"*"+tedx+"*"+curtime+"*"+tanzimby+'#END';
    copyToClipboard(jcode);
    console.log("jcode:", jcode);
    return (jcode);
    
  }
}
}
  








/**%%%%%%#-.                     +%%%%=                                               -%%%%#  -#%%%%
=%%%%%%%%%%#.                    +%%%%=                                               -%%%%# :%%%%+=
#%%%%: #%%%%-  :#%%%%%%+.  -#%%%#*%%%%=  .*%%%%%%*.  **=.          #%%%%-#%%%*  .#%%%#*%%%%#:#%%%%##
%%%%%: #%%%%= =%%%%+#%%%%: #%%%%+#%%%%= -%%%%*+%%%%: *%%%%%+:.     #%%%%+#%%%%- *%%%%**%%%%#:*%%%%#*
%%%%%: #%%%%= #%%%# =%%%%= %%%%# +%%%%= *%%%%-:%%%%*    +%%%%%%%+. #%%%% =%%%%= #%%%%:-%%%%# :%%%%* 
%%%%%:        %%%%# =%%%%= %%%%# +%%%%= *%%%%%%%%%%%       :#%%%%- #%%%% =%%%%= #%%%%:-%%%%# :%%%%* 
%%%%%: +++++- %%%%# =%%%%= %%%%# +%%%%= *%%%%*++++++  :=#%%%%%#+.  #%%%% =%%%%= #%%%%:-%%%%# :%%%%* 
%%%%%: #%%%%= %%%%# =%%%%= %%%%# +%%%%= *%%%%-.%%%%% *%%%%*.       #%%%% =%%%%= #%%%%:-%%%%# :%%%%* 
*%%%%: #%%%%- #%%%# =%%%%- %%%%# +%%%%= +%%%%-.%%%%# +=.           #%%%% =%%%%= #%%%%:-%%%%# :%%%%* 
-%%%%%%%%%%*  =%%%%%%%%%#. #%%%%%%%%%%= .#%%%%%%%%%.               #%%%%%%%%%%: *%%%%%%%%%%# :%%%%* 
 .=%%%%%%*.    .+%%%%%#..  .*%%%=+%%%%=  .:#%%%%%-.                #%%%%.*%%%:  .=%%%+-%%%%# :%%%%* 
                                                                   #%%%%      **/                      







function CodeTopdf( pco, teddi,curt ,tanz) {
  
  //alert (pco);
  const sec1=pco.split('#');  
  const sec2=tanz.split('#');
  pco=sec1[1];
  tanz=sec2[0];
  
  
  if (sec1[0]==='START'  && sec2[1]==='END')
    {

    let ly = 30;
   
    let jn = 0;

     

    const doc = new jsPDF();
    
    doc.text('CREATED By  :  ' + tanz   +    ' Date: ' + curt , 10, 16)
    doc.text('SELECTED ITEM  FOR ORDER         TOTAL: ' + teddi , 10, 24);
    doc.text('______________________________________________________________________________', 0, 35);

    
    var nsef=[];
    nsef=pco.split('+') ;
    
    for (let j = 0; j < nsef.length-1; j++) {
      
      const ted=  nsef[j].split('_');
      const q = "N = " + ted[1];
      const ind=Number(ted[0]);  
      
      
      
      jn = (j+1) % 3;
        if (jn === 1) {
        
          doc.addImage(postalname[ind], 'PNG', 10, ly, 34, 48, '', 0.4);
        
          doc.text(imageNames[postalname[ind]], 15, 60 + ly);
          doc.fontSize=5 ;
          doc.text(q, 30, 60 + ly);
          jn = 4;
        } else if (jn === 2) {
          doc.addImage(postalname[ind], 'PNG', 80, ly, 34, 48, '', 0.4);
                    
          doc.text(imageNames[postalname[ind]], 75, 60 + ly);
          doc.fontSize=28;
          doc.text(q, 90, 60 + ly);
          jn = 4;
        } else if (jn === 0) {
          jn = 4;
          doc.addImage(postalname[ind], 'PNG', 160, ly, 34, 48, '', 0.4);
          doc.text(imageNames[postalname[ind]], 155, 60 + ly);
          doc.text(q, 170, 60 + ly);
          ly += 70;
        }
        if (ly > 200) {
          ly = 20;
          doc.addPage();
        }
      }
      const ac = "keshmesh_" + getCurrentDateString();
      doc.save(ac);

      }
     else
     {
        alert('Admin Only!');
     }

    }
    




  

   /** -=+++++++==.                                                   ========
    :+++++++++++++++=                                                 =+++++++
   .+++++++.  +++++++=         .----.                    :     .--.   =+++++++
   =+++++++   -+++++++     =++++++++++++=     +++++++ =+++  :++++++++=++++++++
   ++++++++   -+++++++    ++++++= :+++++++    ++++++++++++  +++++++=  =+++++++
   ++++++++   -+++++++   +++++++   +++++++    ++++++++++++  +++++++-  =+++++++
   ++++++++              +++++++   +++++++:   ++++++++-     +++++++-  =+++++++
   ++++++++                    .++++++++++:   +++++++.      +++++++-  =+++++++
   ++++++++   :=======    :+++++++:+++++++:   +++++++       +++++++-  =+++++++
   ++++++++   -+++++++   =++++++-  +++++++:   +++++++       +++++++-  =+++++++
   -+++++++   -+++++++   +++++++   +++++++:   +++++++       +++++++-  =+++++++
    +++++++:  +++++++=   +++++++-  +++++++:   +++++++       +++++++-  =+++++++
     =++++++++++++++:    .++++++++++++++++:   +++++++       =+++++++++++++++++
        ++++++++=:         :++++=  =++++++:   +++++++         :++++-  =+++++++**/
   






function Card({ np, ip, quantities, setQuantities }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[ip] = quantity;
      return newQuantities;
    });
  }, [quantity, ip, setQuantities]);

  
  const handleClick = (event) => {
    if (event.shiftKey) setQuantity(quantity + 5); else setQuantity(quantity + 2);
  };

  const handleClick2 = (event) => {
    if (event.shiftKey)  setQuantity(quantity => Math.max(quantity - 5, 0)); else  setQuantity(quantity => Math.max(quantity - 1, 0));
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 470 + Math.floor(np - 1) * 450,
        left: 10,
        margin: 0,
        padding: 13,
        transform: "scale(.8)",
        width: 700,
        height: 480,
        backgroundColor: np % 2 === 0 ? "#222222" : "#222222",
      }}
    >
      <img src={postalname[ip]} alt="CARD POSTAL" className="pico" />
      <div
        style={{
          fontSize: 66,
          position: "absolute",
          top: 70,
          left: 216,
          transform: "scale(.7)",
          color: "#ffffff",
          width: 320,
          height: 280,
        }}
      >
        <div>
          <button className='imbo2' onClick={handleClick2}> </button>
          <button className='imbo' onClick={handleClick}> </button>
        </div>
        <div className='totselect'>
          {quantity}
        </div>
      </div>
    </div>
  );
}

function Overlay({ content }) {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80%' }}>
      {content}
    </div>
  );
} 

          /**++++++++++++++                                                       
           +++++++++++++++:                .--:.                    .---.    
          =+++++++==+++++++      -++++++++=-++++++++++=   .+++++++++:++++++++++= 
         ++++++++ :+++++++.     -+++++++++. :+++++++++   .+++++++++-  +++++++++-
        -+++++++= .++++++++     -++++++++=   =++++++++.  .+++++++++   -+++++++++
       ++++++++.  =+++++++.    -++++++++=   =++++++++.  .+++++++++   -+++++++++
     .++++++++   =+++++++-    -++++++++=   =++++++++.  .+++++++++   -+++++++++
     ++++++++=   =+++++++=    -++++++++=   =++++++++.  .+++++++++   -+++++++++
    ++++++++++==+++++++++.   -++++++++=   =++++++++.  .+++++++++   -+++++++++
   :+++++++++++++++++++++=   -++++++++=   =++++++++.  .+++++++++   -+++++++++
   =++++++++=====+++++++++   -++++++++=   =++++++++.  .+++++++++   -+++++++++
+++++++++-    +++++++++=  -+++++++++===+++++++++   .+++++++++===+++++++++:
-+++++++++.    -++++++++=  -++++++++= =++++++++=    .+++++++++ :+++++++++: 
                          -++++++++=               .+++++++++             
                          -=========                =========              */


function App() {
  const [content, setContent] = useState([]);
  const [quantities, setQuantities] = useState(Array(total_record).fill(0));
  const [ttq, setTtq] = useState(0);
  const [myvar, setMyvar] = useState('');
  //12@1121+35
  const [myphone, setMyphone] = useState('');
  const [checkedStates, setCheckedStates] = useState(Array(11).fill(false));

  useEffect(() => {
    const newTtq = quantities.reduce((sum, q) => sum + q, 0);
    setTtq(newTtq);
  }, [quantities]);

  const getImageName = (index) => {
    const imageUrl = postalname[index];
    return imageNames[imageUrl];
  };

  const clearContent = () => {
    setContent([]);
  };


  actp=0;
  Fordivfix=[];
  for (let i = 1; i < 11; i++) {
  actp=actp+1;  
  Fordivfix.push(<Card  np={actp}   key={i}      ip={i}      quantities={quantities}        setQuantities={setQuantities}  />);  };




  const [clipboardValue, setClipboardValue] = useState('');

  const readFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setClipboardValue(text);
      console.log('Text read from clipboard:', text);


    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    } 

     
    
    //alert(myvar);
    const tvar=myvar+'appe';
    if(tvar.includes('START')===true) { 
      const para= myvar.split('*')
      CodeTopdf(para[0],para[1],para[2],para[3]);    } else {setMyvar(clipboardValue);}
  };



  const addNewContent = () => {
    const newContent = [];
     
      actp = 11;
      let imagNa = "";
      let shamel = false;
      for (let i = 11; i < total_record; i++) {
        imagNa = getImageName(i);
        const nam = imagNa.split('_');
        for (let j = 0; j < 11; j++) {
          if (allcode.includes(nam[j])) { shamel = true; }
        }
        if (shamel) {
          actp += 1;
          newContent.push(<Card np={actp} key={i} ip={i} quantities={quantities} setQuantities={setQuantities} />);
          shamel = false;
        }
      }
      
    









    setContent(newContent);
  };

  const setjcode= (e) => {  jcode="hadi Jalal test 1" ; setMessage(jcode); };
  
  const handleInputChange = (e) => { setMyvar(e.target.value); };
  const handleInputChange2 = (e) => {     setMyphone(e.target.value);    };
  tanzimby = myvar + "  [" + myphone + "]";
  const handleClick = () => {
    if (tanzimby.length > 10) {
      
      const qu=quantities;
      jcode=generatePdf(qu, tanzimby);
      setMessage(jcode);
      
    } else {
      const ui = quantities.reduce((a, b) => a + b, 0);
      if (ui < 20)
        alert('ّ تعداد موارد منتخب باید حداقل 20 کارت باشد');
      else
        alert('لطفا نام به انگلیسی و شماره موبایل را وارد کنید');
    }
  };
  const handleClickversion = (event) => {  if (event.shiftKey) {alert("pressed")};   setMessage(jcode);    };

  const handleCheckboxChange = (index, checked) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = checked;
    setCheckedStates(newCheckedStates);
    allcode = "";
    newCheckedStates.forEach((state, idx) => {
      if (state) { allcode += "." + elcode[idx]; }
      
      clearContent();
        addNewContent();
    });
  };
  const dy=38

  const checkboxes = [
    //{ id: 1, x: 420, y: 10, label: 'Top Headers' },
    { id: 2, x: 300, y: 10, label:      ' Birthday' },
    { id: 3, x: 300, y: 10+dy*1, label: ' Nostalogy' },
    { id: 4, x: 300, y: 10+dy*2, label: ' Friendship' },
    { id: 5, x: 300, y: 10+dy*3, label: ' Fun & Cool' },
    { id: 6, x: 300, y: 10+dy*4, label: ' Year Event' },
    { id: 7, x: 300, y: 10+dy*5, label: ' Kids & Teen.s' },
    { id: 8, x: 300, y: 10+dy*6, label: ' Metaphor' },
    { id: 9, x: 300, y: 10+dy*7, label: ' Persian' },
    { id: 10, x:300, y: 10+dy*8, label: ' Loc.&History' },
    
  ];

  
 
  const [message, setMessage] = useState('');
  //setMessage(jcode);
  

/** +++++++++=:   ++++++++.-++++++++++  ++++= -++++   =++++++++=   :+++=   =++=
  ++++=  =+++.  ++++=       =++++     ++++= -++++   =+++- :++++  :++++=  =++=
  ++++= :++++   ++++=       =++++     ++++= -++++   =+++- -+++=  :+++++=.=++=
  +++++==++-    ++++++++    =++++     ++++= -++++   =+++==++=:   :++++++++++=
  ++++=  =+++.  ++++-       =++++     ++++= -++++   =+++: .++++  :+++-:+++++=
  ++++=  =+++.  ++++=       =++++     ++++= -++++   =+++: .++++  :+++- -++++=
  =====  ====.  ========:   =====      -==++++==    ====: .====  :===:  -====
 */



  return (
    <div className='mdiv'>
      
      <div className="permanent-div">
        <div>
      
        <button  onClick={clearContent}  className='imbo4'> </button>
         {/* <button onClick={addNewContent}>افزودن محتوای جدید</button>*/}
        </div>
        <h2 className="hid4"> . </h2>
        <h2 className="hid4"> . </h2>
        <h2 className="hid4"> . </h2>
          <input  
            type="text"
            value={myvar}
            onChange={handleInputChange}
            placeholder="Name / SHOP Name "
            className="large-input"
            size="30"
          
          
          />
       
        <h2 className="hid2"> .. </h2>
        
         
          <input
            
            type="text"
            value={myphone}
            onChange={handleInputChange2}
            placeholder="E-mail or Mobile"
            size="30"
            className="large-input"
            required
          />
       
        <h2 className="hid4"> . </h2>
        <h2 className="hid4"> . </h2>
        <button onClick={handleClick} className="imbo3"></button>
        <h2 className="hid1"> . </h2>
        
        <button onClick={readFromClipboard} className="invov5">DeCoed</button>
    
        <h className="fo22">Total selected: {ttq}</h>
        <div className='mdiv'>
        <div>      <ContactUs message={jcode} />    </div>
        <div>      <Appo   varoo={myphone}/>    </div>
          {checkboxes.map((checkbox) => (
            <div key={checkbox.id} style={{color :'black',fontSize:23 , padding :3 , position: 'absolute', top: checkbox.y, left: checkbox.x }}>
              
              <input
                type="checkbox"
                
                checked={checkedStates[checkbox.id - 1]}
                onChange={(e) => handleCheckboxChange(checkbox.id - 1, e.target.checked)}
              
                
                 />
              <label>{checkbox.label}</label>
             
            
            </div>
            
          ))}
           
        
        <button onClick={handleClickversion} className="invov4">  Version!   </button>
        
       
        </div>
                
      </div>
      
      <Overlay content={content} />
      {Fordivfix}
     
    </div>
  );
}

export default App;
