import { Tree, GeneratorCallback } from '@nrwl/devkit';
import { Schema } from './schema';
export declare function initGenerator<T extends Schema>(tree: Tree, options: T): Promise<GeneratorCallback>;
export declare const initSchematic: <T extends Schema>(options: T) => (tree: any, context: any) => Promise<any>;
