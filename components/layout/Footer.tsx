export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 px-4 border-t">
      <div className="container mx-auto text-center text-xs">
        <p>
          SIP-PAD | Sistem Informasi Pengelolaan Pajak Asli Daerah | Copyright ©{" "}
          {currentYear} Beatfraps Team | versi 2.0
        </p>
      </div>
    </footer>
  );
}
