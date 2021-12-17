import styled from '@emotion/styled'
import './app.css'
import imageEquilibrium from './images/image-equilibrium.jpg'
import iconETH from './images/icon-ethereum.svg'
import iconClock from './images/icon-clock.svg'
import avatar from './images/image-avatar.png'

const Description = styled.p`
font-size: 18px;
font-family: Outfit;
color: hsl(215, 51%, 70%);
margin-left: 2em;
margin-right: 2em;
margin-top: 2em;
`;

const Titleh3 = styled.h3`
color: white;
font-family: Outfit;
font-size: 29px;
line-height: 0.3;
letter-spacing: -0.036em;
font-weight: 800;
margin-left: 1.3em;
margin-top: 1.7em;
`;

const ETHv = styled.p`
font-size: 18px;
font-family: Outfit;
color: hsl(178, 100%, 50%);
display: contents;
`;

const Clock = styled.p`
font-size: 18px;
font-family: Outfit;
color: hsl(215, 51%, 70%);
display: contents;
`;

const Creatinfo = styled.p`
font-size: 18px;
font-family: Outfit;
color: hsl(215, 51%, 70%);
margin-left: 2em;
margin-right: 10px;
margin-top: 55px;
`;

const Name = styled.p`
color: white;
font-size: 18px;
font-family: Outfit;
margin-top: 55px;
`;

const Card = styled.div`
margin: 14em;
border: 1px solid hsl(215, 32%, 27%);
height: 45em;
border-radius: 12px;

box-shadow: -9px 13px 23px 5px rgba(0,0,0,0.77); 
box-shadow: -9px 13px 23px 5px rgba(0,0,0,0.77);
`;

const NFT = styled.img`
widht: 15em;
height: 15em;
margin-left: 10em;
margin-right: 10em;
margin-top: 7em;
border-radius: 10px;
`;

const IconETH = styled.img`
margin-left: 2.2em;
`;

const IconClock = styled.img`
margin-right: 3px;
margin-left: 13.9em;
`;

const Avatar = styled.div`
display: flex;
margin-left: 2em;
margin-top: 35px;
margin-right: 2em;
margin-bottom: 35px;
border-top: 1px solid hsl(215, 32%, 27%);
`;

const PhotoProfile = styled.img`
width: 66px;
margin-top: 35px;
`;

const Info = styled.div`
margin-top: 2em;
`;

/* BODY */


function App() {
  return (
    <div className='App'>

      <Card>
        <NFT src={imageEquilibrium} alt='imageEquilibrium'/>
        <Titleh3>Equilibrium #3429</Titleh3>

        <Description>Our equilibrium collection promotes 
          balance and calm
        </Description>

          <Info>
            <IconETH src={iconETH}/> <ETHv>0.041ETH</ETHv>
            <IconClock src={iconClock}/> <Clock> 3 days left</Clock>
          </Info>

        <Avatar>
          <PhotoProfile src={avatar}/> <Creatinfo>Cretion of </Creatinfo> <Name>Jules Wyvern</Name>
        </Avatar>
      </Card>

    </div>
  );
}

export default App;
