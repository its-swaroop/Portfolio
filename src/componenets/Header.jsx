
const properties = [ "Disciplined", "Consistent", "Building"]

function genRandomIndex(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){  
  const introduction = properties[genRandomIndex(2)];

  return(
    <header>
        {/* <img src={logo} alt="Stylized atom" /> */}
        <h1>Swaroop Sakharkar</h1>
        <p>
          Computer Science Grad  |  React Developer in Training  |  {introduction} a Life That Matters
        </p>
      </header>
  );
}