const Join = () => {
  return ( 
    <div className="animate-fade lg:mx-16">
      <div className='p-6'>
        <h1 className="text-3xl font-bold text-center mb-6">Membership</h1>
        <h3 className="text-center p-2 text-2xl font-bold">
          Prices
        </h3>
        <p className="text-center">
          <b>£40</b> per term
        </p>
        <p className="text-center">
          <b>£110</b> for the whole year (3 terms)
        </p>
        <h3 className="text-center p-2 text-2xl font-bold mt-2">
          Payment
        </h3>
        <p className="text-center">
          Membership is to be paid as a direct transfer to the following account:
        </p>
        <p className="text-center mt-2 p-1">
        <button className='text-white bg-logo-yellow border-0 focus:outline-none hover:bg-yellow-300 rounded px-2 mr-2' onClick={() => navigator.clipboard.writeText('Nosheena Jabeen')}>Copy</button>
          <b>Name:</b> Nosheena Jabeen 
        </p>
        <p className="text-center p-1">
          <button className='text-white bg-logo-yellow border-0 focus:outline-none hover:bg-yellow-300 rounded px-2 mr-2' onClick={() => navigator.clipboard.writeText('070806')}>Copy</button>
          <b>Sort Code:</b> 070806
        </p>
        <p className="text-center p-1">
          <button className='text-white bg-logo-yellow border-0 focus:outline-none hover:bg-yellow-300 rounded px-2 mr-2' onClick={() => navigator.clipboard.writeText('22821560')}>Copy</button>
          <b>Account No:</b> 22821560
        </p>
        <p className="text-center p-1">
          <button className='text-white bg-logo-yellow border-0 focus:outline-none hover:bg-yellow-300 rounded px-2 mr-2' onClick={() => navigator.clipboard.writeText('Nationwide')}>Copy</button>
          <b>Bank Name:</b> Nationwide
        </p>
        <p className="text-center p-1">
          <b>Ref:</b> Surname. Initial. MMA. 
        </p>
        <p className="text-center p-1">
          (For example John Smith would be SMITH. J. MMA.)
        </p>
        <h3 className="text-center p-2 text-2xl font-bold mt-2">
          Forms
        </h3>
        <p className="text-center">
          Once you have paid, please fill out the following forms (important):
        </p>
        <div className='flex justify-center my-4'>
          <a className='mr-3 text-white bg-logo-yellow border-0 focus:outline-none hover:bg-yellow-300 rounded text-lg font-bold px-3 py-2' href={'https://forms.office.com/Pages/ResponsePage.aspx?id=i9hQcmhLKUW-RNWaLYpvlAXbMosAIhxMtCLi03f1bstUQUlWNlFLNkE0WEFGNllCQzhBNTExRU85OS4u'} target="_blank" rel="noopener noreferrer">
              Team Durham Form
          </a>
        </div>
        <div className='flex justify-center my-4'>
          <a className='mr-3 text-white bg-logo-yellow border-0 focus:outline-none hover:bg-yellow-300 rounded text-lg font-bold px-3 py-2' href={'https://forms.gle/hSp9AddXW8HKiZf1A'} target="_blank" rel="noopener noreferrer">
              Our Form
          </a>
        </div>
      </div>
    </div>
  )
}
 
export default Join