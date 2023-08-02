

    let geser = document.querySelector('.geser .opsi');
    let opsi = document.querySelectorAll('.geser .opsi .barang');
    let berikut = document.getElementById('berikut');
    let sebelum = document.getElementById('sebelum');
    let titik = document.querySelectorAll('.geser .titik li');

    let panjangbarang = opsi.length - 1;
    let nyala = 0;
    berikut.onclick = function(){
        nyala = nyala + 1 <= panjangbarang ? nyala + 1 : 0;
        reloadSliderDua();
    }
    sebelum.onclick = function(){
        nyala = nyala - 1 >= 0 ? nyala - 1 : panjangbarang;
        reloadSliderDua();
    }
    let kosongkanInterval = setInterval(()=> {berikut.click()}, 700000);
    function reloadSliderDua(){
        geser.style.left = -opsi[nyala].offsetLeft + 'px';
        // 
        let titik_aktif_trakhir = document.querySelector('.geser .titik li.nyala');
        titik_aktif_trakhir.classList2.remove('nyala');
        titik[nyala].classList2.add('nyala');

        clearInterval(kosongkanInterval);
        kosongkanInterval = setInterval(()=> {berikut.click()}, 700000);

        
    }

    titik.forEach((li, kunci) => {
        li.addEventListener('click', ()=>{
            nyala = kunci;
            reloadSliderDua();
        })
    })
    window.onresize = function(kejadian) {
        reloadSliderDua();
    };

