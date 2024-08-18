import { DiagnosticCategory, DiagnosticMessage } from "./_namespaces/lpc";

function diag(code: number, category: DiagnosticCategory, key: string, message: string, reportsUnnecessary?: {}, elidedInCompatabilityPyramid?: boolean, reportsDeprecated?: {}): DiagnosticMessage {
    return { code, category, key, message, reportsUnnecessary, elidedInCompatabilityPyramid, reportsDeprecated };
}

export const Diagnostics = {
    Merge_conflict_marker_encountered: diag(1000, DiagnosticCategory.Error, "Merge_conflict_marker_encountered_1000", "Merge conflict marker encountered."),
    Expression_expected: diag(1001, DiagnosticCategory.Error, "Expression_expected_1001", "Expression expected."),
    A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: diag(1100, DiagnosticCategory.Error, "A_default_clause_cannot_appear_more_than_once_in_a_switch_statement_1113", "A 'default' clause cannot appear more than once in a 'switch' statement."),
    Cannot_redeclare_block_scoped_variable_0: diag(2451, DiagnosticCategory.Error, "Cannot_redeclare_block_scoped_variable_0_2451", "Cannot redeclare block-scoped variable '{0}'."),
    Duplicate_identifier_0: diag(2300, DiagnosticCategory.Error, "Duplicate_identifier_0_2300", "Duplicate identifier '{0}'."),
    _0_only_refers_to_a_type_but_is_being_used_as_a_value_here: diag(2693, DiagnosticCategory.Error, "_0_only_refers_to_a_type_but_is_being_used_as_a_value_here_2693", "'{0}' only refers to a type, but is being used as a value here."),
    Circular_definition_of_import_alias_0: diag(2303, DiagnosticCategory.Error, "Circular_definition_of_import_alias_0_2303", "Circular definition of import alias '{0}'."),
    _0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0: diag(2749, DiagnosticCategory.Error, "_0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0_2749", "'{0}' refers to a value, but is being used as a type here. Did you mean 'typeof {0}'?"),
    Cannot_find_name_0_Did_you_mean_1: diag(2552, DiagnosticCategory.Error, "Cannot_find_name_0_Did_you_mean_1_2552", "Cannot find name '{0}'. Did you mean '{1}'?"),
    _0_is_declared_here: diag(2728, DiagnosticCategory.Message, "_0_is_declared_here_2728", "'{0}' is declared here."),
    No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer: diag(18004, DiagnosticCategory.Error, "No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer_18004", "No value exists in scope for the shorthand property '{0}'. Either declare one or provide an initializer."),
    Cannot_find_name_0: diag(2304, DiagnosticCategory.Error, "Cannot_find_name_0_2304", "Cannot find name '{0}'."),
    _0_is_deprecated: diag(6385, DiagnosticCategory.Suggestion, "_0_is_deprecated_6385", "'{0}' is deprecated.", /*reportsUnnecessary*/ undefined, /*elidedInCompatabilityPyramid*/ undefined, /*reportsDeprecated*/ true),
    The_declaration_was_marked_as_deprecated_here: diag(2798, DiagnosticCategory.Error, "The_declaration_was_marked_as_deprecated_here_2798", "The declaration was marked as deprecated here."),
    Cannot_assign_to_0_because_it_is_a_function: diag(2630, DiagnosticCategory.Error, "Cannot_assign_to_0_because_it_is_a_function_2630", "Cannot assign to '{0}' because it is a function."),
    Cannot_assign_to_0_because_it_is_not_a_variable: diag(2539, DiagnosticCategory.Error, "Cannot_assign_to_0_because_it_is_not_a_variable_2539", "Cannot assign to '{0}' because it is not a variable."),
    Variable_0_is_used_before_being_assigned: diag(2454, DiagnosticCategory.Error, "Variable_0_is_used_before_being_assigned_2454", "Variable '{0}' is used before being assigned."),
    Unreachable_code_detected: diag(7027, DiagnosticCategory.Error, "Unreachable_code_detected_7027", "Unreachable code detected.", /*reportsUnnecessary*/ true),
    _0_is_declared_but_its_value_is_never_read: diag(6133, DiagnosticCategory.Error, "_0_is_declared_but_its_value_is_never_read_6133", "'{0}' is declared but its value is never read.", /*reportsUnnecessary*/ true),
    All_variables_are_unused: diag(6199, DiagnosticCategory.Error, "All_variables_are_unused_6199", "All variables are unused.", /*reportsUnnecessary*/ true),
    A_function_returning_never_cannot_have_a_reachable_end_point: diag(2534, DiagnosticCategory.Error, "A_function_returning_never_cannot_have_a_reachable_end_point_2534", "A function returning 'never' cannot have a reachable end point."),
    A_function_whose_declared_type_is_neither_undefined_void_nor_any_must_return_a_value: diag(2355, DiagnosticCategory.Error, "A_function_whose_declared_type_is_neither_undefined_void_nor_any_must_return_a_value_2355", "A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value."),
    Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined: diag(2366, DiagnosticCategory.Error, "Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined_2366", "Function lacks ending return statement and return type does not include 'undefined'."),
    Not_all_code_paths_return_a_value: diag(7030, DiagnosticCategory.Error, "Not_all_code_paths_return_a_value_7030", "Not all code paths return a value."),
    A_0_parameter_must_be_the_first_parameter: diag(2680, DiagnosticCategory.Error, "A_0_parameter_must_be_the_first_parameter_2680", "A '{0}' parameter must be the first parameter."),
    A_rest_parameter_must_be_of_an_array_type: diag(2370, DiagnosticCategory.Error, "A_rest_parameter_must_be_of_an_array_type_2370", "A rest parameter must be of an array type."),
    File_0_not_found: diag(6053, DiagnosticCategory.Error, "File_0_not_found_6053", "File '{0}' not found."),
    A_file_cannot_have_a_reference_to_itself: diag(1006, DiagnosticCategory.Error, "A_file_cannot_have_a_reference_to_itself_1006", "A file cannot have a reference to itself."),
    Cannot_read_file_0_Colon_1: diag(5012, DiagnosticCategory.Error, "Cannot_read_file_0_Colon_1_5012", "Cannot read file '{0}': {1}."),
    Already_included_file_name_0_differs_from_file_name_1_only_in_casing: diag(1261, DiagnosticCategory.Error, "Already_included_file_name_0_differs_from_file_name_1_only_in_casing_1261", "Already included file name '{0}' differs from file name '{1}' only in casing."),
    File_name_0_differs_from_already_included_file_name_1_only_in_casing: diag(1149, DiagnosticCategory.Error, "File_name_0_differs_from_already_included_file_name_1_only_in_casing_1149", "File name '{0}' differs from already included file name '{1}' only in casing."),
    _0_is_of_type_unknown: diag(18046, DiagnosticCategory.Error, "_0_is_of_type_unknown_18046", "'{0}' is of type 'unknown'."),
    Object_is_of_type_unknown: diag(2571, DiagnosticCategory.Error, "Object_is_of_type_unknown_2571", "Object is of type 'unknown'."),
    Cannot_invoke_an_object_which_is_possibly_null_or_undefined: diag(2723, DiagnosticCategory.Error, "Cannot_invoke_an_object_which_is_possibly_null_or_undefined_2723", "Cannot invoke an object which is possibly 'null' or 'undefined'."),
    Cannot_invoke_an_object_which_is_possibly_null: diag(2721, DiagnosticCategory.Error, "Cannot_invoke_an_object_which_is_possibly_null_2721", "Cannot invoke an object which is possibly 'null'."),
    Cannot_invoke_an_object_which_is_possibly_undefined: diag(2722, DiagnosticCategory.Error, "Cannot_invoke_an_object_which_is_possibly_undefined_2722", "Cannot invoke an object which is possibly 'undefined'."),
    Are_you_missing_a_semicolon: diag(2734, DiagnosticCategory.Error, "Are_you_missing_a_semicolon_2734", "Are you missing a semicolon?"),
    Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: diag(2348, DiagnosticCategory.Error, "Value_of_type_0_is_not_callable_Did_you_mean_to_include_new_2348", "Value of type '{0}' is not callable. Did you mean to include 'new'?"),
    Type_0_has_no_call_signatures: diag(2757, DiagnosticCategory.Error, "Type_0_has_no_call_signatures_2757", "Type '{0}' has no call signatures."),
    Type_0_has_no_construct_signatures: diag(2761, DiagnosticCategory.Error, "Type_0_has_no_construct_signatures_2761", "Type '{0}' has no construct signatures."),
    Not_all_constituents_of_type_0_are_callable: diag(2756, DiagnosticCategory.Error, "Not_all_constituents_of_type_0_are_callable_2756", "Not all constituents of type '{0}' are callable."),
    Not_all_constituents_of_type_0_are_constructable: diag(2760, DiagnosticCategory.Error, "Not_all_constituents_of_type_0_are_constructable_2760", "Not all constituents of type '{0}' are constructable."),
    No_constituent_of_type_0_is_callable: diag(2755, DiagnosticCategory.Error, "No_constituent_of_type_0_is_callable_2755", "No constituent of type '{0}' is callable."),
    No_constituent_of_type_0_is_constructable: diag(2759, DiagnosticCategory.Error, "No_constituent_of_type_0_is_constructable_2759", "No constituent of type '{0}' is constructable."),
    Each_member_of_the_union_type_0_has_signatures_but_none_of_those_signatures_are_compatible_with_each_other: diag(2758, DiagnosticCategory.Error, "Each_member_of_the_union_type_0_has_signatures_but_none_of_those_signatures_are_compatible_with_each_2758", "Each member of the union type '{0}' has signatures, but none of those signatures are compatible with each other."),
    Each_member_of_the_union_type_0_has_construct_signatures_but_none_of_those_signatures_are_compatible_with_each_other: diag(2762, DiagnosticCategory.Error, "Each_member_of_the_union_type_0_has_construct_signatures_but_none_of_those_signatures_are_compatible_2762", "Each member of the union type '{0}' has construct signatures, but none of those signatures are compatible with each other."),
    This_expression_is_not_callable: diag(2349, DiagnosticCategory.Error, "This_expression_is_not_callable_2349", "This expression is not callable."),
    This_expression_is_not_constructable: diag(2351, DiagnosticCategory.Error, "This_expression_is_not_constructable_2351", "This expression is not constructable."),
    An_expression_of_type_void_cannot_be_tested_for_truthiness: diag(1345, DiagnosticCategory.Error, "An_expression_of_type_void_cannot_be_tested_for_truthiness_1345", "An expression of type 'void' cannot be tested for truthiness."),
    This_condition_will_always_return_0: diag(2845, DiagnosticCategory.Error, "This_condition_will_always_return_0_2845", "This condition will always return '{0}'."),
    This_condition_will_always_return_true_since_this_function_is_always_defined_Did_you_mean_to_call_it_instead: diag(2774, DiagnosticCategory.Error, "This_condition_will_always_return_true_since_this_function_is_always_defined_Did_you_mean_to_call_it_2774", "This condition will always return true since this function is always defined. Did you mean to call it instead?"),
    The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead: diag(2447, DiagnosticCategory.Error, "The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead_2447", "The '{0}' operator is not allowed for boolean types. Consider using '{1}' instead."),
    The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type: diag(2362, DiagnosticCategory.Error, "The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type_2362", "The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type."),
    The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type: diag(2363, DiagnosticCategory.Error, "The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type_2363", "The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type."),
    This_condition_will_always_return_0_since_JavaScript_compares_objects_by_reference_not_value: diag(2839, DiagnosticCategory.Error, "This_condition_will_always_return_0_since_JavaScript_compares_objects_by_reference_not_value_2839", "This condition will always return '{0}' since JavaScript compares objects by reference, not value."),
    Left_side_of_comma_operator_is_unused_and_has_no_side_effects: diag(2695, DiagnosticCategory.Error, "Left_side_of_comma_operator_is_unused_and_has_no_side_effects_2695", "Left side of comma operator is unused and has no side effects.", /*reportsUnnecessary*/ true),
    The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access: diag(2364, DiagnosticCategory.Error, "The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access_2364", "The left-hand side of an assignment expression must be a variable or a property access."),
    Did_you_mean_to_use_new_with_this_expression: diag(6213, DiagnosticCategory.Message, "Did_you_mean_to_use_new_with_this_expression_6213", "Did you mean to use 'new' with this expression?"),
    Operator_0_cannot_be_applied_to_types_1_and_2: diag(2365, DiagnosticCategory.Error, "Operator_0_cannot_be_applied_to_types_1_and_2_2365", "Operator '{0}' cannot be applied to types '{1}' and '{2}'."),
    This_comparison_appears_to_be_unintentional_because_the_types_0_and_1_have_no_overlap: diag(2367, DiagnosticCategory.Error, "This_comparison_appears_to_be_unintentional_because_the_types_0_and_1_have_no_overlap_2367", "This comparison appears to be unintentional because the types '{0}' and '{1}' have no overlap."),
    Did_you_mean_to_call_this_expression: diag(6212, DiagnosticCategory.Message, "Did_you_mean_to_call_this_expression_6212", "Did you mean to call this expression?"),
    _0_was_also_declared_here: diag(6203, DiagnosticCategory.Message, "_0_was_also_declared_here_6203", "'{0}' was also declared here."),
    and_here: diag(6204, DiagnosticCategory.Message, "and_here_6204", "and here."),
    The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access: diag(2779, DiagnosticCategory.Error, "The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access_2779", "The left-hand side of an assignment expression may not be an optional property access."),
    Did_you_mean_0: diag(1369, DiagnosticCategory.Message, "Did_you_mean_0_1369", "Did you mean '{0}'?"),
    An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type: diag(2356, DiagnosticCategory.Error, "An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type_2356", "An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type."),
    The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access: diag(2357, DiagnosticCategory.Error, "The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access_2357", "The operand of an increment or decrement operator must be a variable or a property access."),
    The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access: diag(2777, DiagnosticCategory.Error, "The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access_2777", "The operand of an increment or decrement operator may not be an optional property access."),
    Operator_0_cannot_be_applied_to_type_1: diag(2736, DiagnosticCategory.Error, "Operator_0_cannot_be_applied_to_type_1_2736", "Operator '{0}' cannot be applied to type '{1}'."),
    The_body_of_an_if_statement_cannot_be_the_empty_statement: diag(1313, DiagnosticCategory.Error, "The_body_of_an_if_statement_cannot_be_the_empty_statement_1313", "The body of an 'if' statement cannot be the empty statement."),
    Index_signature_in_type_0_only_permits_reading: diag(2542, DiagnosticCategory.Error, "Index_signature_in_type_0_only_permits_reading_2542", "Index signature in type '{0}' only permits reading."),
    Property_0_is_used_before_being_assigned: diag(2565, DiagnosticCategory.Error, "Property_0_is_used_before_being_assigned_2565", "Property '{0}' is used before being assigned."),
    All_declarations_of_0_must_have_identical_modifiers: diag(2687, DiagnosticCategory.Error, "All_declarations_of_0_must_have_identical_modifiers_2687", "All declarations of '{0}' must have identical modifiers."),
    Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1: diag(2481, DiagnosticCategory.Error, "Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1_2481", "Cannot initialize outer scoped variable '{0}' in the same scope as block scoped declaration '{1}'."),
    Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_type_2: diag(2717, DiagnosticCategory.Error, "Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_t_2717", "Subsequent property declarations must have the same type.  Property '{0}' must be of type '{1}', but here has type '{2}'."),
    Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: diag(2403, DiagnosticCategory.Error, "Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_t_2403", "Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'."),
    Type_instantiation_is_excessively_deep_and_possibly_infinite: diag(2589, DiagnosticCategory.Error, "Type_instantiation_is_excessively_deep_and_possibly_infinite_2589", "Type instantiation is excessively deep and possibly infinite."),
    Object_literal_s_property_0_implicitly_has_an_1_type: diag(7018, DiagnosticCategory.Error, "Object_literal_s_property_0_implicitly_has_an_1_type_7018", "Object literal's property '{0}' implicitly has an '{1}' type."),
    Type_arguments_for_0_circularly_reference_themselves: diag(4109, DiagnosticCategory.Error, "Type_arguments_for_0_circularly_reference_themselves_4109", "Type arguments for '{0}' circularly reference themselves."),
    Tuple_type_arguments_circularly_reference_themselves: diag(4110, DiagnosticCategory.Error, "Tuple_type_arguments_circularly_reference_themselves_4110", "Tuple type arguments circularly reference themselves."),
    A_return_statement_can_only_be_used_within_a_function_body: diag(1108, DiagnosticCategory.Error, "A_return_statement_can_only_be_used_within_a_function_body_1108", "A 'return' statement can only be used within a function body."),
    Return_type_annotation_circularly_references_itself: diag(2577, DiagnosticCategory.Error, "Return_type_annotation_circularly_references_itself_2577", "Return type annotation circularly references itself."),
    _0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: diag(7023, DiagnosticCategory.Error, "_0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_reference_7023", "'{0}' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."),
    Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: diag(7024, DiagnosticCategory.Error, "Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_ref_7024", "Function implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."),
    Types_of_property_0_are_incompatible: diag(2326, DiagnosticCategory.Error, "Types_of_property_0_are_incompatible_2326", "Types of property '{0}' are incompatible."),
    Call_signature_return_types_0_and_1_are_incompatible: diag(2202, DiagnosticCategory.Error, "Call_signature_return_types_0_and_1_are_incompatible_2202", "Call signature return types '{0}' and '{1}' are incompatible.", /*reportsUnnecessary*/ undefined, /*elidedInCompatabilityPyramid*/ true),
    Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1: diag(2204, DiagnosticCategory.Error, "Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1_2204", "Call signatures with no arguments have incompatible return types '{0}' and '{1}'.", /*reportsUnnecessary*/ undefined, /*elidedInCompatabilityPyramid*/ true),
    Type_at_position_0_in_source_is_not_compatible_with_type_at_position_1_in_target: diag(2626, DiagnosticCategory.Error, "Type_at_position_0_in_source_is_not_compatible_with_type_at_position_1_in_target_2626", "Type at position {0} in source is not compatible with type at position {1} in target."),
    Type_at_positions_0_through_1_in_source_is_not_compatible_with_type_at_position_2_in_target: diag(2627, DiagnosticCategory.Error, "Type_at_positions_0_through_1_in_source_is_not_compatible_with_type_at_position_2_in_target_2627", "Type at positions {0} through {1} in source is not compatible with type at position {2} in target."),
    The_types_of_0_are_incompatible_between_these_types: diag(2200, DiagnosticCategory.Error, "The_types_of_0_are_incompatible_between_these_types_2200", "The types of '{0}' are incompatible between these types."),
    The_types_returned_by_0_are_incompatible_between_these_types: diag(2201, DiagnosticCategory.Error, "The_types_returned_by_0_are_incompatible_between_these_types_2201", "The types returned by '{0}' are incompatible between these types."),
    Type_0_is_not_comparable_to_type_1: diag(2678, DiagnosticCategory.Error, "Type_0_is_not_comparable_to_type_1_2678", "Type '{0}' is not comparable to type '{1}'."),
    Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated: diag(2719, DiagnosticCategory.Error, "Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated_2719", "Type '{0}' is not assignable to type '{1}'. Two different types with this name exist, but they are unrelated."),
    Type_0_is_not_assignable_to_type_1_Did_you_mean_2: diag(2820, DiagnosticCategory.Error, "Type_0_is_not_assignable_to_type_1_Did_you_mean_2_2820", "Type '{0}' is not assignable to type '{1}'. Did you mean '{2}'?"),
    Type_0_is_not_assignable_to_type_1: diag(2322, DiagnosticCategory.Error, "Type_0_is_not_assignable_to_type_1_2322", "Type '{0}' is not assignable to type '{1}'."),
    Argument_of_type_0_is_not_assignable_to_parameter_of_type_1: diag(2345, DiagnosticCategory.Error, "Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_2345", "Argument of type '{0}' is not assignable to parameter of type '{1}'."),
    _0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible: diag(2692, DiagnosticCategory.Error, "_0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible_2692", "'{0}' is a primitive, but '{1}' is a wrapper object. Prefer using '{0}' when possible."),
    The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead: diag(2696, DiagnosticCategory.Error, "The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead_2696", "The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead?"),
    Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it: diag(2560, DiagnosticCategory.Error, "Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it_2560", "Value of type '{0}' has no properties in common with type '{1}'. Did you mean to call it?"),
    Type_0_has_no_properties_in_common_with_type_1: diag(2559, DiagnosticCategory.Error, "Type_0_has_no_properties_in_common_with_type_1_2559", "Type '{0}' has no properties in common with type '{1}'."),
    Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_write_2: diag(2561, DiagnosticCategory.Error, "Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_writ_2561", "Object literal may only specify known properties, but '{0}' does not exist in type '{1}'. Did you mean to write '{2}'?"),
    Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1: diag(2353, DiagnosticCategory.Error, "Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1_2353", "Object literal may only specify known properties, and '{0}' does not exist in type '{1}'."),
    The_containing_function_or_module_body_is_too_large_for_control_flow_analysis: diag(2563, DiagnosticCategory.Error, "The_containing_function_or_module_body_is_too_large_for_control_flow_analysis_2563", "The containing function or module body is too large for control flow analysis."),
    Expression_produces_a_union_type_that_is_too_complex_to_represent: diag(2590, DiagnosticCategory.Error, "Expression_produces_a_union_type_that_is_too_complex_to_represent_2590", "Expression produces a union type that is too complex to represent."),
    Cannot_find_global_type_0: diag(2318, DiagnosticCategory.Error, "Cannot_find_global_type_0_2318", "Cannot find global type '{0}'."),
    Global_type_0_must_be_a_class_or_interface_type: diag(2316, DiagnosticCategory.Error, "Global_type_0_must_be_a_class_or_interface_type_2316", "Global type '{0}' must be a class or interface type."),
    Global_type_0_must_have_1_type_parameter_s: diag(2317, DiagnosticCategory.Error, "Global_type_0_must_have_1_type_parameter_s_2317", "Global type '{0}' must have {1} type parameter(s)."),
    Excessive_complexity_comparing_types_0_and_1: diag(2859, DiagnosticCategory.Error, "Excessive_complexity_comparing_types_0_and_1_2859", "Excessive complexity comparing types '{0}' and '{1}'."),
    Excessive_stack_depth_comparing_types_0_and_1: diag(2321, DiagnosticCategory.Error, "Excessive_stack_depth_comparing_types_0_and_1_2321", "Excessive stack depth comparing types '{0}' and '{1}'."),
    The_last_overload_gave_the_following_error: diag(2770, DiagnosticCategory.Error, "The_last_overload_gave_the_following_error_2770", "The last overload gave the following error."),
    No_overload_matches_this_call: diag(2769, DiagnosticCategory.Error, "No_overload_matches_this_call_2769", "No overload matches this call."),
    The_last_overload_is_declared_here: diag(2771, DiagnosticCategory.Error, "The_last_overload_is_declared_here_2771", "The last overload is declared here."),
    Overload_0_of_1_2_gave_the_following_error: diag(2772, DiagnosticCategory.Error, "Overload_0_of_1_2_gave_the_following_error_2772", "Overload {0} of {1}, '{2}', gave the following error."),
    A_spread_argument_must_either_have_a_tuple_type_or_be_passed_to_a_rest_parameter: diag(2556, DiagnosticCategory.Error, "A_spread_argument_must_either_have_a_tuple_type_or_be_passed_to_a_rest_parameter_2556", "A spread argument must either have a tuple type or be passed to a rest parameter."),
    Expected_0_arguments_but_got_1: diag(2554, DiagnosticCategory.Error, "Expected_0_arguments_but_got_1_2554", "Expected {0} arguments, but got {1}."),
    Expected_at_least_0_arguments_but_got_1: diag(2555, DiagnosticCategory.Error, "Expected_at_least_0_arguments_but_got_1_2555", "Expected at least {0} arguments, but got {1}."),
    No_overload_expects_0_arguments_but_overloads_do_exist_that_expect_either_1_or_2_arguments: diag(2575, DiagnosticCategory.Error, "No_overload_expects_0_arguments_but_overloads_do_exist_that_expect_either_1_or_2_arguments_2575", "No overload expects {0} arguments, but overloads do exist that expect either {1} or {2} arguments."),
    An_argument_for_0_was_not_provided: diag(6210, DiagnosticCategory.Message, "An_argument_for_0_was_not_provided_6210", "An argument for '{0}' was not provided."),
    An_argument_matching_this_binding_pattern_was_not_provided: diag(6211, DiagnosticCategory.Message, "An_argument_matching_this_binding_pattern_was_not_provided_6211", "An argument matching this binding pattern was not provided."),
    Arguments_for_the_rest_parameter_0_were_not_provided: diag(6236, DiagnosticCategory.Error, "Arguments_for_the_rest_parameter_0_were_not_provided_6236", "Arguments for the rest parameter '{0}' were not provided."),
    The_call_would_have_succeeded_against_this_implementation_but_implementation_signatures_of_overloads_are_not_externally_visible: diag(2793, DiagnosticCategory.Error, "The_call_would_have_succeeded_against_this_implementation_but_implementation_signatures_of_overloads_2793", "The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible."),
    Cannot_read_file_0: diag(5083, DiagnosticCategory.Error, "Cannot_read_file_0_5083", "Cannot read file '{0}'."),
    The_files_list_in_config_file_0_is_empty: diag(18002, DiagnosticCategory.Error, "The_files_list_in_config_file_0_is_empty_18002", "The 'files' list in config file '{0}' is empty."),
    Compiler_option_0_requires_a_value_of_type_1: diag(5024, DiagnosticCategory.Error, "Compiler_option_0_requires_a_value_of_type_1_5024", "Compiler option '{0}' requires a value of type {1}."),
    File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: diag(5010, DiagnosticCategory.Error, "File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0_5010", "File specification cannot end in a recursive directory wildcard ('**'): '{0}'."),
    File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: diag(5065, DiagnosticCategory.Error, "File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildca_5065", "File specification cannot contain a parent directory ('..') that appears after a recursive directory wildcard ('**'): '{0}'."),
    Reusing_resolution_of_module_0_from_1_of_old_program_it_was_successfully_resolved_to_2: diag(6183, DiagnosticCategory.Message, "Reusing_resolution_of_module_0_from_1_of_old_program_it_was_successfully_resolved_to_2_6183", "Reusing resolution of module '{0}' from '{1}' of old program, it was successfully resolved to '{2}'."),
    Reusing_resolution_of_module_0_from_1_of_old_program_it_was_successfully_resolved_to_2_with_Package_ID_3: diag(6184, DiagnosticCategory.Message, "Reusing_resolution_of_module_0_from_1_of_old_program_it_was_successfully_resolved_to_2_with_Package__6184", "Reusing resolution of module '{0}' from '{1}' of old program, it was successfully resolved to '{2}' with Package ID '{3}'."),
    Reusing_resolution_of_module_0_from_1_of_old_program_it_was_not_resolved: diag(6389, DiagnosticCategory.Message, "Reusing_resolution_of_module_0_from_1_of_old_program_it_was_not_resolved_6389", "Reusing resolution of module '{0}' from '{1}' of old program, it was not resolved."),
    Expected_0_type_arguments_but_got_1: diag(2558, DiagnosticCategory.Error, "Expected_0_type_arguments_but_got_1_2558", "Expected {0} type arguments, but got {1}."),
    No_overload_expects_0_type_arguments_but_overloads_do_exist_that_expect_either_1_or_2_type_arguments: diag(2743, DiagnosticCategory.Error, "No_overload_expects_0_type_arguments_but_overloads_do_exist_that_expect_either_1_or_2_type_arguments_2743", "No overload expects {0} type arguments, but overloads do exist that expect either {1} or {2} type arguments."),
    Cannot_find_module_0_or_its_corresponding_type_declarations: diag(2307, DiagnosticCategory.Error, "Cannot_find_module_0_or_its_corresponding_type_declarations_2307", "Cannot find module '{0}' or its corresponding type declarations."),
    Module_0_was_resolved_to_1_but_allowArbitraryExtensions_is_not_set: diag(6263, DiagnosticCategory.Error, "Module_0_was_resolved_to_1_but_allowArbitraryExtensions_is_not_set_6263", "Module '{0}' was resolved to '{1}', but '--allowArbitraryExtensions' is not set."),
    File_0_is_not_a_module: diag(2306, DiagnosticCategory.Error, "File_0_is_not_a_module_2306", "File '{0}' is not a module."),
}