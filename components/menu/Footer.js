import React from 'react'
import "./footer.css"

function Footer() {
  /* footer only in the lowest point of the page */
  return (
    <footer className="bg-body-secondary text-center text-lg-start footer">
        <div className="text-center p-3 container">
            © 2023 by Name of Template. Proudly created with React
        </div>
    </footer>
  )
}

export default Footer