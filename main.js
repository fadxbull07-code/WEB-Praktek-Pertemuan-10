/* ================================================
   Web Desain II — Demo Project
   File: js/main.js
   Keterangan: JavaScript sederhana untuk interaksi form
   Pertemuan 1 s/d 10
   ================================================ */


/* ------------------------------------------------
   PERTEMUAN 1: Dasar JavaScript
   console.log untuk memastikan JS terhubung
   (Buka DevTools > Console untuk melihat)
   ------------------------------------------------ */
console.log("JS berhasil terhubung! Web Desain II - Demo Project");
console.log("Pertemuan 1-10 | Bootstrap 4.5.2 + Font Awesome 5");


/* ------------------------------------------------
   PERTEMUAN 7: Validasi Form
   Fungsi ini dipanggil saat tombol "Kirim" diklik
   ------------------------------------------------ */
function kirimForm() {

  // Ambil nilai dari setiap input form
  var nama    = document.getElementById('inputNama').value.trim();
  var email   = document.getElementById('inputEmail').value.trim();
  var hp      = document.getElementById('inputHP').value.trim();
  var jalur   = document.getElementById('selectJalur').value;
  var setuju  = document.getElementById('checkSetuju').checked;

  // Area notifikasi
  var notifikasi = document.getElementById('notifikasi');

  // ---- Validasi: cek apakah ada field yang kosong ----
  if (nama === '' || email === '' || hp === '' || jalur === '') {
    // Tampilkan pesan error (Bootstrap alert-danger)
    notifikasi.innerHTML =
      '<div class="alert alert-danger mt-3">' +
      '<i class="fas fa-times-circle mr-2"></i>' +
      '<strong>Gagal!</strong> Harap isi semua field yang wajib diisi.' +
      '</div>';
    return; // hentikan fungsi, jangan lanjut
  }

  // ---- Validasi: cek checkbox persetujuan ----
  if (!setuju) {
    notifikasi.innerHTML =
      '<div class="alert alert-warning mt-3">' +
      '<i class="fas fa-exclamation-triangle mr-2"></i>' +
      '<strong>Perhatian!</strong> Anda harus menyetujui syarat dan ketentuan.' +
      '</div>';
    return;
  }

  // ---- Jika semua valid: tampilkan pesan sukses ----
  notifikasi.innerHTML =
    '<div class="alert alert-success mt-3">' +
    '<i class="fas fa-check-circle mr-2"></i>' +
    '<strong>Berhasil!</strong> Pendaftaran atas nama <strong>' + nama + '</strong> ' +
    'telah dikirim. Kami akan menghubungi Anda melalui email: ' + email +
    '</div>';

  // Reset form setelah berhasil dikirim (opsional)
  document.getElementById('formPendaftaran').reset();
}


/* ------------------------------------------------
   BONUS: Efek smooth highlight pada navbar
   Saat scroll, navbar mendapat shadow lebih dalam
   (JavaScript DOM sederhana)
   ------------------------------------------------ */
window.addEventListener('scroll', function () {

  var navbar = document.querySelector('.navbar');

  // Jika scroll lebih dari 50px, tambah class shadow
  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }

});


/* ================================================
   PERTEMUAN 9: Interaksi Button
   Demo fungsi JavaScript untuk tombol di section P9
   ================================================ */

/* ------------------------------------------------
   PERTEMUAN 9: Fungsi demo klik button
   Menampilkan alert Bootstrap saat tombol diklik
   (Bisa dicoba mahasiswa dari konsol / onclick)
   ------------------------------------------------ */
function demoKlikButton(namaButton) {
  console.log('Tombol diklik: ' + namaButton);

  // Tampilkan notifikasi di area #notif-p9 jika ada
  var notifP9 = document.getElementById('notif-p9');
  if (notifP9) {
    notifP9.innerHTML =
      '<div class="alert alert-info alert-dismissible fade show mt-2">' +
      '<i class="fas fa-hand-pointer mr-2"></i>' +
      'Tombol <strong>' + namaButton + '</strong> berhasil diklik!' +
      '<button type="button" class="close" data-dismiss="alert">' +
      '<span>&times;</span></button>' +
      '</div>';
  }
}

/* ------------------------------------------------
   PERTEMUAN 9: Toggle button state (active/inactive)
   Contoh mengubah state tombol secara dinamis dengan JS
   ------------------------------------------------ */
