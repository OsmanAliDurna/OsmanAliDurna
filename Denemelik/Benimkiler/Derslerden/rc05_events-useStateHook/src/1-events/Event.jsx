export const Event = () => {
    
    // Statik bir değişken
    let message = "FS15";

    const handleClick = () => {
        alert("Buttona clicked.");
    }
    const handleDelete = function() {
        alert("Button not deleted.");
    }
    const handleScreen = (msg) =>{
        alert(msg);
    }
    function handleChange (msg) {
        msg = "Burası değişti çünkü statik yapı var. Eğer h2 nin de değişmesini istiyorsak aşağıdaki return ün tekrardan çalıştırılması lazım. O da useState ile mümkün...";
        alert(msg);
    }

  return (
    <div>
      <h1>Events</h1>
      <h2>{message}</h2>
      <button onClick={handleClick} id="btn" name="my-button">Click</button>
      <button onClick={() => handleDelete()}>Delete</button>
      <button onClick={handleChange}>Change</button>

        {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
        bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
        takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      <button onClick={() => handleScreen(message)}>Show as Alert</button>

    </div>
  );
};

export default Event;

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Hooks (Functional Components).
//? 2. Statefull Classes (Class Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.