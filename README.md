# Bay Park Centre Website - Reboot

master: [![Build Status](https://travis-ci.com/DboxDev/bayparkcentre-website.svg?token=dp5EomWdmLUc5zuyvWUy&branch=master)](https://travis-ci.com/DboxDev/bayparkcentre-website)

develop: [![Build Status](https://travis-ci.com/DboxDev/bayparkcentre-website.svg?token=dp5EomWdmLUc5zuyvWUy&branch=develop)](https://travis-ci.com/DboxDev/bayparkcentre-website)

[master site link](http://www.bayparkcentre.com)

[develop site link](http://bayparkcentre.dev.dbxd.com)

This site runs on Jekyll now. It uses [Grunt](http://gruntjs.com/) to run tasks/minify/concatinate/etc. and [Jekyll](https://jekyllrb.com/) to build the static website.

**Requirements:** 
To install Jekyll you need both [Ruby](http://www.ruby-lang.org/en/downloads/) and [RubyGems](https://rubygems.org/pages/download). To install on Windows, see [here](http://jekyll-windows.juthilo.com/).
To install Grunt, you need [Node.js](https://nodejs.org/en/). 


First, go into the git cloned project folder (code on the Develop Branch, and merge production-ready changes to Master Branch):
```
~$ cd bayparkcentre-website
```

Install Jekyll via Bundle, and then install the Grunt plugins via npm.
```
~/project-folder$ gem install bundle
~/project-folder$ bundle install
~/project-folder$ npm install
```

To build the site, spin up a local server, and watch for changes, use this command:
```
~/bayparkcentre-website$ grunt serve
``` 
#### => Browse to [http://localhost:4000](http://localhost:4000)

---

To only build the site:
```
~/bayparkcentre-website$ grunt
```

To compress images:
```
~/bayparkcentre-website$ grunt compress-images
```

To check your JavaScript code for errors:
```
~/bayparkcentre-website$ grunt test
```

# Important Notes

You technically don't need node.js. You can forgo doing ``npm install`` and just use:

run locally: ``jekyll serve``

build production code: ``JEKYLL_ENV=production jekyll build``

you can also run locally in production: ``JEKYLL_ENV=production jekyll serve``

## Also, this repo uses AWS's CodePipeline using CodeBuild, **not** Travis CI for cicd.


---

#### For Production:


* change "branch to update" in admin config to master after its live
* CodePipeline and CodeBuild for Producution change to new repo before pushing code to Master branch
