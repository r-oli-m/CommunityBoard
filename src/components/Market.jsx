import React from "react";
import Place from "./Place";

const Market = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Place name='Tea Top' best='brown sugar' link='https://www.teatopusa.com/menu' loc='tino' image='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/44b21639-ac4d-41bd-8580-99c25127d196.jpg'/>
                    <Place name='N7' best='rose MT' link='https://restaurantguru.com/N7-Draft-Tea-Coffee-San-Jose-2/menu' loc='saratoga' image='https://s3-media0.fl.yelpcdn.com/bphoto/yCZvInRyslD4GHcgC0ZqKw/348s.jpg'/>
                    <Place name='TP Tea' best='normal MT + boba' link='https://en.tp-tea.com/menu/' loc='tino' image='https://s3-media0.fl.yelpcdn.com/bphoto/uX4p5YqvztLe9-XJ-E6KVA/348s.jpg'/>
                </tr>
                <tr>
                    <Place name='Ume Tea' best='early grey' link='https://umeteaca.square.site/?location=11ecd400c73bf268ba48ac1f6bbbd01e#most-popular' loc='tino'image='https://428d2ee474581a1d234a.cdn6.editmysite.com/uploads/b/428d2ee474581a1d234a2f65772072a829f2c4dc99bc85069a466e3e7d733541/ume-tea-dd-header_1693105025.jpeg?width=2400&optimize=medium&height=480&fit=cover&dpr=2.625'/>
                    <Place name='TZone' best='green tea w tiramisu' link='https://www.tzonegroup.com/inventory' loc='santa cruz' image='https://lh3.googleusercontent.com/p/AF1QipOBrjbH46APIKspKSxSTZm07SfYjnnxpaLBRixU=w768-h768-n-o-v1'/>
                    <Place name='Tancha' best='matcha + boba' link='https://www.seamless.com/menu/tan-cha-cupertino-19600-vallco-pkwy-100-cupertino/3346593' loc='main st' image= 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/545b1f35-d144-47ae-90d9-ec3013a4e8eb-retina-large-jpeg'/>
                </tr>
                <tr>
                    <Place name='Cafe LaTea' best='passion fruit + jelly' link='https://order.snackpass.co/Cafe-LaTTea-61c3650160021f0148a47a9c' loc='main st' image="https://pbs.twimg.com/media/Crsd3S9UsAA7oOr.jpg"/>
                    <Place name='Meet Fresh' best='guava tea' link='https://meetfresh.us/menu/' loc='main st' image='https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,q_auto,fl_lossy,dpr_auto,c_fill,f_auto,h_800,g_auto/svooy77pjex3c7ju73zx'/>
                    <Place name='Teaspoon' best='jasmine MT + boba' link='https://www.teaspoonlife.com/menu' loc='tino' image='https://uncommons.com/wp-content/uploads/2023/03/IMG_8347.webp'/>
                </tr>
            </tbody>
        </table>
    )
}

export default Market;