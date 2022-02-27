(function() {var implementors = {};
implementors["boa_engine"] = [{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/struct.JsBigInt.html\" title=\"struct boa_engine::JsBigInt\">JsBigInt</a>","synthetic":false,"types":["boa_engine::bigint::JsBigInt"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/constant/enum.Const.html\" title=\"enum boa_engine::syntax::ast::constant::Const\">Const</a>","synthetic":false,"types":["boa_engine::syntax::ast::constant::Const"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/keyword/enum.Keyword.html\" title=\"enum boa_engine::syntax::ast::keyword::Keyword\">Keyword</a>","synthetic":false,"types":["boa_engine::syntax::ast::keyword::Keyword"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/parameters/struct.FormalParameterList.html\" title=\"struct boa_engine::syntax::ast::node::parameters::FormalParameterList\">FormalParameterList</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::parameters::FormalParameterList"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/parameters/struct.FormalParameterListFlags.html\" title=\"struct boa_engine::syntax::ast::node::parameters::FormalParameterListFlags\">FormalParameterListFlags</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::parameters::FormalParameterListFlags"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/parameters/struct.FormalParameter.html\" title=\"struct boa_engine::syntax::ast::node::parameters::FormalParameter\">FormalParameter</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::parameters::FormalParameter"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/array/struct.ArrayDecl.html\" title=\"struct boa_engine::syntax::ast::node::array::ArrayDecl\">ArrayDecl</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::array::ArrayDecl"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/await_expr/struct.AwaitExpr.html\" title=\"struct boa_engine::syntax::ast::node::await_expr::AwaitExpr\">AwaitExpr</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::await_expr::AwaitExpr"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/block/struct.Block.html\" title=\"struct boa_engine::syntax::ast::node::block::Block\">Block</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::block::Block"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/call/struct.Call.html\" title=\"struct boa_engine::syntax::ast::node::call::Call\">Call</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::call::Call"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/conditional/conditional_op/struct.ConditionalOp.html\" title=\"struct boa_engine::syntax::ast::node::conditional::conditional_op::ConditionalOp\">ConditionalOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::conditional::conditional_op::ConditionalOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/conditional/if_node/struct.If.html\" title=\"struct boa_engine::syntax::ast::node::conditional::if_node::If\">If</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::conditional::if_node::If"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/arrow_function_decl/struct.ArrowFunctionDecl.html\" title=\"struct boa_engine::syntax::ast::node::declaration::arrow_function_decl::ArrowFunctionDecl\">ArrowFunctionDecl</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::arrow_function_decl::ArrowFunctionDecl"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/async_function_decl/struct.AsyncFunctionDecl.html\" title=\"struct boa_engine::syntax::ast::node::declaration::async_function_decl::AsyncFunctionDecl\">AsyncFunctionDecl</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::async_function_decl::AsyncFunctionDecl"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/async_function_expr/struct.AsyncFunctionExpr.html\" title=\"struct boa_engine::syntax::ast::node::declaration::async_function_expr::AsyncFunctionExpr\">AsyncFunctionExpr</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::async_function_expr::AsyncFunctionExpr"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/async_generator_decl/struct.AsyncGeneratorDecl.html\" title=\"struct boa_engine::syntax::ast::node::declaration::async_generator_decl::AsyncGeneratorDecl\">AsyncGeneratorDecl</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::async_generator_decl::AsyncGeneratorDecl"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/async_generator_expr/struct.AsyncGeneratorExpr.html\" title=\"struct boa_engine::syntax::ast::node::declaration::async_generator_expr::AsyncGeneratorExpr\">AsyncGeneratorExpr</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::async_generator_expr::AsyncGeneratorExpr"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/function_decl/struct.FunctionDecl.html\" title=\"struct boa_engine::syntax::ast::node::declaration::function_decl::FunctionDecl\">FunctionDecl</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::function_decl::FunctionDecl"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/function_expr/struct.FunctionExpr.html\" title=\"struct boa_engine::syntax::ast::node::declaration::function_expr::FunctionExpr\">FunctionExpr</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::function_expr::FunctionExpr"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/generator_decl/struct.GeneratorDecl.html\" title=\"struct boa_engine::syntax::ast::node::declaration::generator_decl::GeneratorDecl\">GeneratorDecl</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::generator_decl::GeneratorDecl"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/generator_expr/struct.GeneratorExpr.html\" title=\"struct boa_engine::syntax::ast::node::declaration::generator_expr::GeneratorExpr\">GeneratorExpr</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::generator_expr::GeneratorExpr"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/declaration/enum.DeclarationList.html\" title=\"enum boa_engine::syntax::ast::node::declaration::DeclarationList\">DeclarationList</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::DeclarationList"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/declaration/enum.Declaration.html\" title=\"enum boa_engine::syntax::ast::node::declaration::Declaration\">Declaration</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::Declaration"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/declaration/enum.DeclarationPattern.html\" title=\"enum boa_engine::syntax::ast::node::declaration::DeclarationPattern\">DeclarationPattern</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::DeclarationPattern"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/struct.DeclarationPatternObject.html\" title=\"struct boa_engine::syntax::ast::node::declaration::DeclarationPatternObject\">DeclarationPatternObject</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::DeclarationPatternObject"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/declaration/struct.DeclarationPatternArray.html\" title=\"struct boa_engine::syntax::ast::node::declaration::DeclarationPatternArray\">DeclarationPatternArray</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::DeclarationPatternArray"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/declaration/enum.BindingPatternTypeObject.html\" title=\"enum boa_engine::syntax::ast::node::declaration::BindingPatternTypeObject\">BindingPatternTypeObject</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::BindingPatternTypeObject"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/declaration/enum.BindingPatternTypeArray.html\" title=\"enum boa_engine::syntax::ast::node::declaration::BindingPatternTypeArray\">BindingPatternTypeArray</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::declaration::BindingPatternTypeArray"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/field/get_const_field/struct.GetConstField.html\" title=\"struct boa_engine::syntax::ast::node::field::get_const_field::GetConstField\">GetConstField</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::field::get_const_field::GetConstField"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/field/get_field/struct.GetField.html\" title=\"struct boa_engine::syntax::ast::node::field::get_field::GetField\">GetField</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::field::get_field::GetField"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/identifier/struct.Identifier.html\" title=\"struct boa_engine::syntax::ast::node::identifier::Identifier\">Identifier</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::identifier::Identifier"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/iteration/enum.IterableLoopInitializer.html\" title=\"enum boa_engine::syntax::ast::node::iteration::IterableLoopInitializer\">IterableLoopInitializer</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::IterableLoopInitializer"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/iteration/break_node/struct.Break.html\" title=\"struct boa_engine::syntax::ast::node::iteration::break_node::Break\">Break</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::break_node::Break"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/iteration/continue_node/struct.Continue.html\" title=\"struct boa_engine::syntax::ast::node::iteration::continue_node::Continue\">Continue</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::continue_node::Continue"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/iteration/do_while_loop/struct.DoWhileLoop.html\" title=\"struct boa_engine::syntax::ast::node::iteration::do_while_loop::DoWhileLoop\">DoWhileLoop</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::do_while_loop::DoWhileLoop"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/iteration/for_in_loop/struct.ForInLoop.html\" title=\"struct boa_engine::syntax::ast::node::iteration::for_in_loop::ForInLoop\">ForInLoop</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::for_in_loop::ForInLoop"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/iteration/for_loop/struct.ForLoop.html\" title=\"struct boa_engine::syntax::ast::node::iteration::for_loop::ForLoop\">ForLoop</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::for_loop::ForLoop"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/iteration/for_loop/struct.InnerForLoop.html\" title=\"struct boa_engine::syntax::ast::node::iteration::for_loop::InnerForLoop\">InnerForLoop</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::for_loop::InnerForLoop"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/iteration/for_of_loop/struct.ForOfLoop.html\" title=\"struct boa_engine::syntax::ast::node::iteration::for_of_loop::ForOfLoop\">ForOfLoop</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::for_of_loop::ForOfLoop"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/iteration/while_loop/struct.WhileLoop.html\" title=\"struct boa_engine::syntax::ast::node::iteration::while_loop::WhileLoop\">WhileLoop</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::iteration::while_loop::WhileLoop"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/new/struct.New.html\" title=\"struct boa_engine::syntax::ast::node::new::New\">New</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::new::New"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/object/struct.Object.html\" title=\"struct boa_engine::syntax::ast::node::object::Object\">Object</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::object::Object"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/object/enum.PropertyDefinition.html\" title=\"enum boa_engine::syntax::ast::node::object::PropertyDefinition\">PropertyDefinition</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::object::PropertyDefinition"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/object/enum.MethodDefinition.html\" title=\"enum boa_engine::syntax::ast::node::object::MethodDefinition\">MethodDefinition</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::object::MethodDefinition"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/object/enum.PropertyName.html\" title=\"enum boa_engine::syntax::ast::node::object::PropertyName\">PropertyName</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::object::PropertyName"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/operator/assign/struct.Assign.html\" title=\"struct boa_engine::syntax::ast::node::operator::assign::Assign\">Assign</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::operator::assign::Assign"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/operator/bin_op/struct.BinOp.html\" title=\"struct boa_engine::syntax::ast::node::operator::bin_op::BinOp\">BinOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::operator::bin_op::BinOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/operator/unary_op/struct.UnaryOp.html\" title=\"struct boa_engine::syntax::ast::node::operator::unary_op::UnaryOp\">UnaryOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::operator::unary_op::UnaryOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/return_smt/struct.Return.html\" title=\"struct boa_engine::syntax::ast::node::return_smt::Return\">Return</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::return_smt::Return"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/spread/struct.Spread.html\" title=\"struct boa_engine::syntax::ast::node::spread::Spread\">Spread</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::spread::Spread"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/statement_list/struct.StatementList.html\" title=\"struct boa_engine::syntax::ast::node::statement_list::StatementList\">StatementList</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::statement_list::StatementList"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/switch/struct.Case.html\" title=\"struct boa_engine::syntax::ast::node::switch::Case\">Case</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::switch::Case"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/switch/struct.Switch.html\" title=\"struct boa_engine::syntax::ast::node::switch::Switch\">Switch</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::switch::Switch"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/template/struct.TemplateLit.html\" title=\"struct boa_engine::syntax::ast::node::template::TemplateLit\">TemplateLit</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::template::TemplateLit"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/template/struct.TaggedTemplate.html\" title=\"struct boa_engine::syntax::ast::node::template::TaggedTemplate\">TaggedTemplate</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::template::TaggedTemplate"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/template/enum.TemplateElement.html\" title=\"enum boa_engine::syntax::ast::node::template::TemplateElement\">TemplateElement</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::template::TemplateElement"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/throw/struct.Throw.html\" title=\"struct boa_engine::syntax::ast::node::throw::Throw\">Throw</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::throw::Throw"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/try_node/struct.Try.html\" title=\"struct boa_engine::syntax::ast::node::try_node::Try\">Try</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::try_node::Try"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/try_node/struct.Catch.html\" title=\"struct boa_engine::syntax::ast::node::try_node::Catch\">Catch</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::try_node::Catch"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/try_node/struct.Finally.html\" title=\"struct boa_engine::syntax::ast::node::try_node::Finally\">Finally</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::try_node::Finally"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/node/yield/struct.Yield.html\" title=\"struct boa_engine::syntax::ast::node::yield::Yield\">Yield</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::yield::Yield"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/node/enum.Node.html\" title=\"enum boa_engine::syntax::ast::node::Node\">Node</a>","synthetic":false,"types":["boa_engine::syntax::ast::node::Node"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/op/enum.NumOp.html\" title=\"enum boa_engine::syntax::ast::op::NumOp\">NumOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::op::NumOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/op/enum.UnaryOp.html\" title=\"enum boa_engine::syntax::ast::op::UnaryOp\">UnaryOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::op::UnaryOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/op/enum.BitOp.html\" title=\"enum boa_engine::syntax::ast::op::BitOp\">BitOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::op::BitOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/op/enum.CompOp.html\" title=\"enum boa_engine::syntax::ast::op::CompOp\">CompOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::op::CompOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/op/enum.LogOp.html\" title=\"enum boa_engine::syntax::ast::op::LogOp\">LogOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::op::LogOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/op/enum.BinOp.html\" title=\"enum boa_engine::syntax::ast::op::BinOp\">BinOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::op::BinOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/op/enum.AssignOp.html\" title=\"enum boa_engine::syntax::ast::op::AssignOp\">AssignOp</a>","synthetic":false,"types":["boa_engine::syntax::ast::op::AssignOp"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/position/struct.Position.html\" title=\"struct boa_engine::syntax::ast::position::Position\">Position</a>","synthetic":false,"types":["boa_engine::syntax::ast::position::Position"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/ast/position/struct.Span.html\" title=\"struct boa_engine::syntax::ast::position::Span\">Span</a>","synthetic":false,"types":["boa_engine::syntax::ast::position::Span"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/ast/punctuator/enum.Punctuator.html\" title=\"enum boa_engine::syntax::ast::punctuator::Punctuator\">Punctuator</a>","synthetic":false,"types":["boa_engine::syntax::ast::punctuator::Punctuator"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/lexer/template/struct.TemplateString.html\" title=\"struct boa_engine::syntax::lexer::template::TemplateString\">TemplateString</a>","synthetic":false,"types":["boa_engine::syntax::lexer::template::TemplateString"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_engine/syntax/lexer/token/struct.Token.html\" title=\"struct boa_engine::syntax::lexer::token::Token\">Token</a>","synthetic":false,"types":["boa_engine::syntax::lexer::token::Token"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/lexer/token/enum.Numeric.html\" title=\"enum boa_engine::syntax::lexer::token::Numeric\">Numeric</a>","synthetic":false,"types":["boa_engine::syntax::lexer::token::Numeric"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_engine/syntax/lexer/token/enum.TokenKind.html\" title=\"enum boa_engine::syntax::lexer::token::TokenKind\">TokenKind</a>","synthetic":false,"types":["boa_engine::syntax::lexer::token::TokenKind"]}];
implementors["boa_interner"] = [{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_interner/struct.Sym.html\" title=\"struct boa_interner::Sym\">Sym</a>","synthetic":false,"types":["boa_interner::Sym"]}];
implementors["boa_tester"] = [{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_tester/results/struct.ResultInfo.html\" title=\"struct boa_tester::results::ResultInfo\">ResultInfo</a>","synthetic":false,"types":["boa_tester::results::ResultInfo"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_tester/results/struct.ReducedResultInfo.html\" title=\"struct boa_tester::results::ReducedResultInfo\">ReducedResultInfo</a>","synthetic":false,"types":["boa_tester::results::ReducedResultInfo"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_tester/struct.SuiteResult.html\" title=\"struct boa_tester::SuiteResult\">SuiteResult</a>","synthetic":false,"types":["boa_tester::SuiteResult"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"boa_tester/struct.TestResult.html\" title=\"struct boa_tester::TestResult\">TestResult</a>","synthetic":false,"types":["boa_tester::TestResult"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"boa_tester/enum.TestOutcomeResult.html\" title=\"enum boa_tester::TestOutcomeResult\">TestOutcomeResult</a>","synthetic":false,"types":["boa_tester::TestOutcomeResult"]}];
implementors["num_bigint"] = [{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"num_bigint/enum.Sign.html\" title=\"enum num_bigint::Sign\">Sign</a>","synthetic":false,"types":["num_bigint::bigint::Sign"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]}];
implementors["serde_json"] = [{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"serde_json/struct.Map.html\" title=\"struct serde_json::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.59.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;","synthetic":false,"types":["serde_json::map::Map"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>","synthetic":false,"types":["serde_json::number::Number"]}];
implementors["serde_yaml"] = [{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"serde_yaml/struct.Mapping.html\" title=\"struct serde_yaml::Mapping\">Mapping</a>","synthetic":false,"types":["serde_yaml::mapping::Mapping"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"serde_yaml/struct.Number.html\" title=\"struct serde_yaml::Number\">Number</a>","synthetic":false,"types":["serde_yaml::number::Number"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"serde_yaml/enum.Value.html\" title=\"enum serde_yaml::Value\">Value</a>","synthetic":false,"types":["serde_yaml::value::Value"]}];
implementors["string_interner"] = [{"text":"impl&lt;B, H&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"string_interner/struct.StringInterner.html\" title=\"struct string_interner::StringInterner\">StringInterner</a>&lt;B, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"string_interner/backend/trait.Backend.html\" title=\"trait string_interner::backend::Backend\">Backend</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"string_interner/backend/trait.Backend.html\" title=\"trait string_interner::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"string_interner/backend/trait.Backend.html#associatedtype.Symbol\" title=\"type string_interner::backend::Backend::Symbol\">Symbol</a>: <a class=\"trait\" href=\"string_interner/trait.Symbol.html\" title=\"trait string_interner::Symbol\">Symbol</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.reference.html\">&amp;'a </a>B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">(</a>&lt;B as <a class=\"trait\" href=\"string_interner/backend/trait.Backend.html\" title=\"trait string_interner::backend::Backend\">Backend</a>&gt;::<a class=\"associatedtype\" href=\"string_interner/backend/trait.Backend.html#associatedtype.Symbol\" title=\"type string_interner::backend::Backend::Symbol\">Symbol</a>, &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.str.html\">str</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.tuple.html\">)</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["string_interner::interner::StringInterner"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()