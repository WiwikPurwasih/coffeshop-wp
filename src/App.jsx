import MenuKopi from "./components/MenuKopi.jsx";

export default function App() {
  return (
    <main>
      <h1>Daftar Menu Kedai Kopi</h1>
      <MenuKopi
        nama="Caffè Latte"
        kategori="Espresso Based"
        harga={25000}
        tersedia={true}
      />
      <MenuKopi
        nama="Cappuccino"
        kategori="Espresso Based"
        harga={28000}
        tersedia={true}
      />
      <MenuKopi
        nama="Matcha Latte"
        kategori="Non-Coffee"
        harga={30000}
        tersedia={false}
      />
    </main>
  );
}
