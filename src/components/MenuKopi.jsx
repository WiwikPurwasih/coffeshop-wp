export default function MenuKopi({ nama, kategori, harga, tersedia }) {
  return (
    <article className="kartu-kopi">
      <h3>{nama}</h3>
      <p>
        {kategori} - Rp {harga}
      </p>
      {tersedia ? (
        <span className="lencana">Tersedia</span>
      ) : (
        <span className="lencana off">Habis</span>
      )}
    </article>
  );
}
