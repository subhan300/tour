import React from 'react'

function P() {
    return (
      <div>
      <nav id="navbar-example2" class="navbar navbar-light bg-light px-3 fixed" style={{position:"fixed",top:"100px"}}>
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#fat">@fat</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#mdo">@mdo</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#one">one</a></li>
        <li><a class="dropdown-item" href="#two">two</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#three">three</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabindex="0">
  <h4 id="fat">@fat</h4>
  <p>...</p>
  <h4 id="mdo">@mdo</h4>
  <p>...</p>
  <h4 id="one">one</h4>
  <p>...</p>
  <h4 id="two">two</h4>
  <p>...</p>
  <h4 id="three">three</h4>
  <p>...</p>
</div>
        </div>
    )
}

export default P
