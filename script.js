const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='65px';nav.style.left='0';nav.style.right='0';nav.style.padding='25px';nav.style.background='#09090b';});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<901)nav.style.display='none'}));
