{ config ? {}, withEmacs ? false, print-env ? false, do-nothing ? false,
  update-nixpkgs ? false, ci-matrix ? false, ci-step ? null,
  ci ? (!isNull ci-step), inNixShell ? null
}@args:
let src = fetchGit {
  url = "https://github.com/coq-community/nix-toolbox.git";
};
in
(import src ./.
  ({config = {
      coq-attribute = "mathcomp-core-shell";
      src = ./.;
    };
   } // args)).nix-auto
