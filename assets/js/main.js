
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',nav.classList.contains('open'));
  });
}

document.querySelectorAll('.slider-shell').forEach(shell=>{
  const track=shell.querySelector('.review-slider, .gallery-track, [data-slider-track]');
  if(!track) return;
  const step=()=>{
    const item=track.querySelector('.review-card, .gallery-slide, *');
    if(!item) return 360;
    const styles=getComputedStyle(track);
    const gap=parseFloat(styles.columnGap||styles.gap||18);
    return item.getBoundingClientRect().width + gap;
  };
  shell.querySelectorAll('[data-dir]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const dir=btn.getAttribute('data-dir')==='next'?1:-1;
      track.scrollBy({left:dir*step(), behavior:'smooth'});
    });
  });
});

document.querySelectorAll('.whatsapp-contact-form').forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const topic = data.get('topic') || '';
    const message = data.get('message') || '';
    const text = `Hallo ASR-I NAZENDE, ich möchte eine Anfrage senden.\n\nName: ${name}\nTelefon: ${phone}\nThema: ${topic}\nNachricht: ${message}`;
    window.open(`https://wa.me/491732659859?text=${encodeURIComponent(text)}`, '_blank');
  });
});

document.querySelectorAll('.whatsapp-contact-form-tr').forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const topic = data.get('topic') || '';
    const message = data.get('message') || '';
    const text = `Merhaba ASR-I NAZENDE, bir talep göndermek istiyorum.\n\nAd: ${name}\nTelefon: ${phone}\nKonu: ${topic}\nMesaj: ${message}`;
    window.open(`https://wa.me/491732659859?text=${encodeURIComponent(text)}`, '_blank');
  });
});
