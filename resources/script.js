let target = document.querySelector('.maincontent');
let project1 = document.querySelector('#project1');
let project2 = document.querySelector('#project2');
let project3 = document.querySelector('#project3');
let projects = document.querySelector('#projects');

target.addEventListener('click', (e = () => {
    console.log(target.scrollTop);
}))

target.addEventListener('scroll', (e = () => {
    let scrollTop = target.scrollTop;
    const x = window.matchMedia('(max-width: 600px)')
    const y = window.matchMedia('(max-width: 1200px)')
    const z = window.matchMedia('(min-width: 1201px)')
    if(x.matches) {
        if(scrollTop < 356) {
            p1height = 167;
            p2height = 167;
            p3height = 167;
            maxHeight = 610;
        } else if(scrollTop > 755) {
            p1height = 32;
            p2height = 32;
            p3height = 32;
            maxHeight = 206;
        } else {
            if(scrollTop < 487){
                p1height = 167 - ((167 - 32) * ((scrollTop - 356) / 133));
                p2height = 167;
                p3height = 498;
                maxHeight = 610 - ((610 - 206) * ((scrollTop - 356) / 399));
            } else if(scrollTop < 620){
                p1height = 32;
                p2height = 167 - ((167 - 32) * ((scrollTop - 487) / 133));
                p3height = 167;
                maxHeight = 610 - ((610 - 206) * ((scrollTop - 356) / 399));
            } else if(scrollTop <= 755){
                p1height = 32;
                p2height = 32;
                p3height = 167 - ((167 - 32) * ((scrollTop - 620) / 133));
                maxHeight = 610 - ((610 - 206) * ((scrollTop - 356) / 399));
            } 
        }
    } else if(y.matches){
        if(scrollTop < 426) {
            p1height = 330;
            p2height = 330;
            p3height = 330;
            maxHeight = 1200;
        } else if(scrollTop > 1224) {
            p1height = 61;
            p2height = 61;
            p3height = 61;
            maxHeight = 393;
        } else {
            if(scrollTop < 692){
                p1height = 330 - ((330 - 61) * ((scrollTop - 426) / 266));
                p2height = 330;
                p3height = 330;
                maxHeight =  1200 - ((1200 - 393) * ((scrollTop - 426) / 798));
            } else if(scrollTop < 958){
                p1height = 61;
                p2height = 330 - ((330 - 61) * ((scrollTop - 692) / 266));
                p3height = 330;
                maxHeight =  1200 - ((1200 - 393) * ((scrollTop - 426) / 798));
            } else if(scrollTop <= 1224){
                p1height = 61;
                p2height = 61;
                p3height = 330 - ((330 - 61) * ((scrollTop - 958) / 266));
                maxHeight =  1200 - ((1200 - 393) * ((scrollTop - 426) / 798));
            } 
        }
    } else if(z.matches){
        if(scrollTop < 415) {
            p1height = 498;
            p2height = 498;
            p3height = 498;
            maxHeight = 1691;
        } else if(scrollTop > 1630) {
            p1height = 91;
            p2height = 91;
            p3height = 91;
            maxHeight = 695;
        } else {
            if(scrollTop < 820){
                p1height = 498 - ((498 - 91) * ((scrollTop - 415) / 405));
                p2height = 498;
                p3height = 498;
                maxHeight =  1691 - ((1691 - 695) * ((scrollTop - 415) / 1060));
            } else if(scrollTop < 1225){
                p1height = 91;
                p2height = 498 - ((498 - 91) * ((scrollTop - 820) / 405));
                p3height = 498;
                maxHeight = 1691 - ((1691 - 695) * ((scrollTop - 415) / 1060));
            } else if(scrollTop <= 1630){
                p1height = 91;
                p2height = 91;
                p3height = 498 - ((498 - 91) * ((scrollTop - 1225) / 405));
                maxHeight = 1691 - ((1691 - 695) * ((scrollTop - 415) / 1060));
            } 
        }
    }
    

    project1.style.maxHeight = p1height+'px';
    project2.style.maxHeight = p2height+'px';
    project3.style.maxHeight = p3height+'px';
    projects.style.maxHeight = maxHeight+'px';

}))

let button = document.querySelector('#funfacticon');
let facts = [document.querySelector('#funfact1'), document.querySelector('#funfact2'), document.querySelector('#funfact3'), document.querySelector('#funfact4'), document.querySelector('#funfact5')];

facts[0].style.display = 'none';
button.addEventListener('click', (e = () => {
    let currentDisplay = facts[0].style.display;
    if(currentDisplay === 'none') {
        facts.forEach((e) => e.style.display = 'inline');
    } else {
        facts.forEach((e) => e.style.display = 'none');
    }
}))

let email = document.querySelector('#email').innerHTML;
let copyIcon = document.querySelector('#copy');

const copy = async () => {
    try {
        await navigator.clipboard.writeText(email);
        console.log('copied!')
    } catch (err) {
        console.log('could not copy');
    }
}

copyIcon.addEventListener('click', copy);