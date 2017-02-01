/*------------------------------------------------------------------
Project:        Landitt
Author:         Yevgeny Simzikov
URL:            http://simpleqode.com/
                https://twitter.com/YevSim
                https://www.facebook.com/simpleqode
Version:        1.0.2
Created:        27/05/2015
Last change:    14/06/2016
-------------------------------------------------------------------*/


Landitt - Clean Landing Page Template



GENERAL INFO
============

Landitt is a clean multi-purpose landing page template ideal for startups, agencies, portfolios, as well as for promoting your services, products and mobile apps. Built with Bootstrap 3, it is fully responsive and looks perfect on all major browsers, tablets and phones.

Landitt comes with 3 predefined layouts + 3 FREE bonus pages to help you kickstart your project. 

Key Features:
-------------

 - 3 predefined layouts
 - 3 FREE bonus pages
 - Fully Responsive
 - Functioning contact form
 - Spam protection by noCaptcha
 - LESS files included
 - Clean & developer friendly code
 - Free updates
 - Free support

Available layouts:
------------------

 - Agency layout   
 Multipurpose layout ideal for startups, businesses, product pages and portfolios.   
 - App layout    
 Perfect for promoting mobile apps.    
 - Sign Up layout    
 Multipurpose layout with a quick registration form.

Bonus pages:
------------

 - Sign in page
 - Sign up page
 - Coming soon page

All images and plugins used in this template are FREE for personal and commercial use!

Stay Tuned
----------

Follow us on Twitter to instantly know of new templates and updates released:    

https://twitter.com/YevSim    

If you like our works, feel free to contact us with new feature requests or ideas for future templates:    

http://simpleqode.com/#contact    

Your feedback would be highly appreciated.    



INSTRUCTIONS
============

Changing logo
-------------

In order to change a logo, please open your index_*.html and find this line:

<a class="navbar-brand" href="#home">Landitt</a>

Change the "Landitt" caption to the name of your company and save the file.

In case you use sidebar on your production site, please also find code:

<div class="sidebar__logo">
  Landitt
</div>

And replace the "Landitt" caption with the name of your company.


Changing values in the Skills section
-------------------------------------

Values in the donut charts of the Skills section can be read like this, e.g. "9/12" means the whole chart circle will be divided into 12 parts 9 of which will be filled with color. You can use bigger numbers for more accurate indication (e.g. "10/30" or "12/50").

Please read the official plugin documentation for more info: http://benpickles.github.io/peity/.


Setting up the Contact Form
---------------------------

This template contains a fully functioning PHP contact form with spam protection powered by reCaptcha. 

Note: The contact form will not work in your local environment without a server that supports PHP. 

In order to set up the contact form, please follow the steps below: 

1. Open the /config.php file and fill out the required information: 

 - reCaptcha Public ($publickey) and Private ($privatekey) keys.
 These keys are required to make your reCaptcha work properly. Please go to https://www.google.com/recaptcha/admin/create if you don't have the keys yet.

 - Sender name and email address ($mail_sender)
 This is a name and email address you will see in the 'From:' line of new emails you will receive.

 - Your email address ($to_email)
 This is an email address new emails will be sent to.

 - Email subject ($mail_subject)
 This is a subject of new emails you will receive.

2. Open your /index_*.html file and insert your reCaptcha Public key (see Step 1) at the end of this line:

<div class="g-recaptcha" data-sitekey="YOUR_PUBLIC_KEY"></div>

(e.g. <div class="g-recaptcha" data-sitekey="09sdv0sf9v0sdf9b0df9b09dfb"></div>).

3. Save both files.


Changing styles
---------------

If you are a novice developer, you can make necessary changes in the "css/styles.css" file directly. After changes are made, simply save the file and refresh the browser window to see the results.

