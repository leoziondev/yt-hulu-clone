import Image from 'next/image'

const Header = () => {
    return (
        <header className="">
            <h1>This is a header</h1>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={150}
                height={75}
            />
        </header>
    )
}

export default Header
