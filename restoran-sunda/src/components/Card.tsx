export default function Card(item:any) {
  return (
    <>
      <div className="card-container">
        <img className="mhs-image" src={item.img} alt="" />
        <div className="data-container">
          <div className="card-text">
            <p>{item.nama}</p>
            <p>{item.nim}</p>
          </div>
        </div>
      </div>
    </>
  );
}
