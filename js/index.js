// Sidebar btns
var btnProfile = null;
var btnResume = null;
var btnPortfolio = null;

// Portfolio sections
var aboutMeProfile = null;
var resume = null;
var portfolio = null;

const activeColor = '#56B887';
const inactiveColor = '#9BAAB3';

document.addEventListener('DOMContentLoaded', function () {
    initHtmlElements();
    initButtons()  
    
}, false);






function setColorBtn(btn, color) {
    
   
    if (btn.active) return 
        
        btn.children[0].style.fill = color;
    
}


function initButtons() {
    //profile
    btnProfile.element.addEventListener('click', function() {
        if (btnProfile.active) return;

        // btnProfile.element.style.background = ' #56B887';
        
        btnProfile.active = true;
        btnPortfolio.active = false;
        btnResume.active = false;
        
        // adaugam clasa in html
        aboutMeProfile.style.display = 'flex';
        resume.style.display = 'none';
        portfolio.style.display = 'none';

        setColorBtn(btnProfile.element, activeColor)
        setColorBtn(btnResume.element, inactiveColor)
        setColorBtn(btnPortfolio.element, inactiveColor)
    })

    //resume
    btnResume.element.addEventListener('click', function() {
        if (btnResume.active) return;

        // btnResume.element.style.background = '#56B887';

        
        
        btnProfile.active = false;
        btnPortfolio.active = false;
        btnResume.active = true;
        
        // adaugam clasa in html
        
        aboutMeProfile.style.display = 'none';
        resume.style.display = 'grid';
        portfolio.style.display = 'none';
        setColorBtn(btnProfile.element, inactiveColor)
        setColorBtn(btnResume.element, activeColor)
        setColorBtn(btnPortfolio.element, inactiveColor)
    })

    //portofolio
    btnPortfolio.element.addEventListener('click', function() {
        if (btnPortfolio.active) return;

        // btnPortfolio.element.style.background = '#56B887 ';

        
        
        btnProfile.active = false;
        btnPortfolio.active = true;
        btnResume.active = false;
        
        // adaugam clasa in html
        
        aboutMeProfile.style.display = 'none';
        resume.style.display = 'none';
        portfolio.style.display = 'flex';
        setColorBtn(btnProfile.element, inactiveColor)
        setColorBtn(btnResume.element, inactiveColor)
        setColorBtn(btnPortfolio.element, activeColor)
    })
}



function initHtmlElements() {
    // Sidebar btns
    btnProfile = {
        active: true,
        element: document.getElementById('btn-profile')
    }

    btnResume =  {
        active: false,
        element: document.getElementById('btn-resume')
    }

    btnPortfolio = {
        active: false,
        element: document.getElementById('btn-portfolio')
    }

    // Portfolio sections
    aboutMeProfile = document.querySelector('.about-me-content-wrapper');
    resume = document.querySelector('.resume-content-wrapper');
    portfolio = document.querySelector('.portfolio-content-wrapper');

    setColorBtn(btnProfile.element, activeColor)
}