{ stdenv, mathcomp, version ? null }:
stdenv.mkDerivation {
  name = "env";
  buildInputs = [ mathcomp ];
}
