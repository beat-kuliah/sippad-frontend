export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-2 px-4 border-t bg-green-500 dark:bg-green-700 text-white">
      <div className="container mx-auto text-center text-xs">
        <p>SIP-PAD | Sistem Informasi Pengelolaan Pajak Asli Daerah | Copyright © {currentYear} PT Nusa Solusi Pratama | versi 2.0</p>
      </div>
    </footer>
  );
}