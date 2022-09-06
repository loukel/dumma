import TimetableDisplay from "./TimetableDisplay"

const About = () => {
  return ( 
    <div className="w-full animate-fade">
      <div className='p-6'>
        <h1 className="text-3xl font-bold text-center">About</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quam debitis delectus, ipsa facilis id alias nulla, pariatur quo excepturi at amet quisquam aut, eveniet exercitationem sed fugit ducimus molestias tempore fuga voluptas. Non culpa ducimus eveniet dolor dolorem soluta fugiat architecto quam corporis. Culpa odit consequatur velit maiores aperiam, nulla voluptatibus. Harum vero eveniet sunt soluta, odio excepturi. Magni, quod non placeat nihil vitae cumque consectetur tempore sunt vel. Laboriosam eligendi accusamus itaque quo, delectus magnam pariatur consectetur quidem ipsam architecto earum, excepturi nulla rem, rerum vitae saepe cum neque minima doloribus velit vel cupiditate. Commodi debitis quisquam earum?
        </p>
        <button className='flex mx-auto text-white bg-logo-yellow border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'>
          Join
        </button>
      </div>
      <div className='p-6'>
        <TimetableDisplay />
      </div>
    </div>
  )
}
 
export default About