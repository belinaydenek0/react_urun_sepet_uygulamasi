function Urun({ baslik, fiyat, stoktaVarMi, sepeteEkle }) {
    function handleSepeteEkle() {
        sepeteEkle({
            baslik: baslik,
            fiyat: fiyat
        });
    }

    return (
        <div className="urun-karti">
            <h2>{baslik}</h2>

            <p className="fiyat">
                {fiyat} TL
            </p>

            {stoktaVarMi ? (
                <>
                    <p className="stok var">
                        Stokta Var
                    </p>

                    <button onClick={handleSepeteEkle}>
                        Sepete Ekle
                    </button>
                </>
            ) : (
                <p className="stok yok">
                    Tükendi
                </p>
            )}
        </div>
    );
}

export default Urun;