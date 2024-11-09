import Card from './Card.jsx';
import laptopImg from '/src/assets/laptop.png'
import drawerImg from './assets/drawer.png'
import thinkerImg from './assets/thinker.png'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Page from './Page.jsx'
function App() {
  return (
   <div style={{width: '100%', maxWidth: '1440px', margin: '0 auto', padding: 0, backgroundColor: '#F1F1F1'}}>
    <Header />
    <Card image={laptopImg} description='You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.'/>
    <div style={{width:'100%', height:'50px'}}></div>
    <Card image={drawerImg} description="Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."/>
        <div style={{width:'100%', height:'120px'}}></div>
    <Card image={thinkerImg} description="Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."/>
           <div style={{width:'100%', height:'75px'}}></div>

   <Footer/>
   <hr></hr>
   <Page/>
   </div>

   
  )
}

export default App
