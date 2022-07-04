import TeamCard from "./TeamCard"

const Team = () => {
  return ( 
    <section class="text-gray-600 body-font animate-fade">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <TeamCard 
            name='Albane Colleau' 
            role='Co-President'
            imgFile='albane_colleau.jpg'
            description="I love meeting innovative people and hearing about very cool ideas that could contribute to solve some of the world's trickiest issues!"
            instagram='https://www.instagram.com/albane_colo/'
          />
          <TeamCard 
            name='Natalie Law' 
            role='Co-President' 
            imgFile='natalie_law.jpg'
            description="I love hearing about peoples experiences post-uni and am especially interested in the stories where Durham alumni found their own start-ups! It’s been very interesting hearing their stories and understanding what it takes to be an entrepreneur!"
            instagram='https://www.instagram.com/natllaw/'
          />
          <TeamCard 
            name='Louis Kelly' 
            role='Tech Officer' 
            imgFile='louis_kelly.jpg'
            description="I want to show that anyone can be an entrepreneur using the skills and resources they have. I want to encourage the view that entrepreneurship is a philosophy to change the world for the better through commercialising solutions to problems."
            instagram='https://www.instagram.com/louiskellyy/'
          />
          {/* <TeamCard 
            name='Steven Kippax' 
            role='Social Media Officer'
            description="I want to help show my fellow students at Durham that you aren't destined to work in a cubicle for a corporate overlord your whole life. Your destiny and financial future can be in your hands, if only you grab hold of it"
            instagram='https://www.instagram.com/stevenkippax/'
          /> */}
          <TeamCard 
            name='Gian Jaeger' 
            role='Secretary'
            description="I joined ED because I've had a long-standing passion for innovation and entrepreneurship. Hence I wanted to connect with likeminded people and hear about their ambitions in this regard."
            imgFile='gian_jaeger.jpg'
            instagram='https://www.instagram.com/gianjaeger/'
          />
          <TeamCard 
            name='José Stewart' 
            role='Treasurer'
            description="I delight in hearing the innovative ways entrepreneurs use capital to solve real-world problems. I look forward to meeting people with drive and ambition, and how they're working towards something greater than themselves."
            imgFile='jose_stewart.jpg'
            instagram='https://www.instagram.com/stxrtt/'
          />
          <TeamCard 
            name='Pamela Low' 
            role='Opportunities Officer'
            description="I want to surround myself with like-minded individuals who are interested in learning more about entrepreneurship. ED is a great avenue to do so, as it offers the opportunity to collaborate with start-up founders and provide first- hand experience learning about innovative ideas!"
            imgFile='pamela_low.jpg'
            instagram='https://www.instagram.com/pamerlow/'
          />
          <TeamCard 
            name='Kelvin Chan' 
            role='Events Officer'
            description="Having the amazing opportunity to be able to make connections with other business and entrepreneurial minded people and being able to use this platform to help other people put their own ideas into existence."
            imgFile='kelvin_chan.jpg'
            instagram='https://www.instagram.com/kelvnchan/'
          />
          <TeamCard 
            name='Aiyada Tantiphong' 
            role='Event Officer'
            description="I am so amazed with getting involved with incredible start-ups, founders, and alumni as well as assisting my peers in turning their ideas and passions into businesses."
            imgFile='aiyada_ize.jpg'
            instagram='https://www.instagram.com/aiyada.ize/'
          />
          <TeamCard 
            name='Elodie Davies' 
            role='Opportunity Officer'
            description="I love listening to and learning from the most creative and innovative of people, finding wisdom from their experiences. I believe it's truly amazing to forge your own path, free from the limitations of the corporate world."
            imgFile='elodie_davies.jpg'
            instagram='https://www.instagram.com/elodie_davies/'
          />
        </div>
      </div>
    </section>
  )
}
 
export default Team