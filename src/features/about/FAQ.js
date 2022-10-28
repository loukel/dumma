const FAQ = () => {
  return (
    <section className='p-6'>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-3xl font-bold leading-none text-center">Frequently Asked Questions</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">I'm a beginner, can I still join?</h3>
            <p className="mt-1">We’re very beginner friendly! Most people who attend are new to the sport so you’re very welcome to try it out.</p>
          </div>
          <div>
            <h3 className="font-semibold">Can I try the sessions before paying?</h3>
            <p className="mt-1">You can have two free sessions before paying. All you need to do is show up and let an exec know your name.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