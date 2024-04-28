// Total.tsx
import React from "react";

interface TotalProps {
  totalFood: number;
  totalDrink: number;
}


const Total: React.FC<TotalProps> = ({ totalFood, totalDrink }) => {
  const formatNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleBeliClick = () => {
    const confirmation = window.confirm(
      "Apakah Anda yakin ingin melanjutkan ke pembayaran?"
    );
    if (confirmation) {
      alert("Anda akan diarahkan ke halaman pembayaran...");
      window.location.reload();
    }
  };

  return (
    <div className="total-container">
      <h2>Nota Pembelian</h2>
      <div className="total-item">
        <div className="total-row">
          <div className="total-label">Total Harga Makanan:</div>
          <div className="total-value">{formatNumber(totalFood)}</div>
        </div>
        <div className="total-row">
          <div className="total-label">Total Harga Minuman:</div>
          <div className="total-value">Rp {formatNumber(totalDrink)}</div>
        </div>
        <div className="total-row">
          <div className="total-label">Total Harga Pembelian:</div>
          <div className="total-value">
            Rp {formatNumber(totalFood + totalDrink)}{" "}
          </div>
        </div>
        <button onClick={handleBeliClick} className="beli-button">
          Beli
        </button>
      </div>
    </div>
  );
};

export default Total;
