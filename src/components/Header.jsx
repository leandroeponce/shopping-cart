import CartButton from "./CartButton"
import ThemeButton from "./ThemeButton"

const Header = ({ onClose }) => {

    return (
        <>
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <a href="">
                <p className="font-bold text-2xl">GAMING HOUSE</p>
            </a>
            <div className="flex  gap-2">
                <CartButton onClick={onClose}/>
                <ThemeButton />
            </div>
        </header>
        <h1 className="text-center text-5xl font-bold m-6">¡Get the best accesories for you gaming experience!</h1>
        </>
    )
}

export default Header