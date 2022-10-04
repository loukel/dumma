import TeamCard from "./TeamCard"

const Team = () => {
  return ( 
    <section className="text-gray-600 body-font animate-fade">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR EXEC</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <TeamCard 
            name='Nosheena Jabeen' 
            role='President'
            imgFile='nosheena_jabeen.jpeg'
            description="The President is the figurehead of the club. In most cases, the President takes ultimate responsibility and essentially shapes the aims of the club for the year: They will usually chair meetings and support the work of other committee members in order to work together to achieve their aims and goals."
            instagram='https://www.instagram.com/thestoicvirago/'
          />
          <TeamCard 
            name='Eunice Hung' 
            role='Vice President' 
            imgFile='eunice_hung.jpeg'
            description="The Vice President assists in the planning and delivery of club activities and provides support where needed. In some circumstances, a VP might need to step in to take place of the President, or otherwise charged with specific responsibilities in the running of the society."
            instagram='https://www.instagram.com/eunice_hung_/'
          />
          <TeamCard 
            name='Louis Kelly' 
            role='Secretary' 
            imgFile='louis_kelly.jpeg'
            description="The Secretary's primary role is to provide administrative support to the role of the President. The secretary must work in tandem with the President, the treasurer and with other members of the exec team in various ways. They are integral to.the smooth running of the society."
            instagram='https://www.instagram.com/louiskellyy/'
          />
          <TeamCard 
            name='Jamie Harris' 
            role='Treasurer'
            description="Treasurer's remit is to provide the society with sound financial administration so that all aspects of a society's funds are properly managed and accounted for. They oversee the financial side of all society activities, such as social events and fundraising events."
            imgFile='jamie_harris.jpeg'
            instagram='https://www.instagram.com/jamieharris1512/'
          />
          <TeamCard 
            name='Joshua Fenton' 
            role='Social and Marketing Secretary'
            description="The Social & Marketing Secretary is tasked with, effectively organising communicating and recording all social activities to members, which ultimately solidifies the cohesiveness of the society. The marketing aspect aims to evolve the overall popularity of the society inside and outside of the university."
            imgFile='joshua_fenton.jpeg'
            instagram='https://www.instagram.com/joshf112/'
          />
          <TeamCard 
            name='Loïc Péron' 
            role='Welfare Officer'
            description="The Welfare Officer gives members a trusted person to speak to about a concern, either within the club or at times outside athletics. They have the skills and knowledge to.manage any concern raised in an appropriate way and ensure that the correct information is shared with the relevant people."
            imgFile='loic_peron.jpeg'
          />
          <TeamCard
            name='Rik Knowles' 
            role='BJJ Team Captain'
            description="The society's captain provides a central point of contact, and is the vital link, for all athletes within the society. The role of the Sports Captain is to represent the views of the athletes and contribute to the development of the society by providing thoughts and comments from an athletes perspective."
            imgFile='rik_knowles.png'
          />
          <TeamCard 
            name='Chantal Stenger' 
            role='Team Captain'
            description="The society's female captain provides a central point of contact, mainly for the female athletes. The role of the female Sports Captain is to represent views and concerns of our female students and contribute to the development of the society by providing thoughts and comments from an athletes perspective."
            imgFile='chantal_stenger.jpeg'
            instagram='https://www.instagram.com/wildcatinthefield/'
          />
          <TeamCard 
            name='Leon Finnen' 
            role='Team Captain'
            description="The society's captain provides a central point of contact, and is the vital link for all athletes within the society. The role of the MMA Sports Captain is to represent the views of the MMA students and contribute to the development of the society by providing thoughts and comments from an athletes perspective."
            imgFile='leon_finnen.jpeg'
            instagram='https://www.instagram.com/leon_finnen/'
          />
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR PARTNERS</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <TeamCard 
            name='5th Element BJJ' 
            role='BJJ'
            imgFile='5th_element.png'
            description={'5th Element is Brazillian Jiu Jitsu gym based in Durham. They provide excellent and experienced coaching for all levels of BJJ.'}
            instagram='https://www.instagram.com/5thelementdurham/'
          />
          <TeamCard
            name='Itaipava' 
            role='MMA' 
            imgFile='itaipava.jpg'
            description={'Itaipava MMA provides high quality Mixed Martials sessions for DUMMA'}
            bordered={false}
            instagram='https://www.instagram.com/itaipava_walbottle/'
          />
          <TeamCard
            name='Team Durham'  
            imgFile='team_durham.jpg'
            role='Support'
            bordered={false}
            description="Team Durham is a student-run organisation responsible for sport at Durham University. In contrast to most British universities it is a separate organisation with the status of a students' union, rather than a part of Durham Students' Union, the primary student representative body at Durham University."
            instagram='https://www.instagram.com/team.durham/'
          />
        </div>
      </div>
    </section>
  )
}
 
export default Team