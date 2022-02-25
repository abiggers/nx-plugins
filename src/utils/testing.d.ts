import { Rule, Tree } from '@angular-devkit/schematics';
export declare function runSchematic<SchemaOptions = any>(schematicName: string, options: SchemaOptions, tree: Tree): Promise<import("@angular-devkit/schematics/testing").UnitTestTree>;
export declare function callRule(rule: Rule, tree: Tree): Promise<import("@angular-devkit/schematics/src/tree/interface").Tree>;
export declare function createTestUILib(libName: string, buildable?: boolean): Promise<Tree>;
