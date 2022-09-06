import TeamCard from "./TeamCard"

const Team = () => {
  return ( 
    <section class="text-gray-600 body-font animate-fade">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR PARTNERS</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <TeamCard 
            name='5th Element BJJ' 
            role='BJJ'
            imgFile='5th_element.png'
            description=""
            instagram='https://www.instagram.com/thestoicvirago/'
          />
          <TeamCard
            name='Itaipava' 
            role='MMA' 
            imgFile='itaipava.jpg'
            bordered={true}
            description=""
            instagram='https://www.instagram.com/eunice_hung_/'
          />
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR EXEC</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <TeamCard 
            name='Nosheena Jabeen' 
            role='President'
            imgFile='nosheena_jabeen.jpg'
            description=""
            instagram='https://www.instagram.com/thestoicvirago/'
          />
          <TeamCard 
            name='Eunice Hung' 
            role='Vice President' 
            imgFile='eunice_hung.jpg'
            description=""
            instagram='https://www.instagram.com/eunice_hung_/'
          />
          <TeamCard 
            name='Louis Kelly' 
            role='Secretary' 
            imgFile='louis_kelly.jpeg'
            description=""
            instagram='https://www.instagram.com/louiskellyy/'
          />
          <TeamCard 
            name='Jamie Harris' 
            role='Treasurer'
            description=""
            imgFile='jamie_harris.jpg'
            instagram='https://www.instagram.com/jamieharris1512/'
          />
          <TeamCard 
            name='Joshua Fenton' 
            role='Social and Marketing Secretary'
            description=""
            imgFile='joshua_fenton.jpg'
            instagram='https://www.instagram.com/joshf112/'
          />
          <TeamCard 
            name='Loïc Péron' 
            role='Welfare Officer'
            description=""
            imgFile='loic_peron.jpg'
          />
          <TeamCard
            name='Rik Knowles' 
            role='BJJ Team Captain'
            description=""
            imgFile='rik_knowles.jpg'
          />
          <TeamCard 
            name='Chantal Stenger' 
            role='Team Captain'
            description=""
            imgFile='chantal_stenger.jpeg'
            instagram='https://www.instagram.com/wildcatinthefield/'
          />
          <TeamCard 
            name='Leon Finnen' 
            role='Team Captain'
            description=""
            imgFile='leon_finnen.jpg'
            instagram='https://www.instagram.com/leon_finnen/'
          />
        </div>
      </div>
    </section>
  )
}
 
export default Team