import squareImg from './assets/square.svg'
import ladyImg from './assets/ladyIMG.svg'
import Header from './Header.jsx'
import leftImg from './assets/Left.png'
import laptopIMG from './assets/img.svg'
import actionsImg from './assets/Actions.png'
import logoImg from './assets/Logo.svg'
import iconImg from './assets/Icon.png'
const Page = ({image, description}) =>{
    return(
        <div style={{fontFamily: 'Kanit, sans-serif', backgroundColor:'#F1F1F1'}}>
            <div style={{fontFamily: 'Kanit, sans-serif', fontWeight: 'bold'}}>
              <p style={{padding: '24px 160px', fontSize:'18px', lineHeight:'22px', margin: 0}}>medium alike</p>
              <div style={{width:'100%', height: '152px'}}>
              <img src={leftImg} style={{ margin:'0 0 0 160px', padding: '64px 0',fontSize: '48px', lineHeight: '120px'}}></img>
              </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '160px', margin: 0, marginTop:'96px'}}>
                <img style={{}}src={ladyImg}></img>
                <div style={{display:'flex', justifyContent: 'space-between', width: '1050px'}}>
                <div style={{fontFamily: 'Inter, sans-serif'}}>
                <p style={{padding: 0, margin: '6px 0 12px 12px', fontSize: '18px'}}>Authors name</p><p style={{padding: 0, margin: '0 0 0 12px', fontSize:'14px', color:'gray'}}>7 july · 12 min read · Member-only</p>
                
                </div>
                <img style={{width: '100px', height: '24px'}} src={logoImg}></img>
                </div>
              </div>
        <div style={{width: '1120px', height: '1586px', margin: '70px 160px 0 160px'}}>
            <h3 style={{fontSize:'34px', fontFamily: 'Inter, sans-serif', margin: 0}}>7 Practical CSS Tips</h3>
            <p style={{fontSize:'24px', fontWeight: 400, fontFamily: 'Inter, sans-serif', margin: '24px 0 70px 0'}}>How product designers can break from the status quo and help our planet</p>
            <img src={laptopIMG}></img>
            <div style={{marginTop: '70px', fontSize: '24px'}}>
            <h3 style={{fontSize: '24px', fontWeight: 700, margin: '0 0 24px 0'}}>Subheader</h3>
<p style={{fontWeight: 400, lineHeight: '36px'}}>How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.</p>

<p style={{fontWeight: 400, lineHeight: '36px'}}>And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.</p>

<p style={{fontWeight: 400, lineHeight: '36px'}}>But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.</p>
            </div>
            <div style={{display:'flex', justifyContent: 'space-between', marginTop: '70px'}}>
            <img src={actionsImg}></img>
            <img src={iconImg}></img>
            </div>
        </div>
        <hr></hr>
        <div style={{width: '100%', height: '446px', backgroundColor: 'F1F1F1', padding: 0, margin: 0, display: 'flex', alignItems: 'end', flexDirection:'column', justifyContent: 'end'}}>
            <p style={{ marginRight: '160px', color:'gray'}}>Credits: photos from Unsplash.com, icons from Icons8, graphics from craftwork.design.</p>
            <p style={{ marginRight: '160px', color:'black'}}>Made with ✨❤️ at nFactorial in 2022.</p>
        </div>
        </div>   
    )
}
export default Page