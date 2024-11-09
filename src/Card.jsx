import squareImg from './assets/square.svg'
import ladyImg from './assets/ladyIcon.svg'
const Card = ({image, description}) =>{
    return(
        <div style={{fontFamily: 'inter, sans-serif', width: '1120px', height: '310px', padding: '0 160px 0 160px'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{margin: '0 100px 36px 0'}}>
                <div style={{display:'flex', flexDirection:'row', gap: '4px'}}><img src={ladyImg}></img><div style={{padding: '3px'}}>Authors name in Topics Name 7 July</div></div>
                <div style={{gap: '24px', padding: '0 133px 70px 0'}}>
                <h1 style={{fontSize: '28px', fontWeight: 700, lineHeight: '34px', margin: '48px 0 0 0 '}}>7 Practical CSS Tips</h1>
                <p style={{fontSize: '16px', lineHeight: '22px', fontWeight: 400, margin: '24px 0 0 0'}}>{description}</p>
                </div>
            <div style={{width:'755px', display:'flex', justifyContent: 'space-between', fontSize:'14px', fontWeight: 500, lineHeight: '18px', margin: 0, padding: 0,gap: '8px', color:'gray'}}><div><button style={{borderRadius:'20px', border: 0, backgroundColor: '#081E341F', padding:'6px 16px', color:'#081E34'}}>Java Script</button> 12 min read · Selected for you</div> <div><img src={squareImg}></img> <img src={squareImg}></img> <img src={squareImg}></img></div></div>
            </div>
            <img style={{width: '265px', height: '265px'}} src={image}></img>
        </div>
        <hr></hr>
        </div>
        
    )
}
export default Card