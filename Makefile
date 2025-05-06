ORG_FILES=$(wildcard *.org)
HTML_FILES=$(ORG_FILES:.org=.html)

# default target does nothing
all:

org-html: $(HTML_FILES)

%.html: %.org
	emacs --batch $< -e org-html-export-to-html
