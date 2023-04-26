import Logo from '/src/img/logo.png';
import dataMateri from './data/materi';
import dataMentor from './data/mentor';
import {dataJudul, dataBelajarSendiri, dataBelajarBootcamp} from './data/komparasi';
import dataFaqs from './data/faqs';

// Add logo favicon
const favicon = document.querySelector('link[type="image/x-icon"]');
favicon.href = Logo;

// Add logo di navbar
const navLogo = document.getElementById('logo');
navLogo.src = Logo;

// Add logo di section komparasi
const compareLogo = document.getElementById('logoKomparasi');
compareLogo.src = Logo;

// Add logo di footer
const footerLogo = document.getElementById('logoFooter');
footerLogo.src = Logo;

// Add logo di pricing
const priceLogo = document.getElementById('logoPricing');
priceLogo.src = Logo;

// Get modal
const judulModal = document.getElementById('detailJudul');
const isiModal = document.getElementById('detailIsi');

// Add materi card
const materiContainer = document.getElementById('materi');
for (let i = 0; i < dataMateri.length; i++) {
  const j = i + 1;
  // element div untuk card
  const card = document.createElement('div');
  card.classList = 'block max-w-md py-7 px-9 bg-white border border-gray-100 rounded-2xl shadow-xl hover:bg-hitam hover:text-white cursor-pointer';
  card.setAttribute('data-aos', 'zoom-in-up');
  card.setAttribute('data-aos-delay', j * 100);

  // element h5 untuk judul
  const judul = document.createElement('h5');
  judul.classList = 'mb-2 text-xl font-bold tracking-tight';
  judul.innerHTML = `<span class="bg-oren py-1 px-3 me-2 rounded-lg text-hitam">${j}</span>${dataMateri[i].judul}`;
  card.appendChild(judul);

  // element p untuk isi
  const isi = document.createElement('p');
  isi.classList = 'text-abu leading-normal my-9 elipsis';
  isi.innerText = dataMateri[i].isi;
  card.appendChild(isi);

  // elemen button untuk detail (modal)
  const detail = document.createElement('button');
  detail.classList = 'font-semibold';
  detail.innerHTML = 'Lebih lanjut<i class="fa-solid fa-arrow-right fa-sm ps-2"></i>';
  detail.setAttribute('data-modal-target', 'staticModal');
  detail.setAttribute('data-modal-toggle', 'staticModal');
  detail.addEventListener('click', () => {
    judulModal.innerText = dataMateri[i].judul;
    isiModal.innerText = dataMateri[i].isi;
  });
  card.appendChild(detail);

  materiContainer.appendChild(card);
}

// Add data komparasi
const containerJudul = document.getElementById('komparasiJudul');
const containerJudulDua = document.getElementById('komparasiJudulDua');
for (const isi of dataJudul) {
  containerJudul.innerHTML += `<p class="h-24">${isi}</p>`;
  containerJudulDua.innerHTML += `<p class="h-24">${isi}</p>`;
};
const containerSolo = document.getElementById('komparasiSolo');
for (const isi of dataBelajarSendiri) {
  containerSolo.innerHTML += `<p class="h-24">${isi}</p>`;
};
const containerBootcamp = document.getElementById('komparasiBootcamp');
for (const isi of dataBelajarBootcamp) {
  containerBootcamp.innerHTML += `<p class="h-24">${isi}</p>`;
};

// Add mentor
const containerMentor = document.getElementById('my-slider');
for (const mentor of dataMentor) {
  containerMentor.innerHTML += `
  <div>
    <div class="flex justify-center">
      <div class="max-w-xs">
        <div class="slide-img">
          <img src="${mentor.foto}" class="w-full" alt="${mentor.nama}">
        </div>
        <div class="slide-body mt-6">
          <h3 class="text-xl font-bold">${mentor.nama}</h3>
          <h5 class="font-semibold">${mentor.profesi}</h5>
          <p class="text-abu mt-2">${mentor.detail}</p>
          </div>
      </div>
    </div>
  </div>`;
}

// Add list faq
const containerFaqs = document.getElementById('listFaqs');
for (let i = 0; i < dataFaqs.length; i++) {
  containerFaqs.innerHTML += `
  <div id="accordion-flush" data-accordion="open" data-active-classes="bg-white font-bold border-b-0" data-inactive-classes="bg-white font-semibold">
    <h2 id="accordion-flush-heading-${i}">
      <button type="button" class="flex items-center justify-between w-full py-5 text-left border-b border-abu font-semibold" data-accordion-target="#accordion-flush-body-${i}" aria-expanded="false" aria-controls="accordion-flush-body-${i}">
        <span>${dataFaqs[i].judul}</span>
        <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
        </svg>
      </button>
    </h2>
    <div id="accordion-flush-body-${i}" class="hidden" aria-labelledby="accordion-flush-heading-${i}">
      <div class="pb-5 border-b border-abu">
        <p class="mb-2">${dataFaqs[i].isi}</p>
      </div>
    </div>
  </div>`;
};

// Get button go to up
const mybutton = document.getElementById('back-to-top');

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

/** Event scroll go to top */
function backToTop() {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
};
