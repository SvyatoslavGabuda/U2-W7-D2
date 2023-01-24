const arrDiLibri = [];

class Libro {
  constructor(titolo, anno, autore) {
    this.titolo = titolo;
    this.annoPublicazione = anno;
    this.autore = autore;
  }
}

for (let i = 0; i < 106; i++) {
  arrDiLibri[i] = new Libro(`titolo ${i}`, 1900 + i, `Autore ${i} `);
}

console.log(arrDiLibri);

class Paginazione {
  constructor(items, pageSize) {
    this.items = items;
    this.pageSize = pageSize;
  }

  creaPagine(items, pageSize) {
    const body = document.querySelector("body");
    const container = document.createElement("div");
    items.forEach((libro) => {
      const paragrafo = document.createElement("p");
      paragrafo.innerText = `${libro.titolo} di ${libro.autore} pubblicato nel anno ${libro.annoPublicazione}`;
      container.appendChild(paragrafo);
      body.appendChild(container);
    });
    const contenitoreBtnPag = document.createElement("div");
    const elementi = document.querySelectorAll("p");
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("nextBtn");
    nextBtn.innerText = "next";
    const previousBtn = document.createElement("button");
    previousBtn.classList.add("previousBtn");
    previousBtn.innerText = "previous";
    const limiteElementiPerPag = pageSize;

    const numeroMaxPagine = Math.ceil(items.length / limiteElementiPerPag);

    let paginaCorrente = 1;

    const creaBtnPagine = function () {
      contenitoreBtnPag.appendChild(previousBtn);
      for (let i = 1; i <= numeroMaxPagine; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        btn.classList.add("numerazionePagina");
        contenitoreBtnPag.appendChild(btn);
      }
      contenitoreBtnPag.appendChild(nextBtn);
      body.appendChild(contenitoreBtnPag);
    };

    const impostaPaginaCorrente = function (numPag) {
      paginaCorrente = numPag;

      const start = (numPag - 1) * limiteElementiPerPag;
      const end = numPag * limiteElementiPerPag;

      elementi.forEach((item, index) => {
        item.classList.add("hide");
        if (index >= start && index < end) {
          item.classList.remove("hide");
        }
      });
      if (paginaCorrente === 1) {
        previousBtn.setAttribute("disabled", true);
      } else {
        previousBtn.removeAttribute("disabled");
      }
      if (paginaCorrente === numeroMaxPagine) {
        nextBtn.setAttribute("disabled", true);
      } else {
        nextBtn.removeAttribute("disabled");
      }
    };
    creaBtnPagine();
    impostaPaginaCorrente(1);

    previousBtn.addEventListener("click", () => {
      impostaPaginaCorrente(paginaCorrente - 1);
    });

    nextBtn.addEventListener("click", () => {
      impostaPaginaCorrente(paginaCorrente + 1);
    });

    const bottoni = document.querySelectorAll(".numerazionePagina");

    bottoni.forEach((btn) => {
      const pageIndex = Number(btn.innerText);
      if (pageIndex) {
        btn.addEventListener("click", () => {
          impostaPaginaCorrente(pageIndex);
        });
      }
    });

    return;
  }
}
const pagine = new Paginazione(arrDiLibri, 10);

pagine.creaPagine(arrDiLibri, 10);

// // ---------------------------Creazione pagine senza usare le classi ----------------------------

// const contenuto = document.getElementById("contenuto");

// arrDiLibri.forEach((libro) => {
//   const paragrafo = document.createElement("p");
//   paragrafo.innerText = `${libro.titolo} di ${libro.autore} pubblicato nel anno ${libro.annoPublicazione}`;
//   contenuto.appendChild(paragrafo);
// });

// const numeroPagine = document.getElementById("numeroPagine");
// const elementi = document.querySelectorAll("p");
// const nextBtn = document.getElementById("next");
// const previousBtn = document.getElementById("previous");

// const limiteElementiPerPag = 10;

// const contaPagine = Math.ceil(arrDiLibri.length / limiteElementiPerPag);

// let paginaCorrente = 1;

// const creaBtnPagine = function () {
//   for (let i = 1; i <= contaPagine; i++) {
//     const btn = document.createElement("button");
//     btn.innerText = i;
//     btn.classList.add("numerazionePagina");
//     numeroPagine.appendChild(btn);
//   }
// };

// const impostaPaginaCorrente = function (numPag) {
//   paginaCorrente = numPag;

//   const prevRange = (numPag - 1) * limiteElementiPerPag;
//   const currRange = numPag * limiteElementiPerPag;

//   elementi.forEach((item, index) => {
//     item.classList.add("hide");
//     if (index >= prevRange && index < currRange) {
//       item.classList.remove("hide");
//     }
//   });
// };

// window.addEventListener("load", () => {
//   creaBtnPagine();
//   impostaPaginaCorrente(1);

//   previousBtn.addEventListener("click", () => {
//     impostaPaginaCorrente(paginaCorrente - 1);
//   });

//   nextBtn.addEventListener("click", () => {
//     impostaPaginaCorrente(paginaCorrente + 1);
//   });

//   const bottoni = document.querySelectorAll(".numerazionePagina");

//   bottoni.forEach((btn) => {
//     const pageIndex = Number(btn.innerText);
//     if (pageIndex) {
//       btn.addEventListener("click", () => {
//         impostaPaginaCorrente(pageIndex);
//       });
//     }
//   });
// });
