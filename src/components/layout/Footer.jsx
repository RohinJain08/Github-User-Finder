import { FaAward } from 'react-icons/fa'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
         <FaAward className='inline-block fill-current' size='50%'/>
        <p>Copyright &copy; {footerYear}</p>
        <p>All Rights Reserved  </p>
      </div>
    </footer>
  )
}

export default Footer
