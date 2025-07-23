const Footer = () => {
  return (
   <footer className="mt-10 py-6 text-white text-sm bg-black/30 backdrop-blur-md border-t border-white/10">
  <div className="max-w-4xl mx-auto px-4 flex items-center justify-center gap-4">
    <p>© {new Date().getFullYear()} Sebastián Espinoza</p>
    <img
      src="https://cdna.artstation.com/p/assets/images/images/016/909/502/original/u-n-e-a-s-y-bonfire-7.gif?1553937005"
      alt="Bonfire Dark Souls"
      className="w-20 h-20 object-contain"
    />
  </div>
</footer>


  );
};

export default Footer;
