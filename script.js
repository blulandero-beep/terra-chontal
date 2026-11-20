const {team,menu,curios,special}=window.TERRA_DATA;


/* Fotografías personalizadas del menú */



const menuPhotos = {

  // ENTRADAS
  "Trilogía de Tamalitos Chontales": "assets/menu/trilogia_tamalitos.jpg",
  "Tostada de Salpicón de Pejelagarto y Cacao": "assets/menu/tostada_pejelagarto.jpg",
  "Empanaditas de Plátano Macho Rellenas de Minilla": "assets/menu/empanaditas_platano.jpg",
  "Ceviche Blanco de Robalo del Grijalva con Mango Criollo": "assets/menu/ceviche_robalo.jpg",
  "Panuchos Tabasqueños de Pato en Chirmol": "assets/menu/panuchos_pato.jpg",
  "Croquetas de Yuca y Queso de Poro de Balancán": "assets/menu/croquetas_yuca.jpg",

  // PLATOS FUERTES
  "Pejelagarto Asado a las Brasas sobre Emulsión de Amashito": "assets/menu/pejelagarto_asado.jpg",
  "Puchero Tabasqueño en Dos Tiempos": "assets/menu/puchero_tabasqueno.jpg",
  "Pollo en Chirmol Ancestral": "assets/menu/pollo_chirmol.jpg",
  "Pescado en Hoja de Momo (Hierba Santa)": "assets/menu/pescado_momo.jpg",
  "Cerdo en Mole de Plátano Macho (Mone de Cerdo)": "assets/menu/cerdo_mole_platano.jpg",
  "Uliche de Pavo de Patio": "assets/menu/uliche_pavo.jpg",

  // POSTRES
  "Texturas de Cacao de la Chontalpa": "assets/menu/texturas_cacao.jpg",
  "Dulce de Oreja de Mico con Queso de Poro": "assets/menu/oreja_mico.jpg",
  "Torrejas de Yuca en Miel de Caña": "assets/menu/torrejas_yuca.jpg",
  "Flan de Plátano Macho y Caramelo de Ron": "assets/menu/flan_platano.jpg",
  "Dulce de Coco Tierno con Piña Asada": "assets/menu/dulce_coco_pina.jpg",
  "Mousse de Guanábana y Pimienta Gorda": "assets/menu/mousse_guanabana.jpg",

  // BEBIDAS
  "Pozol de Cacao en Copa Fría": "assets/menu/pozol_cacao.jpg",
  "Chorote Fermentado Refrescante": "assets/menu/chorote.jpg",
  "Agua de Matalí con Limón Criollo": "assets/menu/agua_matali.jpg",
  "Polvillo Tabasqueño Batido": "assets/menu/polvillo_tabasqueno.jpg",
  "Tepache de Piña de Huimanguillo y Piloncillo": "assets/menu/tepache_pina.jpg",
  "Licor Artesanal de Cacao y Nance (Digestivo)": "assets/menu/licor_cacao_nance.jpg"

};



const img=(id,w=700)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;
const menuGrid=document.querySelector('#menuGrid');
function renderMenu(filter='Todos'){menuGrid.innerHTML='';menu.filter(x=>filter==='Todos'||x[0]===filter).forEach((d,i)=>{const card=document.createElement('article');card.className='menu-card reveal';card.innerHTML=`<img src="${menuPhotos[d[1]] || img(d[5],750)}" alt="${d[1]}" loading="lazy"><div class="menu-card-body"><span class="menu-category">${d[0]}</span><h3>${d[1]}</h3><p>${d[2]}</p><div class="menu-card-bottom"><span class="price">${d[4]}</span><button class="details-btn" type="button">Conocer platillo ↗</button></div></div>`;card.querySelector('button').addEventListener('click',()=>openDish(d));menuGrid.append(card);});observeReveals();}
function openDish(d){const dialog=document.querySelector('#dishDialog');document.querySelector('#dishContent').innerHTML=`<span class="section-kicker">${d[0].toUpperCase()}</span><h2>${d[1]}</h2><p>${d[2]}</p><p><b>Inspiración e historia:</b> ${d[3]}</p>
<p class="dialog-price">${d[4]}</p>
`;dialog.showModal();}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');b.classList.add('active');renderMenu(b.dataset.filter)}));renderMenu();

/* Fotografías personalizadas de las especialidades */
const specialPhotos = {
  "Tortuga en Verde · versión adaptada": "assets/especialidades/tortuga_verde.jpg",

  "Robalo a la Tabasqueña en Costra de Pepita y Amashito": "assets/especialidades/robalo_tabasquena.jpg",

  "Pato en Pipián Negro de Chontalpa": "assets/especialidades/pato_pipian_negro.jpg"
};

