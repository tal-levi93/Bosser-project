import React from 'react';
import {P,Title,Imgs} from "./home";
import Logo from './logo.png';
import img4 from './4.jpg'
import img1 from './1.jpg'
import img3 from './3.jpg'
import img2 from './2.jpg'


const Home = () => {

    return (
        <div>

            <Imgs>
            <img src={img2}  style={{padding:'5px ',width:'25%'}}/>
            <img src={img1} style={{padding:'5px',width:'25%'}}/>
            <img src={img3} style={{padding:'5px',width:'25%'}}/>
            <img src={img4} style={{padding:'5px',width:'25%'}}/>
            </Imgs>


            <Title>מי היא בוסרה?</Title>
            <P>קהילה מקצועית של אמנים צעירים בתחילת דרכם.
            <br/>
            הקהילה משלבת מגוון רחב של אמנויות ומאפשרת את החיבור בין היצירות השונות והאמנים השונים שחווים יחד את תחילת דרכם.
            מטרת הקהילה היא ליצור עשייה חברתית וקהילה רב תרבותית ומגדרית מאוחדת.
            לקהילה מפגשי אמנים, תערוכות קבוצתיות,פסטיבלי אמנות, פרוייקט חברתי ועוד.
                <br/>
                הקהילה שואפת לקידום קריירה מקצועית על ידי חיבור ושילוב האמנים בעולם האומנות הרחב.
                <br/>
                באתר שלנו תוכלו למצוא תכנים נוספים על הקהילה.
                <br/>
                <b>קהילת בוסרה, קהילה יוצרת מחשבה,יוצרת שינוי.</b>


            </P>




            </div>
    );
};

export default Home;



