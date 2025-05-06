## About

This directory contains the source files of the website
  http://math-comp.github.io/.
  
## Mathematical Components related publications
Contributions to the material listed in `papers.org` are most welcome! 
You can either propose a pull request, or send us (mathcomp-dev@inria.fr) 
a pointer to a missing reference.
Watch (release only should be enough) the present project to be 
informed about mathcomp related publications.

Please push a git tag with every commit inserting a new reference, 
so that watchers get notified.
  
## Tips

Html files pushed here are put online straight away.

The steps to produce the updated documentation for `math-comp` are
reported on the [MathComp GitHub wiki](https://github.com/math-comp/math-comp/wiki/Howto-Release#steps)

Some html files are actually generated from eponymous org files
(extension `.org`). They are generated using emacs: open the
`blah.org` with emacs, press `C-c C-e h h` to generate the
corresponding `blah.html`. Alternatively, run the command `make org-html`
from the main folder. After editing the `.org` file, you
should perform this operation to generate the `.html` file.  Both
files can then be committed and pushed on the main repository (just
modifying the `org` file and pushing has no effect on the displayed
page).

