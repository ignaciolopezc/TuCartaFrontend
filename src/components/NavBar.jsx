
const NavBar = () => {
  return (
    <>
		<nav id="topnav" class="defaultscroll is-sticky">
			<div class="container relative">
				{/* <a class="logo" href="index.html">
					<img src="assets/images/logo-dark.png" class="inline-block dark:hidden" alt=""/>
					<img src="assets/images/logo-light.png" class="hidden dark:inline-block" alt=""/>
				</a> */}

				<div class="menu-extras">
					<div class="menu-item">
						<a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
							<div class="lines">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</a>
					</div>
				</div>

				<div id="navigation">
					<ul class="navigation-menu justify-end">
						<li><a href="index.html" class="sub-menu-item">Home</a></li>
						<li><a href="contact-one.html" class="sub-menu-item">Contact</a></li>
						<li><a href="contact-one.html" class="sub-menu-item">Contact</a></li>
						<li><a href="contact-one.html" class="sub-menu-item">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
    </>
  );
};

export default NavBar;
