const form=document.getElementById('quoteForm');
form.addEventListener('submit',(e)=>{e.preventDefault();const data=new FormData(form);const name=data.get('name');const service=data.get('service');const details=data.get('details');const message=`Hello MR. M's GRAPHICS, I'd like to request a quote.\n\nName: ${name}\nService: ${service}\nProject details: ${details}`;window.open(`https://wa.me/2348167800373?text=${encodeURIComponent(message)}`,'_blank','noopener');});
document.getElementById('year').textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.desktop-nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('mobile-open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('mobile-open');toggle.setAttribute('aria-expanded','false')}));