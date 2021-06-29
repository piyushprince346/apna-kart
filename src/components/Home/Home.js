import React from 'react'
import './Home.css'
import Product from '../Product/Product.js'
function Home() {
    return (
        <div className='home'>
            {/* Hello World Again!! */}
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Events/June/MSD1/RedmiNote10S/Newdate/D24311141_MSD_WLD_RedmiNote10S_DesktopTallHero_1500x600._CB666281619_.jpg"
                    alt="Electronics"
                />


            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                <Product
                    id="14374341"
                    title='ASUS Vivo AiO V222, 21.5" FHD, Intel Core i3-10110U 10th Gen, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/with Wireless Keyboard & Mouse/Black/4.8 Kg), V222FAK-BA002TS'
                    price={704.46}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91qtcZ6c2yL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12679351"
                    title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
                    price={210.86}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41+xWzgV8jL.__AC_SY200_.jpg"
                />


                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />

            </div>
            <div className="home__row">
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SX522_.jpg"
                />
                <Product
                    id="90876332"
                    title="IFB 6 kg 5 Star Fully-Automatic Front Loading Washing Machine (Diva Aqua SX, Silver, Inbuilt Heater, Aqua Energie water softener)"
                    price={320.76}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/411oohq+7QL._AC_SX184_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
