// import { Link } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import"./Home.css";
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <img
                className="home_image"
                src="https://m.media-amazon.com/images/I/613lGttwesL._SX3000_.jpg"  
                alt=""  
                />


                <div className="home_row">
                <Link to="KitchenEssentials" className="product_link"> 
                    <Product
                    title="Starting ₹29 | Kitchen essentials"
                    
                    image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/186x116_1._SY116_CB647230943_.jpg"
                    image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/186x116_4._SY116_CB647230943_.jpg"
                    image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/186x116_3._SY116_CB647230943_.jpg"
                    image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/186x116_2._SY116_CB647230943_.jpg"
                    category1="Cookware"
                    category2="Storage jars & containers"
                    category3="Chopper & more tools"
                    category4="Gas Stoves"               
                    />
                    
                </Link> 

                <Link to ="DailyEssentials" className="product_link">
                    <Product
                    title="Up to 50% off | Daily Essentials"
                    image1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FJanuary/JanArt/CONSNEWQC/DesktopATF/Desktop-Gateway_QuadCard_5_1x._SY116_CB647172863_.jpg"
                    image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FJanuary/JanArt/CONSNEWQC/DesktopATF/Desktop-Gateway_QuadCard_2_1x._SY116_CB647172862_.jpg"
                    image3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FJanuary/JanArt/CONSNEWQC/DesktopATF/Desktop-Gateway_QuadCard_3_1x._SY116_CB647172863_.jpg"
                    image4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FJanuary/JanArt/CONSNEWQC/DesktopATF/Desktop-Gateway_QuadCard_4_1x._SY116_CB647172863_.jpg"             
                    category1="Health & personal care"                
                    category2="Grocery essentials"                    
                    category3="Baby products"
                    category4="Pet supplies"
                    />
                </Link>

                <Link to="Fashion"   className="product_link" >
                    <Product
                    title="Up to 70% off | Fashion"
                    image1="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Jan22newGW/PC-QuadCard-1x-Fashion-sarees._SY116_CB647188466_.jpg"
                    image2="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Jan22newGW/PC-QuadCard-1x-Fashion-Kurtas._SY116_CB647188466_.jpg"
                    image3="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Jan22newGW/PC-QuadCard-1x-Fashion-Kurtas._SY116_CB647188466_.jpg"
                    image4="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/janart22/BTF/PC/winter/1x/Artboard_1_copy_3._SY116_CB647122975_.jpg"             
                    category1="Sarees"                
                    category2="Women's kurtas"                    
                    category3=" Men's kurtas"
                    category4="Kids'wear"
                    />
                </Link>    
                </div>
                <div className="home_row">

                <Link to="Gamming" className="product_link" >  
                    <Product
                    title="Up to 55% off | Gaming"
                    image1="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/Consoles_1x._SY116_CB647104621_.jpg"
                    image2="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/Games_1x._SY116_CB647104621_.jpg"
                    image3="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/Accessories_1x._SY116_CB647104621_.jpg"
                    image4="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/Currency_1x._SY116_CB647104621_.jpg"
                    category1="Consoles"
                    category2=" Games"
                    category3=" Accessories"
                    category4=" Subscriptions & currency"
                    />
                </Link>  

                <Link to="Appliances" className="product_link">  
                    <Product
                    title="Top deals on appliances"
                    image1="https://images-eu.ssl-images-amazon.com/images/G/31/major_appliances/nirshai/janart22_mso/xcm_banners_uhipc-1-byroq_186x116_in-hi._SY116_CB647193081_.jpg"
                    image2="https://images-eu.ssl-images-amazon.com/images/G/31/major_appliances/nirshai/janart22_mso/xcm_banners_uhipc-2-updated_186x116_in-hi._SY116_CB647193041_.jpg"
                    image3="https://images-eu.ssl-images-amazon.com/images/G/31/major_appliances/nirshai/janart22_mso/xcm_banners_uhipc-3-pplf6_186x116_in-hi._SY116_CB647193076_.jpg"
                    image4="https://images-eu.ssl-images-amazon.com/images/G/31/major_appliances/nirshai/janart22_mso/xcm_banners_uhipc-4_372x232_in-hi._SY116_CB647193079_.jpg"
                    category1="Washing machines"
                    category2="Refrigerators"
                    category3="Kitchen appliances "
                    category4="Air Conditioner"
                    />
                </Link>     
                
                <Link to="HouseProduct" className="product_link">
                    <Product
                    title="Up to 60% off | House Products"
                    image1="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Jan22newGW/Desktop-Gateway_QuadCard-1x-copy._SY116_CB647184571_.jpg"
                    image2="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Jan22newGW/Desktop-Gateway_QuadCard-1x-Home-furnishings._SY116_CB647184571_.jpg"
                    image3="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Jan22newGW/Desktop-Gateway_QuadCard-1x-Furniture._SY116_CB647184571_.jpg"
                    image4="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Jan22newGW/Desktop-Gateway_QuadCard-1x-Dinnerware._SY116_CB647184571_.jpg"
                    category1=" Home decor"
                    category2=" Home furnishings"
                    category3=" Furniture"
                    category4=" Dinnerware"
                    
                    />
                </Link>
                    
                </div>
                <div className="home_row">
                <   Product/>
                <   Product/>
                </div>    
                    




            </div>

            
        </div>
    );
}

export default Home;