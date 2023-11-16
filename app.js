const seçim1 = document.querySelector("#birinciBirimler")
const seçim2 = document.querySelector("#ikinciBirimler")
const girilenDeğer = document.querySelector("#inputGirdi")
const sonuç = document.querySelector("#sonuç")
seçim1.addEventListener("change", api)
seçim2.addEventListener("change", api)
girilenDeğer.addEventListener("keyup", api)

async function api() {
    const değer = girilenDeğer.value
    //girilen değer boş değilse çalışır
    if (değer != "") {
        //güncel kur değerlerini çektiğimiz api(1.seçimi linke ekleyerek istediğimiz para birimini elde ediyoruz)
        const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_BJVf78FwnjwSGqctksI7wlphc6qW4sLdpmnEyO0C&base_currency=${seçim1.value}`)
        
        //işlenebilir hale getirme
        const data = await response.json()

        //sonuç kutusuna yazılacak değer = kullanıcıdan alınan değer * 1.para biriminden 2.para birimine dönüşmüş veri ör: USD'nin TRY'ye eşitini alıyor ve bunu kullanıcının verdiği değerle çarpıyor
        sonuç.value = (değer * data.data[seçim2.value]).toFixed(3);
    }
}
