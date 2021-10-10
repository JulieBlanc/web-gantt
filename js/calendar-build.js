

/* DATE LANGAGE */

const monthFr = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const monthEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayFr = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const dayEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayLetterFr = ["D", "L", "M", "M", "J", "V", "S"];
const dayLetterEn = ["S", "M", "T", "W", "T", "F", "S"];


let allDays = [];
let monthTemp = [];
let allMonths = [];
let allType = [];




/* BUILD DATA ON LOAD -------------------------------------------------------------------------------- 
------------------------------------------------------------------------------------------------------ */

window.onload = function(){


    /* Add scroll events ----------------------------------------------------------- */
    let calendarGantt = document.getElementById("calendar-gantt");
    calendarGantt.addEventListener('scroll', onScroll);
    

    /* DATA: Build array with all dates of the calandar -------------------------- */
    let start = new Date(calendarStart);
    let end = new Date(calendarEnd);

    let date = start;
    date.setDate(date.getDate() - 1)

    do {
        date.setDate(date.getDate()+1);
        let year = date.getFullYear();
        let month = addZero(date.getMonth() + 1);
        let day = addZero(date.getDate());

        formatedDate = year + '-' + month + '-' + day;
        let dateobject = { "formatedDate": formatedDate, "year": year, "month": month, "day": day, "dayWeek": date.getDay() }

        allDays.push(dateobject);

        /* Build array of all month */
        let formatedMonth = year + '-' + month;
        let monthFormated = { "formatedMonth": formatedMonth, "year": year, "month": month, "start": formatedMonth + '-01', "end": formatedMonth + '-' + day }

        monthTemp.push(monthFormated);

        if(day === '01'){
            if(monthTemp.length - 2 > 0){
                allMonths.push(monthTemp[monthTemp.length - 2]);
            } 
        }
    } while (date < end); 

    allMonths.push(monthTemp[monthTemp.length - 1]);


    /* DATA: Transform hex color to RGB -------------------------------------------- */
    for (let i = 0; i < colorType.length; i++) {
        let color = String(colorType[i]);
        let firstLetter = color.charAt(0);
        if(firstLetter == "#"){
           color = hexToRgb(color);
           colorType[i] = color;
        }        
    }

    /* DATA: Create table with all types ---------------------------------------------*/
    for (let i = 0; i < projects.length; i++) {
        if(allType.indexOf(projects[i].type) !== -1){
            /* Value exist */
        } else{
            allType.push(projects[i].type);
        }
    }

    /* CSS: Add css colors for each types (first one is the default color) ---------- */
    for (let i = 0; i < allType.length; i++) {
        let color;
        if(i < colorType.length){
            color = colorType[i]
        }else{
            color = colorType[0];
        }
        let darker = darkerColor(color, .2);
        let css = '[data-type="' + allType[i] + '"]{ --projects-color: rgba(' + color + ', var(--alpha)); --projects-text-color: ' + darker + '; }';
        addcss(css);
    }

    /* CSS: Add CSS custom values --------------------------------------------------- */
    let body = document.getElementsByTagName("body")[0];
    for (let i = 0; i < dimensions.length; i++) {
        body.style.setProperty('--' + dimensions[i].name, dimensions[i].value + "px");

    }
    body.style.setProperty('--all-days', allDays.length + "px");
    console.log(allDays.length)


    /* Create a screenshot of the page for download and print ---------------------- */
    setTimeout(screenshotFunc, 50);

    

};


/* ON SCROLL FUNCTION -------------------------------------------------------------------------------- 
------------------------------------------------------------------------------------------------------ */

let scrollYtemp = 0;
let scrollXtemp = 0;

function onScroll(){
    let elem = this;
    let scrollType = document.querySelectorAll("[data-scroll]")[0].dataset.scroll;

    let docX = elem.scrollWidth;
    let windowX = window.innerWidth;
    let scrollXmax = docX - windowX;

    let docY = elem.scrollHeight;
    let windowY = window.innerHeight;
    let scrollYmax = docY - windowY;


    if(scrollType == "scrollY"){
            let newX = scrollXmax*elem.scrollTop/scrollYmax;
            elem.scrollTo(newX, elem.scrollTop);
    }

    if(scrollType == "scrollX"){
            let newY = scrollYmax*elem.scrollLeft/scrollXmax;
            elem.scrollTo(elem.scrollLeft, newY);
    }
    
}




/* UTILS --------------------------------------------------------------------------------------------- 
------------------------------------------------------------------------------------------------------ */

function textMonthFunc(num){
    let table;
    if(langSite){
        if(langSite == "fr"){
            table = monthFr;
        }else{
            table = monthEn;
        }
    }else{
        table = monthEn;
    }
    num = num - 1;
    let month = table[num];
    return month;
}


