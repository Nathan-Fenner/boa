use crate::syntax::{
    ast::{
        node::{
            Declaration, DeclarationList, FormalParameterList, FunctionExpr, Return, StatementList,
        },
        Const,
    },
    parser::tests::check_parser,
};
use boa_interner::{Interner, Sym};

/// Checks async expression parsing.
#[test]
fn check_function_expression() {
    let mut interner = Interner::default();
    let add = interner.get_or_intern_static("add");
    check_parser(
        "const add = function() {
            return 1;
        };
        ",
        vec![DeclarationList::Const(
            vec![Declaration::new_with_identifier(
                add,
                Some(
                    FunctionExpr::new::<_, _, StatementList>(
                        Some(add),
                        FormalParameterList::default(),
                        vec![Return::new::<_, _, Option<Sym>>(Const::from(1), None).into()].into(),
                    )
                    .into(),
                ),
            )]
            .into(),
        )
        .into()],
        &mut interner,
    );
}

#[test]
fn check_nested_function_expression() {
    let mut interner = Interner::default();
    let a = interner.get_or_intern_static("a");
    let b = interner.get_or_intern_static("b");
    check_parser(
        "const a = function() {
            const b = function() {
                return 1;
            };
        };
        ",
        vec![DeclarationList::Const(
            vec![Declaration::new_with_identifier(
                a,
                Some(
                    FunctionExpr::new::<_, _, StatementList>(
                        Some(a),
                        FormalParameterList::default(),
                        vec![DeclarationList::Const(
                            vec![Declaration::new_with_identifier(
                                b,
                                Some(
                                    FunctionExpr::new::<_, _, StatementList>(
                                        Some(b),
                                        FormalParameterList::default(),
                                        vec![Return::new::<_, _, Option<Sym>>(
                                            Const::from(1),
                                            None,
                                        )
                                        .into()]
                                        .into(),
                                    )
                                    .into(),
                                ),
                            )]
                            .into(),
                        )
                        .into()]
                        .into(),
                    )
                    .into(),
                ),
            )]
            .into(),
        )
        .into()],
        &mut interner,
    );
}
