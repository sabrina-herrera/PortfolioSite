// PROJECT CASCADE FEATURE

let target = document.querySelector('.maincontent');
let project1 = document.querySelector('#project1');
let project2 = document.querySelector('#project2');
let project3 = document.querySelector('#project3');
let projects = document.querySelector('#projects');

target.addEventListener('click', (e = () => {
    console.log(target.scrollTop);
}))

// TEST BOUNDING CLIENT RECT

function update() {
    const coordinates = [];
    const coordinates2 = [];
    const elem = document.querySelector('#projectstop');
    const elem2 = document.querySelector('#projects');
    const rect = elem.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();

    for (const key in rect) {
        if (typeof rect[key] !== 'function') {
            coordinates.push(`${key} : ${rect[key]}`);
        }
    }

    for (const key in rect2) {
        if (typeof rect2[key] !== 'function') {
            coordinates2.push(`${key} : ${rect2[key]}`);
        }
    }
    console.log(coordinates);
    console.log(coordinates2);
}

target.addEventListener('click', update);
update();


// PROJECT CASCASE CONT

const projectCascade = () => {
    let scrollTop = target.scrollTop;
    const x = window.matchMedia('(max-width: 680px)')
    const y = window.matchMedia('(max-width: 1200px)')
    const z = window.matchMedia('(min-width: 1201px)')
    if(x.matches) {
        if(scrollTop < 355) {
            p1height = 166;
            p2height = 166;
            p3height = 166;
            maxHeight = 593;
        } else if(scrollTop > 754) {
            p1height = 32;
            p2height = 32;
            p3height = 32;
            maxHeight = 191;
        } else {
            if(scrollTop < 488){
                p1height = 166 - ((166 - 32) * ((scrollTop - 355) / 133));
                p2height = 166;
                p3height = 498;
                maxHeight = 593 - ((593 - 191) * ((scrollTop - 355) / 399));
            } else if(scrollTop < 621){
                p1height = 32;
                p2height = 166 - ((166 - 32) * ((scrollTop - 488) / 133));
                p3height = 166;
                maxHeight = 593 - ((593 - 191) * ((scrollTop - 355) / 399));
            } else if(scrollTop <= 754){
                p1height = 32;
                p2height = 32;
                p3height = 166 - ((166 - 32) * ((scrollTop - 621) / 133));
                maxHeight = 593 - ((593 - 191) * ((scrollTop - 355) / 399));
            } 
        }
    } else if(y.matches){
        if(scrollTop < 518) {
            p1height = 330;
            p2height = 330;
            p3height = 330;
            maxHeight = 1183;
        } else if(scrollTop > 1325) {
            p1height = 61;
            p2height = 61;
            p3height = 61;
            maxHeight = 376;
        } else {
            if(scrollTop < 787){
                p1height = 330 - ((330 - 61) * ((scrollTop - 518) / 269));
                p2height = 330;
                p3height = 330;
                maxHeight =  1183 - ((1183 - 376) * ((scrollTop - 518) / 807));
            } else if(scrollTop < 1056){
                p1height = 61;
                p2height = 330 - ((330 - 61) * ((scrollTop - 787) / 269));
                p3height = 330;
                maxHeight =  1183 - ((1183 - 376) * ((scrollTop - 518) / 807));
            } else if(scrollTop <= 1325){
                p1height = 61;
                p2height = 61;
                p3height = 330 - ((330 - 61) * ((scrollTop - 1056) / 269));
                maxHeight =  1183 - ((1183 - 376) * ((scrollTop - 518) / 807));
            } 
        }
    } else if(z.matches){
        if(scrollTop < 498) {
            p1height = 498;
            p2height = 498;
            p3height = 498;
            maxHeight = 1691;
        } else if(scrollTop > 1692) {
            p1height = 91;
            p2height = 91;
            p3height = 91;
            maxHeight = 496;
        } else {
            if(scrollTop < 896){
                p1height = 498 - ((498 - 91) * ((scrollTop - 498) / 398));
                p2height = 498;
                p3height = 498;
                maxHeight =  1691 - ((1691 - 496) * ((scrollTop - 498) / 1194));
            } else if(scrollTop < 1294){
                p1height = 91;
                p2height = 498 - ((498 - 91) * ((scrollTop - 896) / 398));
                p3height = 498;
                maxHeight = 1691 - ((1691 - 496) * ((scrollTop - 498) / 1194));
            } else if(scrollTop <= 1692){
                p1height = 91;
                p2height = 91;
                p3height = 498 - ((498 - 91) * ((scrollTop - 1294) / 398));
                maxHeight = 1691 - ((1691 - 496) * ((scrollTop - 498) / 1194));
            } 
        }
    }
    
    project1.style.maxHeight = p1height+'px';
    project2.style.maxHeight = p2height+'px';
    project3.style.maxHeight = p3height+'px';
    projects.style.maxHeight = maxHeight+'px';

}

target.addEventListener('scroll', projectCascade);
projectCascade();

// FUN FACT TRIGGER

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

// COPY EMAIL FUNCTION

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