document.addEventListener('DOMContentLoaded', function () {

  // Tambahkan event listener pada semua tombol di section #button-image
  var sectionP9 = document.getElementById('button-image');
  if (sectionP9) {
    var tombolSemua = sectionP9.querySelectorAll('.btn:not([disabled])');
    tombolSemua.forEach(function (tombol) {
      tombol.addEventListener('click', function () {
        // Log ke console setiap tombol yang diklik (P9 demo)
        var labelTombol = tombol.innerText.trim() || tombol.value || 'Tombol';
        console.log('[P9] Tombol diklik: "' + labelTombol + '"');
      });
    });
  }

  /* ------------------------------------------------
     Highlight nav-link aktif berdasarkan posisi scroll
     (IntersectionObserver — modern JS DOM)
     ------------------------------------------------ */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Hapus active dari semua link
          navLinks.forEach(function (link) {
            link.classList.remove('active');
          });
          // Tambah active ke link yang sesuai
          var activeLink = document.querySelector(
            '.nav-link[href="#' + entry.target.id + '"]'
          );
          if (activeLink) {
            activeLink.classList.add('active');
            console.log('Section aktif: #' + entry.target.id);
          }
        }
      });
    }, { threshold: 0.3 }); // 30% section terlihat = aktif

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

});


/* ================================================
   PERTEMUAN 10: Helper Class — Demo Interaktif
   Fungsi JS untuk demo show/hide konten
   ================================================ */

/* ------------------------------------------------
   PERTEMUAN 10: Toggle visibilitas elemen
   Menggunakan class Bootstrap d-none / d-block
   ------------------------------------------------ */
function toggleKonten(idElemen) {
  var elemen = document.getElementById(idElemen);
  if (!elemen) return;

  if (elemen.classList.contains('d-none')) {
    // Tampilkan elemen
    elemen.classList.remove('d-none');
    elemen.classList.add('d-block');
    console.log('[P10] Elemen #' + idElemen + ' ditampilkan (d-block)');
  } else {
    // Sembunyikan elemen
    elemen.classList.remove('d-block');
    elemen.classList.add('d-none');
    console.log('[P10] Elemen #' + idElemen + ' disembunyikan (d-none)');
  }
}

/* ------------------------------------------------
   PERTEMUAN 10: Demo Contextual Color & Background
   Fungsi untuk mengubah warna teks/background secara dinamis
   ------------------------------------------------ */
function gantiWarna(idElemen, kelasWarna) {
  var elemen = document.getElementById(idElemen);
  if (!elemen) return;

  // Hapus semua class warna teks Bootstrap
  var kelasHapus = [
    'text-primary','text-secondary','text-success',
    'text-danger','text-warning','text-info','text-dark','text-muted'
  ];
  kelasHapus.forEach(function (kelas) {
    elemen.classList.remove(kelas);
  });

  // Tambahkan class warna yang dipilih
  elemen.classList.add(kelasWarna);
  console.log('[P10] Warna elemen #' + idElemen + ' diganti ke: ' + kelasWarna);
}

/* ------------------------------------------------
   PERTEMUAN 10: Info ukuran layar saat ini
   Menampilkan breakpoint Bootstrap yang aktif
   Berguna untuk memahami responsive utility
   ------------------------------------------------ */
function cekUkuranLayar() {
  var lebar = window.innerWidth;
  var breakpoint = '';

  if (lebar < 576)       breakpoint = 'xs (< 576px) — Extra Small / HP kecil';
  else if (lebar < 768)  breakpoint = 'sm (576px - 767px) — Small / HP besar';
  else if (lebar < 992)  breakpoint = 'md (768px - 991px) — Medium / Tablet';
  else if (lebar < 1200) breakpoint = 'lg (992px - 1199px) — Large / Desktop';
  else                   breakpoint = 'xl (≥ 1200px) — Extra Large / Layar lebar';

  console.log('[P10] Lebar layar: ' + lebar + 'px | Breakpoint Bootstrap: ' + breakpoint);
  return breakpoint;
}

// Panggil cekUkuranLayar saat halaman pertama kali dimuat
window.addEventListener('load', function () {
  var info = cekUkuranLayar();
  console.log('[P10] Breakpoint saat ini: ' + info);
});

// Panggil ulang cekUkuranLayar setiap kali ukuran browser berubah
window.addEventListener('resize', function () {
  cekUkuranLayar();
});

/* ------------------------------------------------
   PERTEMUAN 10: Log info ke console saat halaman siap
   Berguna untuk debugging dan pemahaman alur JS
   ------------------------------------------------ */
document.addEventListener('DOMContentLoaded', function () {
  console.log('-------------------------------------------');
  console.log(' Web Desain II — Semua section sudah dimuat');
  console.log(' Pertemuan 1 s/d 10 aktif');
  console.log(' Coba fungsi berikut di Console DevTools:');
  console.log('   toggleKonten("notifikasi")');
  console.log('   cekUkuranLayar()');
  console.log('   gantiWarna("notifikasi","text-danger")');
  console.log('-------------------------------------------');
});
