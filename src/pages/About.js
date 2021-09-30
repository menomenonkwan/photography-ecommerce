import styled from "styled-components";
import image from '../assets/profile.jpg';
import background from '../assets/sunset.jpg';

const StyledMain = styled.main`
  background: var(--black, black);
  background-image: url(${background});
  background-size: cover;
  background-repeat: none;
  background-position: center;
  background-attachment: fixed;
  padding: 2rem 0;

  .text {
    background: rgba(0,0,0,0.5);
    width: 750px;
    max-width: 90%;
    color: var(--white, white);
    margin: 0 auto;
    padding: 1.5rem 1rem 0;
    font-size: 1.05rem;
    letter-spacing: 0.01em;
    line-height: 1.3;
    font-family: var(--secondary-font);
    font-weight: lighter;
    box-shadow: 0 5px 15px rgba(0,0,0,0.12);
    
    span {
      color: var(--blue);
      font-weight: bold;
      font-size: 1.75rem;
    }
  }
  
  p {
    padding-bottom: 1.5rem;
  }
  
  @media (min-width: 600px) {
  .text {

    font-size: 1.15rem;
  }
}
  @media (min-width: 900px) {
    .text {
      max-width: 80%;
      padding: 3rem 3rem 0;
      font-size: 1.25rem;
    }
    p {
      padding-bottom: 3rem;
    }
  }
  `;

const ProfilePic = styled.div`
  background: var(--blue);
  background-image: url(${image});
  background-size: cover;
  background-repeat: none;
  background-position: center;
  margin: 0rem auto 2rem;
  width: 90%;
  height: 200px;
  
  @media (min-width: 600px) {
    height: 300px;
  }

  @media (min-width: 900px) {
    box-shadow: 0 5px 15px rgba(0,0,0,0.12);
    width: 400px;
    margin: 1rem auto 3rem;
  }
`;

const About = () => {

  return (  
    <StyledMain>
      <ProfilePic>
        <h1>ABOUT ME</h1>
      </ProfilePic>
      <div className="text">
        <p><span>Say Cheese!!!</span> Some kind of typical 'About Me' paragraph. You know, something that says stuff that'll let you know I'm a cool dude. Anywho... here's some filler. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam perspiciatis odio ad, placeat a molestias dolores. Perspiciatis perferendis praesentium earum explicabo nemo unde nihil iste, tempore quam, possimus quisquam!</p>

        <p>Libero, asperiores vero. Doloribus autem non dolorem maxime odio. Molestias aperiam facilis illum, error voluptatibus numquam dignissimos nemo quisquam earum soluta quos consectetur sapiente quas at mollitia asperiores eos porro!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, perspiciatis enim dignissimos odit dolorem, amet voluptas error aperiam facere incidunt, hic cumque dolores eius provident a doloremque deserunt sed temporibus.
        Consectetur recusandae, accusamus quaerat, quia quas ratione quod reprehenderit assumenda facilis nobis pariatur quibusdam, omnis in nihil unde nemo minus officiis sit. Libero, voluptas. Blanditiis facere modi ea incidunt minus.</p>

        <p>Delectus, nulla architecto officia nesciunt quisquam dolorem impedit deleniti, sed totam provident laudantium? Officiis animi cumque ex, at quam quisquam magni molestias sit, porro dicta exercitationem suscipit impedit ducimus nostrum!
        Est tempora explicabo, veritatis culpa similique animi dignissimos aut expedita ducimus ab tenetur voluptatibus aliquam, beatae at vel alias a placeat dolores? Expedita tempore earum neque doloribus porro asperiores quisquam.
        Maiores provident, est eaque deleniti sit praesentium ipsa id exercitationem? Sint, aspernatur ut dolorem labore cupiditate et molestias dolore aliquam harum excepturi quo nam, ad iusto, autem incidunt dolor enim!</p>

      </div>
    </StyledMain>
  );
}
 
export default About;