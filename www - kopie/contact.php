<!DOCTYPE html>
<html lang="nl" class="wide wow-animation">
  <head>
    <?php include 'header.php';?>
	                <div class="rd-navbar-group-asside">
                  <div class="rd-navbar-nav-wrap">
                    <div class="rd-navbar-nav-inner">
                      <ul class="rd-navbar-nav">
                        <li><a href="index.php">Home</a>
                        </li>
						<li><a href="zonen.php">Zon &amp;</a>
							<ul class="rd-navbar-dropdown">
								<li><a href="zonen.php">Tuin</a>
								</li>
								<li><a href="zonen.php#omgeving">Omgeving</a>
								</li>
								<li><a href="zonen.php#binnen">Binnen</a>
								</li>
							</ul>
						</li>
                        <li class="active"><a href="contact.php">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section style="background-image: url(images/bg-image-7.jpg);" class="section-30 section-sm-40 section-md-66 section-lg-bottom-90 bg-gray-dark page-title-wrap">
        <div class="shell">
          <div class="page-title">
            <h2>Contact</h2>
          </div>
        </div>
      </section>

     <section class="section-60 section-sm-top-90 section-sm-bottom-100">
        <div class="shell">
          <div class="range range-md-justify">
            <div class="cell-md-5 cell-lg-4">
              <div class="inset-md-right-15 inset-lg-right-0">
                <div class="range">
                  <div class="cell-sm-10 cell-md-12">
                    <h3>Interesse?</h3>
                    <p class="offset-sm-top-40 text-secondary">
                      Als u graag uw zonnemeting door ons wilt laten uitvoeren, kunt u hiernaast uw gegevens invullen. Binnen 2 werkdagen hoort u van ons. Voor andere vragen kunt u uiteraard ook altijd contact met ons opnemen.                 
                    </p>
                  </div>
                  <div class="cell-sm-6 cell-md-12 offset-top-30 offset-sm-top-45">
                    <h5>Contact gegevens</h5>
                    <address class="contact-info">
                      <dl class="list-terms-inline">
                        <dt>Telefoon</dt>
                        <dd><a href="callto:#" class="link-secondary">06 2974 6585</a></dd>
                      </dl>
                      <dl class="list-terms-inline">
                        <dt>E-mail</dt>
                        <dd><a href="mailto:info@zonnemeting.nl" class="link-primary">info@zonnemeting.nl</a></dd>
                      </dl>
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <div class="cell-md-7 cell-lg-6 offset-top-50 offset-md-top-0">
 
              <form data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php" class="rd-mailform form-modern offset-top-30">
                <div class="range">
                  <div class="cell-sm-6">
                    <div class="form-group">
                      <input id="contact-name" type="text" name="name" data-constraints="@Required" class="form-control">
                      <label for="contact-name" class="form-label">Naam</label>
                    </div>
                  </div>
                  <div class="cell-sm-6 offset-top-30 offset-sm-top-0">
                    <div class="form-group">
                      <input id="contact-email" type="email" name="email" data-constraints="@Email @Required" class="form-control">
                      <label for="contact-email" class="form-label">E-mail</label>
                    </div>
                  </div>
                  <div class="cell-xs-12 offset-top-30">
                    <div class="form-group">
                      <div class="textarea-lined-wrap">
                        <textarea id="contact-message" name="message" data-constraints="@Required" class="form-control"></textarea>
                        <label for="contact-message" class="form-label">Uw wensen</label>
                      </div>
                    </div>
                  </div>
                  <div class="cell-xs-4 offset-top-22 offset-xs-top-30 offset-sm-top-50">
                    <button type="submit" class="btn btn-rect btn-primary btn-block">Verstuur</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


		<?php include 'footer.php'?>

  </body>
</html>