Developers with a greater experience may want to work with source LESS files located in the "/less" folder. Original Bootstrap files are moved to "less/bootstrap" folder and are not recommended to modify. Custom .less files are created for each component modified and are imported into the main file - style.less. When compiling the project, style.less is the only file that you need to compile, because it imports all original Bootstrap files and other supplementary files from the "/less" folder.


Use of Bootstrap components
---------------------------

You can use any of the original Bootstrap components as they are with no additional markup. Some of the components have been modified for this template (e.g. navbar, buttons, dropdowns, etc.). Custom styles will apply automatically.


Sources and Credits
===================

General
-------

1. Twitter Bootstrap

URL:      http://getbootstrap.com/
AUTHOR:   @mdo and @fat
LICENSE:  MIT License

2. Font Awesome

URL:      http://fontawesome.io/
AUTHOR:   Dave Gandy
LICENSE:  MIT license

3. Open Iconic

URL:      https://useiconic.com/open/
AUTHOR:   Waybury
LICENSE:  MIT license


CSS Files
---------

1. CSS Animation

URL:      https://daneden.me/animate/
AUTHOR:   Dan Eden
LICENSE:  MIT license


JS Plugins
----------

1. Lightbox 

URL:      http://lokeshdhakar.com/projects/lightbox2/
AUTHOR:   Lokesh Dhakar
LICENSE:  Creative Commons Attribution 2.5 License

2. Waypoints

URL:        http://imakewebthings.com/jquery-waypoints/
AUTHOR:     I Make Web Things
LICENSE:    MIT license

3. Smoothscroll

URL:        https://github.com/galambalazs/smoothscroll
AUTHOR:     Balazs Galambosi, Patrick Brunner, Michael Herf
LICENSE:    MIT license

4. Peity

URL:        http://benpickles.github.io/peity/
AUTHOR:     Ben Pickles
LICENSE:    MIT license

5. Owl carousel

URL:        http://owlgraphic.com/owlcarousel/
AUTHOR:     Bartosz Wojciechowski
LICENSE:    MIT license

6. WOW

URL:        http://mynameismatthieu.com/WOW/
AUTHOR:     https://github.com/matthieua/WOW/graphs/contributors
LICENSE:    MIT license


reCAPTCHA
---------

Copyright (c) 2007 reCAPTCHA -- http://recaptcha.net

AUTHORS: Mike Crawford
         Ben Maurer


Images
------

**Authors**

URL:        https://www.flickr.com/photos/125303894@N06/sets/with/72157645103818634
AUTHOR:     Steve Wilson
LICENSE:    CC BY 2.0

**Background #1**

URL:        https://unsplash.com/
AUTHOR:     Luke Pamer
LICENSE:    Free

**Background #2, Team #1, #2**

URL:        http://jeshoots.com/
AUTHOR:     Jan Vasek
LICENSE:    CC0 1.0

**Background #3**

URL:        http://www.noblweb.com/
LICENSE:    Free

**Iphone, Showcase**

URL:        http://www.pixeden.com/psd-web-elements/responsive-showcase-psd
AUTHOR:     Pixeden.com
LICENSE:    Royalty free for use in both personal and commercial projects

**Portfolio #1, #3, #6**

URL:        http://forgraphictm.com/freebies/
LICENSE:    Freebie

**Portfolio #2, #4, #5, #7, #8, Team #3**

URL:        http://freelyphotos.com/
LICENSE:    CC0 1.0


Changelog
=========

Version 1.0.2 - 14/06/2016

 - Update Bootstrap to v3.3.6
 - Update FontAwesome plugin to v4.6.3
 - Update Waypoints plugin to v4.0.0
 - Update Lightbox plugin to 2.8.2

Version 1.0.1 - 28/05/2015
 
 - Spelling corrections

Version 1.0.0 - 27/05/2015

 - Initial release



Thanks for purchasing the Landitt template. Do not hesitate to contact us if you have any questions or suggestions regarding this item.

http://simpleqode.com/#contact
https://twitter.com/YevSim
https://www.facebook.com/simpleqode