import { useState } from "react";

export default function Content({ menu, updateTotal, total }: any) {
  const [count, setCount] = useState(0); // State for current item count

  function plusOne() {
    setCount(count + 1);
    updateTotal(total + menu.price);
  }

  function subtractOne() {
    if (count > 0) {
      setCount(count - 1);
      updateTotal(total - menu.price);
    }
  }

  return (
    <div>
      <div className="menu-grid">
        <div className="img-menu">
          <img src={menu.url} alt="" />
        </div>
        <div className="about-menu">
          <h4>
            {menu.name}
            <span>
              <i className="fa fa-star" aria-hidden="true">
                {menu.rating}
              </i>
            </span>
          </h4>
          <p>Description: {menu.description}</p>
          <h5>Harga: {menu.price}</h5>
        </div>
        <div className="arrowdown">
          <p>Jumlah: {count}</p>
          <p>Total Harga: {count * menu.price}</p>
          <button onClick={subtractOne} className="button-30" role="button">
            -
          </button>
          <button onClick={plusOne} className="button-30" role="button">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
