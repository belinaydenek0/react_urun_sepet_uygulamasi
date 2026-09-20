import { useState } from "react";
import "./App.css";
import Urun from "./Urun";

function App() {
    const [sepet, setSepet] = useState([]);

    function sepeteUrunEkle(urun) {
        setSepet((eskiSepet) => [...eskiSepet, urun]);
    }

    function sepetiTemizle() {
        setSepet([]);
    }

    return (
        <div className="sayfa">
            <h1>Ürünler</h1>

            <p className="sepet">
                🛒 Sepet: {sepet.length}
            </p>

            <div className="urunler">

                <Urun
                    baslik="Laptop"
                    fiyat={25000}
                    stoktaVarMi={true}
                    sepeteEkle={sepeteUrunEkle}
                />

                <Urun
                    baslik="Kulaklık"
                    fiyat={1500}
                    stoktaVarMi={false}
                    sepeteEkle={sepeteUrunEkle}
                />

                <Urun
                    baslik="Telefon"
                    fiyat={30000}
                    stoktaVarMi={true}
                    sepeteEkle={sepeteUrunEkle}
                />

            </div>

            <div className="sepet-alani">
                <h2>🛒 Sepetteki Ürünler</h2>

                {sepet.length === 0 ? (
                    <p>Sepetiniz boş.</p>
                ) : (
                    <>
                        <ul>
                            {sepet.map((urun, index) => (
                                <li key={index}>
                                    {urun.baslik} - {urun.fiyat} TL
                                </li>
                            ))}
                        </ul>

                        <button onClick={sepetiTemizle}>
                            🗑️ Sepeti Temizle
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
