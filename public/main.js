document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', (e) => {
    let nev = document.getElementById('nev').value;
    let tipus = document.getElementById('tipus').value;
    let ar = document.getElementById('ar').value;
    let akkumlator = document.getElementById('akkumlator').value;
    let nevHiba = document.getElementById('nevHiba');
    let tipusHiba = document.getElementById('tipusHiba');
    let arHiba = document.getElementById('arHiba');
    let akkumlatorHiba = document.getElementById('akkumlatorHiba');

    if (nev == '') {
      e.preventDefault();
      nevHiba.style.display = 'initial';
    } else {
      nevHiba.style.display = 'none';
    }
    if (tipus == '') {
      e.preventDefault();
      tipusHiba.style.display = 'initial';
    } else {
      tipusHiba.style.display = 'none';
    }
    if (ar == '') {
      e.preventDefault();
      arHiba.style.display = 'initial';
    } else {
      arHiba.style.display = 'none';
    }
    if (akkumlator == '') {
      e.preventDefault();
      akkumlatorHiba.style.display = 'initial';
    } else {
      akkumlatorHiba.style.display = 'none';
    }
  });
});
