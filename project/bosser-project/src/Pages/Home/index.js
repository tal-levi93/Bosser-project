import React from 'react';
import {P,Title,Img,Img_con} from "./home";
import img4 from './4.jpg'
import img1 from './1.jpg'
import img3 from './3.jpg'
import img2 from './2.jpg'


const Home = () => {

    return (
        <div>

            <Img_con>
            <Img src={img2} />
            <Img src={img1} />
            <Img src={img3} />
            <Img src={img4} />
            </Img_con>


            <Title >מי היא בוסרה?</Title>
            <br/>
            <P>קהילה מקצועית של אמנים צעירים בתחילת דרכם.
            <br/>
            הקהילה משלבת מגוון רחב של אמנויות ומאפשרת את החיבור בין היצירות השונות והאמנים השונים שחווים יחד את תחילת דרכם.
           <br/>
            מטרת הקהילה היא ליצור עשייה חברתית וקהילה רב תרבותית ומגדרית מאוחדת.
                <br/>
            לקהילה מפגשי אמנים, תערוכות קבוצתיות,פסטיבלי אמנות, פרוייקט חברתי ועוד.
                <br/>
                הקהילה שואפת לקידום קריירה מקצועית על ידי חיבור ושילוב האמנים בעולם האומנות הרחב.
                <br/>
                באתר שלנו תוכלו למצוא תכנים נוספים על הקהילה.
                <br/>
                <b>קהילת בוסרה, קהילה יוצרת מחשבה, יוצרת שינוי.</b>


            </P>




            </div>
    );
};

export default Home;