const specialGrid=document.querySelector('#specialGrid');special.forEach(s=>{const el=document.createElement('article');el.className='special-card reveal';el.innerHTML=`<img src="${
specialPhotos[s[0]] || img(s[4],850)
}" alt="${s[0]}" loading="lazy"><div><h3>${s[0]}</h3><p>${s[1]}</p><small>INGREDIENTES PRINCIPALES</small><p>${s[2]}</p>
<span class="special-price">${s[3]}</span>
</div>`;specialGrid.append(el)});
const curiosGrid=document.querySelector('#curiosGrid');curios.forEach((c,i)=>{const el=document.createElement('article');el.className='curio-card reveal';el.innerHTML=`<span class="curio-icon">${c[2]}</span><h3>${String(i+1).padStart(2,'0')} · ${c[0]}</h3><p>${c[1]}</p>`;curiosGrid.append(el)});
const teamList=document.querySelector('#teamList');
// Coloca aquí las fotografías autorizadas de cada integrante.
// Si aún no tienes alguna imagen, se mostrarán sus iniciales.
const teamPhotos=[
  'assets/equipo/david.jpg',
  'assets/equipo/milagros.jpg',
  'assets/equipo/juan.jpg',
  'assets/equipo/blanca.jpg',
  'assets/equipo/yamili.jpg',
  'assets/equipo/tania.jpg',
  'assets/equipo/alexis.jpg',
  'assets/equipo/shadany.jpg',
  'assets/equipo/camila.jpg',
  'assets/equipo/yoly.jpg',
  'assets/equipo/jissel.jpg',
  'assets/equipo/jose.png'
];
function initials(name){return name.split(' ').filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase()}
function setTeamPhoto(container,name,photo){
  container.replaceChildren();
  if(!photo){container.textContent=initials(name);return}
  const image=document.createElement('img');
  image.src=photo;
  image.alt=`Fotografía de ${name}`;
  image.loading='lazy';
  image.onerror=()=>{container.replaceChildren(document.createTextNode(initials(name)))};
  container.append(image);
}
function selectTeam(i){
  const t=team[i];
  if(!t)return;
  document.querySelectorAll('.team-person').forEach((p,n)=>{
    p.classList.toggle('selected',n===i);
    p.setAttribute('aria-selected',n===i?'true':'false');
  });
  setTeamPhoto(document.querySelector('#teamAvatar'),t[0],teamPhotos[i]);
  document.querySelector('#teamName').textContent=t[0];
  document.querySelector('#teamMeta').textContent=`${t[1]} · ${t[2]}`;
  document.querySelector('#teamBio').textContent=t[3];
}
teamList.replaceChildren();
team.forEach((t,i)=>{
  const b=document.createElement('button');
  b.type='button';b.className='team-person'+(i===0?' selected':'');
  b.setAttribute('role','option');
  b.setAttribute('aria-selected',i===0?'true':'false');
  const avatar=document.createElement('span');avatar.className='team-avatar';
  setTeamPhoto(avatar,t[0],teamPhotos[i]);
  const name=document.createElement('b');name.textContent=t[0];
  const age=document.createElement('small');age.textContent=t[1];
  b.append(avatar,name,age);
  b.addEventListener('click',()=>selectTeam(i));
  teamList.append(b);
});
selectTeam(0);
const navToggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.main-nav');navToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false')}));

/* BITÁCORA VISUAL - 18 FOTOGRAFÍAS */

const galeriaPracticas = document.querySelector('.gallery-grid');

galeriaPracticas.innerHTML = Array.from({ length: 18 }, (_, i) => {
  const numero = i + 1;
  const foto = `assets/practicas/fotos/${numero}.jpeg`;

  const clase = numero === 1 ? ' tall' :
                numero === 4 ? ' wide' : '';

  return `
    <button class="gallery-item${clase}"
            type="button"
            data-full="${foto}">
      <img src="${foto}"
           alt="Práctica gastronómica ${numero}"
           loading="lazy">
    </button>
  `;
}).join('');

const lightbox=document.querySelector('#lightbox');document.querySelectorAll('.gallery-item').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#lightboxImage').src=b.dataset.full;lightbox.showModal()}));document.querySelector('.close-lightbox').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});document.querySelector('.close-dish').addEventListener('click',()=>document.querySelector('#dishDialog').close());

/* RESERVACIONES TERRA CHONTAL - FORMSPREE */

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();

dateInput.min = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().slice(0, 10);

const reservationForm = document.querySelector('#reservationForm');
const formFeedback = document.querySelector('#formFeedback');

reservationForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!reservationForm.reportValidity()) return;

  const button = reservationForm.querySelector('button[type="submit"]');
  const originalText = button.innerHTML;

  button.disabled = true;
  button.textContent = 'Enviando solicitud...';
  formFeedback.textContent = 'Enviando tu solicitud...';

  try {
    const data = new FormData(reservationForm);

    data.append(
      '_subject',
      'Nueva solicitud de reservación - Terra Chontal'
    );

    const response = await fetch(
      'https://formspree.io/f/mbgokvkp',
      {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error('No se pudo enviar la solicitud');
    }

    formFeedback.textContent =
      '¡Solicitud enviada correctamente! Tu reservación está pendiente de confirmación.';

formFeedback.style.display = 'block';
formFeedback.style.visibility = 'visible';
formFeedback.style.opacity = '1';
formFeedback.style.color = '#173323';
formFeedback.style.backgroundColor = '#e5f1e7';
formFeedback.style.padding = '15px';
formFeedback.style.borderRadius = '10px';
formFeedback.style.border = '1px solid #8db99a';
formFeedback.style.fontWeight = '600';

formFeedback.scrollIntoView({
  behavior: 'smooth',
  block: 'center'
});

    reservationForm.reset();

  } catch (error) {
    formFeedback.textContent =
      'No fue posible enviar tu solicitud. Inténtalo nuevamente.';

  } finally {
    button.disabled = false;
    button.innerHTML = originalText;
  }
});

function observeReveals(){const items=document.querySelectorAll('.reveal:not(.visible)');if(!('IntersectionObserver'in window)){items.forEach(x=>x.classList.add('visible'));return}const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});items.forEach(x=>io.observe(x))}observeReveals();document.querySelector('#year').textContent=new Date().getFullYear();
