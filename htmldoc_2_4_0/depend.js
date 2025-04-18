        var depends = [
        
{ data: { id: "cluster_all", name: "all" } },
{ data: { id: "cluster_all_plus", name: "+", parent: "cluster_all" } },
{ data: { id: "all", name: "all", parent: "cluster_all", released: "no" } },
{ data: { id: "cluster_solvable", name: "solvable" } },
{ data: { id: "cluster_solvable_plus", name: "+", parent: "cluster_solvable" } },
{ data: { id: "center", name: "center", parent: "cluster_solvable", released: "no" } },
{ data: { id: "alt", name: "alt", parent: "cluster_solvable", released: "no" } },
{ data: { id: "commutator", name: "commutator", parent: "cluster_solvable", released: "no" } },
{ data: { id: "nilpotent", name: "nilpotent", parent: "cluster_solvable", released: "no" } },
{ data: { id: "cyclic", name: "cyclic", parent: "cluster_solvable", released: "no" } },
{ data: { id: "hall", name: "hall", parent: "cluster_solvable", released: "no" } },
{ data: { id: "gfunctor", name: "gfunctor", parent: "cluster_solvable", released: "no" } },
{ data: { id: "jordanholder", name: "jordanholder", parent: "cluster_solvable", released: "no" } },
{ data: { id: "all_solvable", name: "all_solvable", parent: "cluster_solvable", released: "no" } },
{ data: { id: "frobenius", name: "frobenius", parent: "cluster_solvable", released: "no" } },
{ data: { id: "pgroup", name: "pgroup", parent: "cluster_solvable", released: "no" } },
{ data: { id: "finmodule", name: "finmodule", parent: "cluster_solvable", released: "no" } },
{ data: { id: "primitive_action", name: "primitive_action", parent: "cluster_solvable", released: "no" } },
{ data: { id: "extremal", name: "extremal", parent: "cluster_solvable", released: "no" } },
{ data: { id: "extraspecial", name: "extraspecial", parent: "cluster_solvable", released: "no" } },
{ data: { id: "sylow", name: "sylow", parent: "cluster_solvable", released: "no" } },
{ data: { id: "abelian", name: "abelian", parent: "cluster_solvable", released: "no" } },
{ data: { id: "burnside_app", name: "burnside_app", parent: "cluster_solvable", released: "no" } },
{ data: { id: "maximal", name: "maximal", parent: "cluster_solvable", released: "no" } },
{ data: { id: "gseries", name: "gseries", parent: "cluster_solvable", released: "no" } },
{ data: { id: "cluster_character", name: "character" } },
{ data: { id: "cluster_character_plus", name: "+", parent: "cluster_character" } },
{ data: { id: "vcharacter", name: "vcharacter", parent: "cluster_character", released: "no" } },
{ data: { id: "integral_char", name: "integral_char", parent: "cluster_character", released: "no" } },
{ data: { id: "mxabelem", name: "mxabelem", parent: "cluster_character", released: "no" } },
{ data: { id: "inertia", name: "inertia", parent: "cluster_character", released: "no" } },
{ data: { id: "all_character", name: "all_character", parent: "cluster_character", released: "no" } },
{ data: { id: "mxrepresentation", name: "mxrepresentation", parent: "cluster_character", released: "no" } },
{ data: { id: "character", name: "character", parent: "cluster_character", released: "no" } },
{ data: { id: "classfun", name: "classfun", parent: "cluster_character", released: "no" } },
{ data: { id: "cluster_field", name: "field" } },
{ data: { id: "cluster_field_plus", name: "+", parent: "cluster_field" } },
{ data: { id: "all_field", name: "all_field", parent: "cluster_field", released: "no" } },
{ data: { id: "fieldext", name: "fieldext", parent: "cluster_field", released: "no" } },
{ data: { id: "qfpoly", name: "qfpoly", parent: "cluster_field", released: "no" } },
{ data: { id: "algC", name: "algC", parent: "cluster_field", released: "no" } },
{ data: { id: "separable", name: "separable", parent: "cluster_field", released: "no" } },
{ data: { id: "falgebra", name: "falgebra", parent: "cluster_field", released: "no" } },
{ data: { id: "finfield", name: "finfield", parent: "cluster_field", released: "no" } },
{ data: { id: "algebraics_fundamentals", name: "algebraics_fundamentals", parent: "cluster_field", released: "no" } },
{ data: { id: "galois", name: "galois", parent: "cluster_field", released: "no" } },
{ data: { id: "closed_field", name: "closed_field", parent: "cluster_field", released: "no" } },
{ data: { id: "algnum", name: "algnum", parent: "cluster_field", released: "no" } },
{ data: { id: "cyclotomic", name: "cyclotomic", parent: "cluster_field", released: "no" } },
{ data: { id: "cluster_algebra", name: "algebra" } },
{ data: { id: "cluster_algebra_plus", name: "+", parent: "cluster_algebra" } },
{ data: { id: "finalg", name: "finalg", parent: "cluster_algebra", released: "no" } },
{ data: { id: "sesquilinear", name: "sesquilinear", parent: "cluster_algebra", released: "no" } },
{ data: { id: "fraction", name: "fraction", parent: "cluster_algebra", released: "no" } },
{ data: { id: "vector", name: "vector", parent: "cluster_algebra", released: "no" } },
{ data: { id: "mxalgebra", name: "mxalgebra", parent: "cluster_algebra", released: "no" } },
{ data: { id: "polyXY", name: "polyXY", parent: "cluster_algebra", released: "no" } },
{ data: { id: "intdiv", name: "intdiv", parent: "cluster_algebra", released: "no" } },
{ data: { id: "mxred", name: "mxred", parent: "cluster_algebra", released: "no" } },
{ data: { id: "ssrnum", name: "ssrnum", parent: "cluster_algebra", released: "no" } },
{ data: { id: "matrix", name: "matrix", parent: "cluster_algebra", released: "no" } },
{ data: { id: "spectral", name: "spectral", parent: "cluster_algebra", released: "no" } },
{ data: { id: "zmodp", name: "zmodp", parent: "cluster_algebra", released: "no" } },
{ data: { id: "ring_quotient", name: "ring_quotient", parent: "cluster_algebra", released: "no" } },
{ data: { id: "mxpoly", name: "mxpoly", parent: "cluster_algebra", released: "no" } },
{ data: { id: "ssralg", name: "ssralg", parent: "cluster_algebra", released: "no" } },
{ data: { id: "interval_inference", name: "interval_inference", parent: "cluster_algebra", released: "no" } },
{ data: { id: "ssrint", name: "ssrint", parent: "cluster_algebra", released: "no" } },
{ data: { id: "archimedean", name: "archimedean", parent: "cluster_algebra", released: "no" } },
{ data: { id: "countalg", name: "countalg", parent: "cluster_algebra", released: "no" } },
{ data: { id: "all_algebra", name: "all_algebra", parent: "cluster_algebra", released: "no" } },
{ data: { id: "polydiv", name: "polydiv", parent: "cluster_algebra", released: "no" } },
{ data: { id: "poly", name: "poly", parent: "cluster_algebra", released: "no" } },
{ data: { id: "interval", name: "interval", parent: "cluster_algebra", released: "no" } },
{ data: { id: "qpoly", name: "qpoly", parent: "cluster_algebra", released: "no" } },
{ data: { id: "rat", name: "rat", parent: "cluster_algebra", released: "no" } },
{ data: { id: "cluster_ssreflect", name: "ssreflect" } },
{ data: { id: "cluster_ssreflect_plus", name: "+", parent: "cluster_ssreflect" } },
{ data: { id: "generic_quotient", name: "generic_quotient", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "finset", name: "finset", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrAC", name: "ssrAC", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "seq", name: "seq", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "binomial", name: "binomial", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "all_ssreflect", name: "all_ssreflect", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "fingraph", name: "fingraph", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "order", name: "order", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrnotations", name: "ssrnotations", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "fintype", name: "fintype", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrmatching", name: "ssrmatching", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "div", name: "div", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "finfun", name: "finfun", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "eqtype", name: "eqtype", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrnat", name: "ssrnat", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "choice", name: "choice", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "prime", name: "prime", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrfun", name: "ssrfun", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "path", name: "path", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "tuple", name: "tuple", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssreflect", name: "ssreflect", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrbool", name: "ssrbool", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "bigop", name: "bigop", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "cluster_fingroup", name: "fingroup" } },
{ data: { id: "cluster_fingroup_plus", name: "+", parent: "cluster_fingroup" } },
{ data: { id: "automorphism", name: "automorphism", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "morphism", name: "morphism", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "perm", name: "perm", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "gproduct", name: "gproduct", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "presentation", name: "presentation", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "quotient", name: "quotient", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "action", name: "action", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "all_fingroup", name: "all_fingroup", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "fingroup", name: "fingroup", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "edge0", source: "all", target: "all_field" } },
{ data: { id: "edge1", source: "all_character", target: "inertia" } },
{ data: { id: "edge2", source: "binomial", target: "finset" } },
{ data: { id: "edge3", source: "fingroup", target: "finset" } },
{ data: { id: "edge4", source: "order", target: "finset" } },
{ data: { id: "edge5", source: "all_ssreflect", target: "ssrAC" } },
{ data: { id: "edge6", source: "ssrnum", target: "ssrAC" } },
{ data: { id: "edge7", source: "burnside_app", target: "ssrAC" } },
{ data: { id: "edge8", source: "fraction", target: "ssrAC" } },
{ data: { id: "edge9", source: "all_ssreflect", target: "binomial" } },
{ data: { id: "edge10", source: "perm", target: "binomial" } },
{ data: { id: "edge11", source: "ssralg", target: "binomial" } },
{ data: { id: "edge12", source: "all_character", target: "mxabelem" } },
{ data: { id: "edge13", source: "algnum", target: "cyclotomic" } },
{ data: { id: "edge14", source: "finfield", target: "cyclotomic" } },
{ data: { id: "edge15", source: "all_field", target: "algnum" } },
{ data: { id: "edge16", source: "classfun", target: "algnum" } },
{ data: { id: "edge17", source: "ssrnum", target: "fingroup" } },
{ data: { id: "edge18", source: "morphism", target: "fingroup" } },
{ data: { id: "edge19", source: "inertia", target: "frobenius" } },
{ data: { id: "edge20", source: "vcharacter", target: "frobenius" } },
{ data: { id: "edge21", source: "all_solvable", target: "frobenius" } },
{ data: { id: "edge22", source: "all_algebra", target: "spectral" } },
{ data: { id: "edge23", source: "sylow", target: "pgroup" } },
{ data: { id: "edge24", source: "mxrepresentation", target: "pgroup" } },
{ data: { id: "edge25", source: "fintype", target: "div" } },
{ data: { id: "edge26", source: "all_fingroup", target: "gproduct" } },
{ data: { id: "edge27", source: "cyclic", target: "gproduct" } },
{ data: { id: "edge28", source: "gfunctor", target: "gproduct" } },
{ data: { id: "edge29", source: "maximal", target: "finmodule" } },
{ data: { id: "edge30", source: "archimedean", target: "ssrint" } },
{ data: { id: "edge31", source: "intdiv", target: "ssrint" } },
{ data: { id: "edge32", source: "interval_inference", target: "ssrint" } },
{ data: { id: "edge33", source: "rat", target: "archimedean" } },
{ data: { id: "edge34", source: "ssrbool", target: "ssrfun" } },
{ data: { id: "edge35", source: "algebraics_fundamentals", target: "sylow" } },
{ data: { id: "edge36", source: "abelian", target: "sylow" } },
{ data: { id: "edge37", source: "zmodp", target: "finalg" } },
{ data: { id: "edge38", source: "mxrepresentation", target: "center" } },
{ data: { id: "edge39", source: "gseries", target: "center" } },
{ data: { id: "edge40", source: "qpoly", target: "vector" } },
{ data: { id: "edge41", source: "falgebra", target: "vector" } },
{ data: { id: "edge42", source: "sesquilinear", target: "vector" } },
{ data: { id: "edge43", source: "rat", target: "vector" } },
{ data: { id: "edge44", source: "ssrfun", target: "ssreflect" } },
{ data: { id: "edge45", source: "finfun", target: "tuple" } },
{ data: { id: "edge46", source: "all", target: "all_ssreflect" } },
{ data: { id: "edge47", source: "spectral", target: "mxred" } },
{ data: { id: "edge48", source: "alt", target: "primitive_action" } },
{ data: { id: "edge49", source: "burnside_app", target: "primitive_action" } },
{ data: { id: "edge50", source: "gproduct", target: "action" } },
{ data: { id: "edge51", source: "finalg", target: "action" } },
{ data: { id: "edge52", source: "all_ssreflect", target: "order" } },
{ data: { id: "edge53", source: "ssrnum", target: "order" } },
{ data: { id: "edge54", source: "matrix", target: "order" } },
{ data: { id: "edge55", source: "quotient", target: "automorphism" } },
{ data: { id: "edge56", source: "automorphism", target: "perm" } },
{ data: { id: "edge57", source: "all", target: "all_character" } },
{ data: { id: "edge58", source: "ring_quotient", target: "ssralg" } },
{ data: { id: "edge59", source: "countalg", target: "ssralg" } },
{ data: { id: "edge60", source: "eqtype", target: "ssrbool" } },
{ data: { id: "edge61", source: "all_algebra", target: "ring_quotient" } },
{ data: { id: "edge62", source: "closed_field", target: "ring_quotient" } },
{ data: { id: "edge63", source: "all", target: "all_algebra" } },
{ data: { id: "edge64", source: "fraction", target: "polydiv" } },
{ data: { id: "edge65", source: "intdiv", target: "polydiv" } },
{ data: { id: "edge66", source: "mxpoly", target: "polydiv" } },
{ data: { id: "edge67", source: "matrix", target: "zmodp" } },
{ data: { id: "edge68", source: "cyclic", target: "zmodp" } },
{ data: { id: "edge69", source: "all_algebra", target: "qpoly" } },
{ data: { id: "edge70", source: "qfpoly", target: "qpoly" } },
{ data: { id: "edge71", source: "vcharacter", target: "integral_char" } },
{ data: { id: "edge72", source: "all_solvable", target: "alt" } },
{ data: { id: "edge73", source: "all_field", target: "qfpoly" } },
{ data: { id: "edge74", source: "all_fingroup", target: "presentation" } },
{ data: { id: "edge75", source: "extremal", target: "presentation" } },
{ data: { id: "edge76", source: "div", target: "seq" } },
{ data: { id: "edge77", source: "choice", target: "seq" } },
{ data: { id: "edge78", source: "path", target: "seq" } },
{ data: { id: "edge79", source: "all_solvable", target: "jordanholder" } },
{ data: { id: "edge80", source: "vector", target: "mxalgebra" } },
{ data: { id: "edge81", source: "mxpoly", target: "mxalgebra" } },
{ data: { id: "edge82", source: "mxabelem", target: "maximal" } },
{ data: { id: "edge83", source: "alt", target: "maximal" } },
{ data: { id: "edge84", source: "hall", target: "maximal" } },
{ data: { id: "edge85", source: "extremal", target: "maximal" } },
{ data: { id: "edge86", source: "ssrint", target: "ssrnum" } },
{ data: { id: "edge87", source: "sesquilinear", target: "ssrnum" } },
{ data: { id: "edge88", source: "interval", target: "ssrnum" } },
{ data: { id: "edge89", source: "mxalgebra", target: "matrix" } },
{ data: { id: "edge90", source: "extremal", target: "matrix" } },
{ data: { id: "edge91", source: "intdiv", target: "matrix" } },
{ data: { id: "edge92", source: "all", target: "all_fingroup" } },
{ data: { id: "edge93", source: "frobenius", target: "hall" } },
{ data: { id: "edge94", source: "extraspecial", target: "extremal" } },
{ data: { id: "edge95", source: "all_solvable", target: "extraspecial" } },
{ data: { id: "edge96", source: "all_solvable", target: "burnside_app" } },
{ data: { id: "edge97", source: "ssrnat", target: "eqtype" } },
{ data: { id: "edge98", source: "mxabelem", target: "mxrepresentation" } },
{ data: { id: "edge99", source: "character", target: "mxrepresentation" } },
{ data: { id: "edge100", source: "qfpoly", target: "finfield" } },
{ data: { id: "edge101", source: "algC", target: "algebraics_fundamentals" } },
{ data: { id: "edge102", source: "maximal", target: "abelian" } },
{ data: { id: "edge103", source: "finfield", target: "abelian" } },
{ data: { id: "edge104", source: "character", target: "abelian" } },
{ data: { id: "edge105", source: "all_algebra", target: "polyXY" } },
{ data: { id: "edge106", source: "separable", target: "polyXY" } },
{ data: { id: "edge107", source: "galois", target: "separable" } },
{ data: { id: "edge108", source: "separable", target: "fieldext" } },
{ data: { id: "edge109", source: "tuple", target: "fintype" } },
{ data: { id: "edge110", source: "generic_quotient", target: "fintype" } },
{ data: { id: "edge111", source: "fingraph", target: "fintype" } },
{ data: { id: "edge112", source: "fieldext", target: "falgebra" } },
{ data: { id: "edge113", source: "cyclotomic", target: "algC" } },
{ data: { id: "edge114", source: "algebraics_fundamentals", target: "closed_field" } },
{ data: { id: "edge115", source: "perm", target: "morphism" } },
{ data: { id: "edge116", source: "presentation", target: "morphism" } },
{ data: { id: "edge117", source: "all_algebra", target: "fraction" } },
{ data: { id: "edge118", source: "all_ssreflect", target: "generic_quotient" } },
{ data: { id: "edge119", source: "ring_quotient", target: "generic_quotient" } },
{ data: { id: "edge120", source: "fieldext", target: "generic_quotient" } },
{ data: { id: "edge121", source: "fraction", target: "generic_quotient" } },
{ data: { id: "edge122", source: "finmodule", target: "commutator" } },
{ data: { id: "edge123", source: "mxrepresentation", target: "commutator" } },
{ data: { id: "edge124", source: "gseries", target: "commutator" } },
{ data: { id: "edge125", source: "pgroup", target: "cyclic" } },
{ data: { id: "edge126", source: "finmodule", target: "cyclic" } },
{ data: { id: "edge127", source: "center", target: "cyclic" } },
{ data: { id: "edge128", source: "separable", target: "cyclic" } },
{ data: { id: "edge129", source: "sylow", target: "nilpotent" } },
{ data: { id: "edge130", source: "action", target: "quotient" } },
{ data: { id: "edge131", source: "spectral", target: "sesquilinear" } },
{ data: { id: "edge132", source: "pgroup", target: "gfunctor" } },
{ data: { id: "edge133", source: "center", target: "gfunctor" } },
{ data: { id: "edge134", source: "commutator", target: "gfunctor" } },
{ data: { id: "edge135", source: "all_ssreflect", target: "fingraph" } },
{ data: { id: "edge136", source: "algebraics_fundamentals", target: "galois" } },
{ data: { id: "edge137", source: "rat", target: "intdiv" } },
{ data: { id: "edge138", source: "character", target: "classfun" } },
{ data: { id: "edge139", source: "inertia", target: "character" } },
{ data: { id: "edge140", source: "integral_char", target: "character" } },
{ data: { id: "edge141", source: "fintype", target: "choice" } },
{ data: { id: "edge142", source: "all_character", target: "vcharacter" } },
{ data: { id: "edge143", source: "all", target: "all_solvable" } },
{ data: { id: "edge144", source: "mxred", target: "mxpoly" } },
{ data: { id: "edge145", source: "qpoly", target: "mxpoly" } },
{ data: { id: "edge146", source: "mxrepresentation", target: "mxpoly" } },
{ data: { id: "edge147", source: "polyXY", target: "mxpoly" } },
{ data: { id: "edge148", source: "fieldext", target: "mxpoly" } },
{ data: { id: "edge149", source: "closed_field", target: "mxpoly" } },
{ data: { id: "edge150", source: "fintype", target: "path" } },
{ data: { id: "edge151", source: "all_algebra", target: "rat" } },
{ data: { id: "edge152", source: "algebraics_fundamentals", target: "rat" } },
{ data: { id: "edge153", source: "interval_inference", target: "interval" } },
{ data: { id: "edge154", source: "seq", target: "ssrnat" } },
{ data: { id: "edge155", source: "ssrfun", target: "ssrnotations" } },
{ data: { id: "edge156", source: "finalg", target: "countalg" } },
{ data: { id: "edge157", source: "poly", target: "countalg" } },
{ data: { id: "edge158", source: "all_algebra", target: "interval_inference" } },
{ data: { id: "edge159", source: "bigop", target: "finfun" } },
{ data: { id: "edge160", source: "polydiv", target: "poly" } },
{ data: { id: "edge161", source: "ssrnum", target: "poly" } },
{ data: { id: "edge162", source: "falgebra", target: "poly" } },
{ data: { id: "edge163", source: "cyclic", target: "poly" } },
{ data: { id: "edge164", source: "binomial", target: "prime" } },
{ data: { id: "edge165", source: "fingroup", target: "prime" } },
{ data: { id: "edge166", source: "order", target: "prime" } },
{ data: { id: "edge167", source: "finset", target: "bigop" } },
{ data: { id: "edge168", source: "ssrAC", target: "bigop" } },
{ data: { id: "edge169", source: "prime", target: "bigop" } },
{ data: { id: "edge170", source: "primitive_action", target: "gseries" } },
{ data: { id: "edge171", source: "jordanholder", target: "gseries" } },
{ data: { id: "edge172", source: "nilpotent", target: "gseries" } },
{ data: { id: "edge173", source: "cluster_field", target: "cluster_solvable" } },
{ data: { id: "edge174", source: "cluster_all", target: "cluster_character" } },
{ data: { id: "edge175", source: "cluster_character", target: "cluster_field" } },
{ data: { id: "edge176", source: "cluster_solvable", target: "cluster_algebra" } },
{ data: { id: "edge177", source: "cluster_fingroup", target: "cluster_ssreflect" } },
{ data: { id: "edge178", source: "cluster_algebra", target: "cluster_fingroup" } },
 ]; 
