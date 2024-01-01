let target = document.querySelector('.maincontent');
let project1 = document.querySelector('#project1');
let project2 = document.querySelector('#project2');
let project3 = document.querySelector('#project3');
let projects = document.querySelector('#projects');


target.addEventListener('scroll', (e = () => {
    let scrollTop = target.scrollTop;
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