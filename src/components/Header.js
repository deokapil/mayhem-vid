import Image from "next/image";

const Header = () => {
  return (
    <header className="p-2">
      <div className="relative">
        <Image
          className="object-contain"
          src="/MM_logo.png"
          height={80}
          width={80}
        />
      </div>
    </header>
  );
};

export default Header;
