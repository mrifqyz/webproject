import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light px-5">
            <a class="navbar-brand nav-item">rifqy.</a>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav ml-auto">
                    <li>
                        <a class="nav-item nav-link" href="/">home <span class="sr-only">(current)</span></a>
                    </li>
                        
                    {/* <li>
                        <a class="nav-item nav-link" href="/portofolio">portofolio</a>
                    </li> */}

                    {/* <li>
                        <p class="nav-item nav-link" >story</p>
                    </li> */}

                    <li>
                        <a class="nav-item nav-link" href="/about">about</a>
                    </li>

                    <li>
                        <a class="nav-item nav-link" href="/contact">contact</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;