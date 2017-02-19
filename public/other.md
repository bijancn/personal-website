% Bijan Chokoufe Nejad - Other
% Bijan Chokoufe Nejad
% @@TODAY@@

latex
------

I have written some convenience packages which allow to straightforwardly use
LaTeX with all its power. [bcn\_commands](#bcn-commands) adds some functionality
and shorthand notations which you can adopt or use as inspiration.  For example,
using `\Al(`, `\Bl(`, `\Cl(` and `\Dl(` seems way more intuitive than
remembering the ordering of `\bigl(`, `\Bigl(`, `\biggl(` and `\Biggl(`.
Installation instructions are in the header of the documents.

### [bcn koma][bcn_koma]

A wrapper package for my commonly used packages in KOMA-Script files. The
environment `Balign` is defined here and not in [bcn\_commands](#bcn-commands) since
the defintion is different for Beamer presentations where numbering of equations
is not really reasonable.

### [bcn beamer][bcn_beam]

Basically the same as [bcn\_koma](#bcn-koma) adapted to the already loaded
packages of Beamer. It allows to set the two colors of a talk via
`\fstcol` and `\sndcol` and needs [bcn\_color](#bcn-color). Furthermore, some
Beamer specific commands are defined.

### [bcn color][bcn_col]

Some color mixtures and codes which are viewable not only on screen but more
importantly also tested on beamers.

### [bcn commands][bcn_comm]

The biggest `bcn` package adds some math operators that are astonishingly not
part of amsmath. A math operator starting with a capital letter takes one
argument and sets automatically appropriate braces. Shorthands for partial and
total derivatives are given as well as proper spacing of the integration measure
(`\Int`). Vector arrows are redefined to boldsymbols.
`bcn_commands` provides a full quantum mechanics package with intuitive notation
for `bra`, `ket`, `braket` and so on. Some simplifications for drawings are
included as well as fermion propagators for the friends of high energy physics.
Speaking of which, an automatic Feynmp call allows to produce Feynman graphs
without further user intervention than calling pdflatex.  Finally, there are a
lot of short hand notations which help to minimize typing.

### [bcn letter][bcn_lett]

A ready-to-use [template][bcn_lett] for writing german letters using
[KOMA scrlttr2](http://texdoc.net/texmf-dist/doc/latex/koma-script/scrguide.pdf)
with a small workaround for the footer. Hereby, you can decide how much
information you want to show the recipient and the layout adjusts to two or three
column style. With the needed packages, it should look like
[this][bcn_lett_pdf] if you compile the
[example][bcn_lett_ex].

### [bcn beamer template][bcn_beam_temp]

To get started with Beamer, you might find it handy to have a
[template][bcn_beam_temp] instead of writing everything from scratch. Some
features are used but certainly not all.

coding
--------------------
As a fellow nerd you might be interested in my [github] repository.

[bcn_koma]: https://raw.github.com/bijancn/bcn_scripts/master/texmf/tex/latex/bcn_koma.sty
[bcn_beam]: https://raw.github.com/bijancn/bcn_scripts/master/texmf/tex/latex/bcn_beamer.sty
[bcn_beam_temp]: https://raw.github.com/bijancn/bcn_scripts/master/texmf/tex/latex/bcn_beamer_example.tex
[bcn_col]: https://raw.github.com/bijancn/bcn_scripts/master/texmf/tex/latex/bcn_color.sty
[bcn_comm]: https://raw.github.com/bijancn/bcn_scripts/master/texmf/tex/latex/bcn_commands.sty
[bcn_lett]: https://raw.github.com/bijancn/bcn_scripts/master/texmf/tex/latex/bcn_letter.lco
[bcn_lett_pdf]: https://raw.github.com/bijancn/bcn_scripts/master/texmf/tex/latex/bcn_letter_example.pdf
[bcn_lett_ex]: https://raw.github.com/bijancn/bcn_scripts/master/texmf/tex/latex/bcn_letter_example.tex
[github]: https://github.com/bijancn
