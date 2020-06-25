This archive corresponds to the paper "Formalizing functional analysis
structures in dependent type theory" by Reynald Affeldt, Cyril Cohen,
Marie Kerjean, Assia Mahboubi, Damien Rouhling, Kazuhiko Sakaguchi
(submitted for publication).

It contains:
- a development version of MathComp and of MathComp-Analysis
  that can be compiled against a standard installation of Coq (finmap
  and bigenough are included for convenience, these are released
  versions).
  Requirements:
  + this archive has been tested with Coq 8.10.2, Coq 8.9.1, and Coq 8.8.2.
  + it takes about 15 minutes to compile on a recent, standard Linux laptop
  Compilation:
  + just execute `make` to compile mathcomp and mathcomp-analysis.
- the mockups that contain the running example and other illustrations
  mentioned in the paper:
  + packed_classes.v
  + type_classes.v
  + type_classes.lean
  + scalar_notations.v (in a dedicated directory with a _CoqProject file
    because it depends on the development version of MathComp and
    MathComp-Analysis inside this archive)
  Requirements:
  + Coq files have been tested with Coq 8.10.2 and should work with
    most recent versions since they have designed as minimal as possible
  + Lean 3 for the Lean file 
