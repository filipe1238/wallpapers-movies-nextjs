import React from "react";

function About() {
  return (
    <section className="container mt-5">
        <div className="row">
            <div className="col-lg-6">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo ac semper facilisis. Fusce hendrerit risus nec enim ultricies, vel lobortis massa tristique.</p>
                <p> git repo <a target="_blank" href="https://github.com/filipe1238/exercicio-01-react">https://github.com/filipe1238/exercicio-01-react</a></p>
            </div>
            <div className="col-lg-6">
                <img src="https://picsum.photos/400/300" alt="About Us" className="img-fluid" />
            </div>

            
        </div>
    </section>
  );
}

export default About;