function textDayFunc(num, type){
    let table;
    if(langSite){
        if(langSite == "fr"){
            if(type == "letter"){ table = dayLetterFr; }else{ table = dayFr; }                          
        }else{
            if(type == "letter"){ table = dayLetterEn; }else{ table = dayEn; } 
        }
    }else{
        if(type == "letter"){ table = dayLetterEn; }else{ table = dayEn; } 
    }                  
    let day = table[num];
    return day;
                        
}


function addZero(value){
    if(value < 10){
        value = "0" + value.toString();
    }else{
        value = value.toString();
    }
    return value;
}


/* UTILS: COLORS ------------------------------------------------------------------------------------- 
------------------------------------------------------------------------------------------------------ */

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    /* return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
    */
   return parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16); 
  }
  
  function addcss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {// the world
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
}

/* Darker color */
/* https://blog.kodono.info/wordpress/2012/05/22/obtenir-une-couleur-plus-sombre-ou-plus-claire-pour-css-javascript/ */
var pad = function(num, totalChars) {
    var pad = '0';
    num = num + '';
    while (num.length < totalChars) {
        num = pad + num;
    }
    return num;
};
 
// Ratio is between 0 and 1
var changeColor = function(color, ratio, darker) {
    // Trim trailing/leading whitespace
    color = color.replace(/^\s*|\s*$/, '');
 
    // Expand three-digit hex
    color = color.replace(
        /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        '#$1$1$2$2$3$3'
    );
 
    // Calculate ratio
    var difference = Math.round(ratio * 256) * (darker ? -1 : 1),
        // Determine if input is RGB(A)
        rgb = color.match(new RegExp('^rgba?\\(\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '(?:\\s*,\\s*' +
            '(0|1|0?\\.\\d+))?' +
            '\\s*\\)$'
        , 'i')),
        alpha = !!rgb && rgb[4] != null ? rgb[4] : null,
 
        // Convert hex to decimal
        decimal = !!rgb? [rgb[1], rgb[2], rgb[3]] : color.replace(
            /^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,
            function() {
                return parseInt(arguments[1], 16) + ',' +
                    parseInt(arguments[2], 16) + ',' +
                    parseInt(arguments[3], 16);
            }
        ).split(/,/),
        returnValue;
 
    // Return RGB(A)
    return !!rgb ?
        'rgb' + (alpha !== null ? 'a' : '') + '(' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[0], 10) + difference, darker ? 0 : 255
            ) + ', ' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[1], 10) + difference, darker ? 0 : 255
            ) + ', ' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[2], 10) + difference, darker ? 0 : 255
            ) +
            (alpha !== null ? ', ' + alpha : '') +
            ')' :
        // Return hex
        [
            '#',
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[0], 10) + difference, darker ? 0 : 255
            ).toString(16), 2),
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[1], 10) + difference, darker ? 0 : 255
            ).toString(16), 2),
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[2], 10) + difference, darker ? 0 : 255
            ).toString(16), 2)
        ].join('');
};
var lighterColor = function(color, ratio) {
    return changeColor(color, ratio, false);
};
var darkerColor = function(color, ratio) {
    return changeColor(color, ratio, true);
};



/* ON HOVER PROJETS ----------------------------------------------------------------------------------- 
------------------------------------------------------------------------------------------------------ */

function hoverProjectFunc(index, type){
    let projectTitle = document.querySelectorAll('.title-project[data-line="' + index + '"')[0];
    let project = document.querySelectorAll('.div-project[data-line="' + index + '"')[0];
    projectTitle.classList.add("title-project-hover");
    project.classList.add("project-hover");
}

function leaveProjectFunc(index){
    let projectTitle = document.querySelectorAll('.title-project[data-line="' + index + '"')[0];
    let project = document.querySelectorAll('.div-project[data-line="' + index + '"')[0];
    projectTitle.classList.remove("title-project-hover");
    project.classList.remove("project-hover");

}


/* SCREENSHOT FUNCTION ------------------------------------------------------------------------------- 
------------------------------------------------------------------------------------------------------ */

function screenshotFunc(){

    const screenshotTarget = document.getElementById("canevas-copy");
    const downloadButton = document.getElementById("dowload");
    const imgPrint = document.getElementById("img-print");
    const buttons = document.getElementById("button-group");

    /* delete space in title */
    let newTitle =  title.replace(/\s+/g, "-") // space to -
    .replace(/&/g, `-and-`) // & to and
    .replace(/--/g, `-`); // -- to -

    html2canvas(screenshotTarget).then((canvas) => {

        const base64image = canvas.toDataURL("image/png");
    
        /* open the image in new window */
        // window.open(base64image, '_blank')

        /* Add image to download button */
        downloadButton.href = base64image;
        downloadButton.download = newTitle;

        /* Delete temporary canvas */
        screenshotTarget.remove();

        /* Add img for print */
        imgPrint.src = base64image;

        buttons.style.opacity = 1;

        
    });

}